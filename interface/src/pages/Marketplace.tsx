import Harb from "components/Harb";

const Marketplace: React.FC = () => (
  <>
    <div className={`
      grid
      grid-cols-3
      gap-12
      justify-items-center
      items-center
      w-full
      max-w-[1900px]
      ml-auto
      mr-auto
    `}>
      {[1,2,3,4].map(() => <Harb valuation={3000} />)}
    </div>
  </>
);

export default Marketplace;
