import { useAdsQuery } from "api/ads";
import { Link, useNavigate } from "react-router-dom";

const Marketplace: React.FC = () => {
  const ads = useAdsQuery();
  const navigate = useNavigate();

  console.log({ ads });

  return (
    <>
      <div
        className={`
      grid
      grid-cols-3
      gap-6
      justify-items-center
      items-center
      w-full
      max-w-[1900px]
      mx-auto
      pb-16
    `}
      >
        {ads.map((ad) => (
          <Link
            key={ad.id}
            className={`
              w-full
              pb-[50%]
              relative
              bg-[url('https://i.imgur.com/vz6opLM.png')]
              bg-no-repeat
              bg-cover
              bg-center
              hover:cursor-pointer
              hover:scale-105 hover:z-10 hover:shadow-xl
              transition duration-150 ease-out
              overflow-hidden
            `}
            to={ad.id.split("@").reverse().join("/")}
            // onClick={() => navigate(ad.id.split("@").reverse().join("/"))}
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
                  {ad.valuation} {ad.collection.symbol}
                </p>
              </div>
              {/* <div className="flex flex-col">
                <p className="leading-5 p-0 text-white text-lg">Owner</p>
                <p className="leading-5 text-white text-3xl">{ad.owner}</p>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Marketplace;
