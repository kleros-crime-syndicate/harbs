import { useMyAdsQuery } from "api/ads";
import { NavLink } from "react-router-dom";

const MyAccount: React.FC = () => {
  const ads = useMyAdsQuery();

  return (
    <>
      {ads.length ? (
        <div className="flex flex-col">
          {ads.map((ad) => (
            <NavLink to={ad.id}>{ad.id}</NavLink>
          ))}
        </div>
      ) : (
        <div className="text-5xl">You have no ads (yet...)</div>
      )}
    </>
  );
};

export default MyAccount;
