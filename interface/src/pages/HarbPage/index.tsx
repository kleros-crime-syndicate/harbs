import OwnerMenu from "./OwnerMenu";
import BuyerMenu from "./BuyerMenu";
import CollectorMenu from "./CollectorMenu";

interface IInfoItem {
  title: string;
  value: string;
}

const InfoItem: React.FC<IInfoItem> = ({ title, value }) => (
  <>
    <label className="text-right">{title}:</label>
    <label>{value}</label>
  </>
);

const HarbPage: React.FC = () => {
  return (
    <div className={`flex flex-col items-center max-w-[1900px] mx-auto gap-16`}>
      <div className="flex items-center w-full justify-center ">
        <div
          className={`
            w-[34%]
            pb-[17%]
            bg-red-600
            flex-none
          `}
        >
        </div>
        <div className={`grid grid-cols-2 items-center gap-2`}>
          <InfoItem title={"External URL"} value={"htts://asfasdfasdfasdf"} />
          <InfoItem title={"Owner"} value={"0x98787647664487658747654876"} />
          <InfoItem title={"Collector"} value={"0x98787647664487658747654876"} />
          <InfoItem title={"Valuation"} value={"100 ETH"} />
          <InfoItem title={"Tax per year"} value={"10 ETH"} />
          <InfoItem title={"Runaway"} value={"29 days"} />
        </div>
      </div>
      <div>
        <OwnerMenu />
      </div>
      <div className="flex flex-col items-center gap-8">
        <BuyerMenu />
        <CollectorMenu />
      </div>
    </div>
  );
};

export default HarbPage;
