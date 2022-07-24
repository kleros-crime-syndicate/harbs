import { Link } from "react-router-dom";
import { utils } from "ethers";
import { AdsQuery } from "generated/graphql";
import { ipfs } from "utils/ipfs";
import cn from "classnames";

const Harb: React.FC<{ ad: AdsQuery["ads"][0] }> = ({ ad }) => {
  return (
    <Link
      key={ad.id}
      className={cn(
        "w-full pb-[50%] relative bg-no-repeat bg-cover bg-center hover:cursor-pointer hover:scale-105 hover:z-10 hover:shadow-xl transition duration-150 ease-out overflow-hidden"
      )}
      style={{
        backgroundImage: ad.uri
          ? `url('https://ipfs.kleros.io/ipfs/${ad.uri}')`
          : "url('https://i.imgur.com/vz6opLM.png')",
      }}
      to={`/${ad.id.split("@").reverse().join("/")}`}
    >
      <div
        className={`
      absolute
      inset-x-0
      bottom-0
      p-4
      flex
      items-between
      bg-background/70
      backdrop-blur-md
      justify-between
      `}
      >
        <div className="flex flex-col">
          <p className="leading-5 p-0 text-white text-lg">Collection</p>
          <p className="leading-5 text-white text-3xl">{ad.collection.name}</p>
        </div>
        <div className="flex flex-col">
          <p className="leading-5 p-0 text-white text-lg">Valuation</p>
          <p className="leading-5 text-white text-3xl">
            {utils.formatUnits(ad.valuation)} WMATIC
          </p>
        </div>
        {/* <div className="flex flex-col">
          <p className="leading-5 p-0 text-white text-lg">Owner</p>
          <p className="leading-5 text-white text-3xl">{ad.owner}</p>
        </div> */}
      </div>
    </Link>
  );
};

export default Harb;
