import { useMyAdsQuery } from "api/ads";
import Harb from "components/Harb";
import useWeb3 from "hooks/useWeb3";

const MyAccount: React.FC = () => {
  const { account } = useWeb3();
  const ads = useMyAdsQuery(account?.toLowerCase());

  return (
    <>
      {ads.length ? (
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
      ) : (
        <div className="text-5xl">You have no ads (yet...)</div>
      )}
    </>
  );
};

export default MyAccount;
