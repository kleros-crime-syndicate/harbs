import { useAdsQuery } from "api/ads";
import Harb from "components/Harb";

const Marketplace: React.FC = () => {
  const ads = useAdsQuery();

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
          <Harb key={ad.id} {...{ ad }} />
        ))}
      </div>
    </>
  );
};

export default Marketplace;
