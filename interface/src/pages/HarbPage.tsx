import { useParams } from "react-router-dom";
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

interface IInfoItem {
  title: string;
  value: string;
}

const InfoItem: React.FC<IInfoItem> = ({ title, value }) => (
  <>
    <label className="text-right text-black/70">{title}</label>
    <label className="text-left text-3xl">{value}</label>
  </>
);

const HarbPage: React.FC = () => {
  // const { tokenID, address } = useParams();
  const { account, chainId } = useWeb3();
  const { address, tokenID } = useParams();
  const ad = useAdQuery(`${tokenID}@${address}`);
  const [photo, setPhoto] = useState<ArrayBuffer | null>(null);
  const [loading, setLoading] = useState(0);
  const [valuation, setValuation] = useState<number>(ad ? parseInt(ad.valuation) : 0);
  const [fund, setFund] = useState(0);
  const harbergerAds = useHarbergerAds(address);

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
          <img src={ad.uri ? "https://i.imgur.com/vz6opLM.png" : ipfs(ad.uri)} />
          <div {...getRootProps()}>
            <input id="photo" {...getInputProps()} />
            <div className="mt-2 px-8 border-black border-2 border-dashed p-1 cursor-pointer">
              <p>Want to change the image?</p>
              <p>Drop it here or click to upload</p>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-2 items-end gap-2`}>
          <label className="text-right text-black/70">Collection</label>
          <ALink
            className="text-left text-4xl text-theme-darkish underline underline-offset-2"
            href={`${EXPLORER_ENDPOINTS[chainId]}/address/${ad.collectionAddress}`}
          >
            {ad.collection.name}
          </ALink>
          <InfoItem title="Fund" value={ad.fund} />
          <label className="text-right text-black/70">Owner</label>
          <ALink
            className="text-left text-4xl text-theme-darkish underline underline-offset-2"
            href={`${EXPLORER_ENDPOINTS[chainId]}/address/${ad.owner}`}
          >
            {shortenAddress(ad.owner)}
          </ALink>
          <InfoItem title="URI" value={ad.uri} />
          <InfoItem title="Valuation" value={ad.valuation} />

          <InfoItem title="Tax (% per year)" value={ad.collection.taxRate} />
          <label className="text-right text-black/70">Tax collector</label>
          <ALink
            className="text-left text-4xl text-theme-darkish underline underline-offset-2"
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
          type="number"
          min="0"
          className="border-black border-2 p-1 py-2"
          value={valuation}
          onChange={(e) => setValuation(parseInt(e.target.value))}
        />

        {account !== ad.owner && (
          <>
            <label className="text-lg text-right mr-2 text-black/70" htmlFor="fund">
              Starting fund
            </label>
            <input
              id="fund"
              type="number"
              min="0"
              className="border-black border-2 p-1 py-2"
              value={fund}
              onChange={(e) => setFund(parseInt(e.target.value))}
            />
          </>
        )}
      </div>

      <button
        className="border-2 border-black p-2"
        onClick={() => {
          if (account === ad.owner) {
            harbergerAds.changeValuation(tokenID, valuation);
            return;
          }
          harbergerAds.buy(tokenID, ad.valuation, valuation, fund);
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
