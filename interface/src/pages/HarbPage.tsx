import { useParams } from "react-router-dom";
import { utils } from "ethers";
import { useAdQuery } from "api/ad";
import ALink from "components/ALink";
import useWeb3 from "hooks/useWeb3";
import { EXPLORER_ENDPOINTS } from "constants/explorers";
import { shortenAddress } from "utils/address";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import Modal from "components/Modal";
import { ipfs, uploadToIPFS } from "utils/ipfs";
import useInterval from "hooks/useInterval";
import { useHarbergerAds } from "hooks/useContract";
import { useWMatic } from "hooks/useContract";
import { toast } from "react-toastify";

interface IInfoItem {
  title: string;
  value: string;
}

const InfoItem: React.FC<IInfoItem> = ({ title, value }) => (
  <>
    <label className="text-right text-black/70">{title}</label>
    <label className="col-span-2 text-left text-3xl">{value}</label>
  </>
);

const HarbPage: React.FC = () => {
  // const { tokenID, address } = useParams();
  const { account, chainId } = useWeb3();
  const { address, tokenID } = useParams();
  const ad = useAdQuery(`${tokenID}@${address}`);
  const [photo, setPhoto] = useState<ArrayBuffer | null>(null);
  const [loading, setLoading] = useState(0);
  const [valuation, setValuation] = useState<string>(ad ? ad.valuation : "0");
  const [fund, setFund] = useState("0");
  const harbergerAds = useHarbergerAds(address);
  const wMatic = useWMatic();

  useInterval(() => setLoading((l) => ((l + 1) % 3) + 1), loading ? 300 : null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      setPhoto(await file.arrayBuffer());
    },
  });

  if (!ad || !chainId || !address || !tokenID || !harbergerAds) return <div>Loading...</div>;

  return (
    <div className={`flex flex-col items-center max-w-[1900px] mx-auto gap-16`}>
      <div className="flex items-center w-full justify-center ">
        <div className="flex flex-col items-center">
          <img src={ad.uri ? ipfs(ad.uri) : "https://i.imgur.com/vz6opLM.png"} />
          {account == ad.owner && (
            <div {...getRootProps()}>
              <input id="photo" {...getInputProps()} />
              <div className="mt-2 px-8 border-black border-2 border-dashed p-1 cursor-pointer">
                <p>Want to change the image?</p>
                <p>Drop it here or click to upload</p>
              </div>
            </div>
          )}
        </div>
        <div className={`grid grid-cols-3 items-end gap-2`}>
          <label className="text-right text-black/70">Collection</label>
          <ALink
            className="col-span-2 text-left text-4xl text-theme-darkish underline underline-offset-2"
            href={`${EXPLORER_ENDPOINTS[chainId]}/address/${ad.collectionAddress}`}
          >
            {ad.collection.name}
          </ALink>
          <InfoItem title="Fund" value={`${utils.formatUnits(ad.fund)} WMATIC`} />
          <label className="text-right text-black/70">Owner</label>
          <ALink
            className="col-span-2 text-left text-4xl text-theme-darkish underline underline-offset-2"
            href={`${EXPLORER_ENDPOINTS[chainId]}/address/${ad.owner}`}
          >
            {shortenAddress(ad.owner)}
          </ALink>
          <label className="text-right text-black/70">URI</label>
          <ALink
            className="col-span-2 text-left text-4xl text-theme-darkish underline underline-offset-2"
            href={ad.uri ? ipfs(ad.uri) : ""}
          >
            {ad.uri ? `${ad.uri.substring(0, 4)}.../${ad.uri.split("/")[1]}` : "EMPTY"}
          </ALink>
          <InfoItem title="Valuation" value={`${utils.formatUnits(ad.valuation)} WMATIC`} />

          <InfoItem title="Tax (% per year)" value={`${ad.collection.taxRate / 100}%`} />
          <label className="text-right text-black/70">Tax collector</label>
          <ALink
            className="col-span-2 text-left text-4xl text-theme-darkish underline underline-offset-2"
            href={`${EXPLORER_ENDPOINTS[chainId]}/address/${ad.owner}`}
          >
            {shortenAddress(ad.collection.collector)}
          </ALink>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center gap-2">
        <label className="text-lg text-right mr-2 text-black/70" htmlFor="valuation">
          Valuation
        </label>
        <input
          id="valuation"
          className="border-black border-2 p-1 py-2"
          value={valuation}
          onChange={(e) => {
            if (e.target.value !== undefined && /^\d*(\.\d{0,18}){0,1}$/.test(e.target.value))
              setValuation(e.target.value);
          }}
        />

        {account !== ad.owner && (
          <>
            <label className="text-lg text-right mr-2 text-black/70" htmlFor="fund">
              Starting fund
            </label>
            <input
              id="fund"
              className="border-black border-2 p-1 py-2"
              value={fund}
              onChange={(e) => {
                if (e.target.value !== undefined && /^\d*(\.\d{0,18}){0,1}$/.test(e.target.value))
                  setFund(e.target.value);
              }}
            />
          </>
        )}
      </div>

      <button
        className="border-2 border-black p-2"
        onClick={async () => {
          if (account) {
            const formatedValuation = utils.parseUnits(valuation);
            const formatedFund = utils.parseUnits(fund);
            if (account === ad.owner) {
              harbergerAds.changeValuation(tokenID, formatedValuation, { gasLimit: 4000000 });
              return;
            }
            const totalPrice = formatedFund.add(ad.valuation);
            const balance = await wMatic?.balanceOf(account);
            if (balance?.lt(totalPrice)) {
              toast("You need more WMatic.");
              return;
            }
            const allowance = await wMatic?.allowance(account, ad.collectionAddress);
            const enoughAllowance = allowance?.gte(totalPrice);
            if (!enoughAllowance) {
              toast("You need to increase allowance.");
              await wMatic?.increaseAllowance(ad.collectionAddress, totalPrice);
            }
            await harbergerAds.buy(tokenID, ad.valuation, formatedValuation, formatedFund, { gasLimit: 4000000 });
          }
        }}
      >
        {account === ad.owner ? "Change Valuation" : "Buy"}
      </button>

      {account === ad.owner && (
        <button className="border-2 border-black p-2" onClick={() => harbergerAds.revoke(tokenID)}>
          Revoke
        </button>
      )}

      {account === ad.collection.collector && (
        <button className="border-2 border-black p-2" onClick={() => harbergerAds.collect(tokenID)}>
          Collect
        </button>
      )}

      <Modal
        open={!!photo}
        unOpen={() => {
          setPhoto(null);
          setLoading(0);
        }}
      >
        {photo && (
          <div className="flex flex-col">
            <img src={URL.createObjectURL(new Blob([photo]))} />
            <button
              className="mt-2 w-full bg-theme text-white text-6xl"
              onClick={async () => {
                if (loading) return;
                setLoading(3);
                try {
                  const fileUri = await uploadToIPFS("harb", Buffer.from(photo));
                  harbergerAds.setAd(tokenID, fileUri);
                  setLoading(0);
                  setPhoto(null);
                } catch (err) {
                  setLoading(0);
                }
              }}
            >
              {loading ? new Array(loading).fill(".").join("") : "LET'S GO!"}
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HarbPage;
