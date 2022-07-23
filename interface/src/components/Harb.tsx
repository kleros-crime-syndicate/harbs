import { useNavigate } from "react-router-dom";

interface IHarb {
  valuation: number;
  address: string;
}

const Harb: React.FC<IHarb> = ({ valuation, address }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`
      w-full
      pb-[50%]
      bg-red-600
      relative
      hover:cursor-pointer
      hover:-translate-y-2
      hover:scale-105 hover:z-10 hover:shadow-xl
      transition duration-150 ease-out
    `}
      onClick={() => navigate("/" + address)}
    >
      <div
        className={`
        absolute
        inset-x-0
        bottom-0
        p-4
        flex
        flex-col
        bg-stone-800/70
        justify-between
        `}
      >
        {/* <div
          className={`
          fixed
          bottom-0
          w-full
          blur-sm
        `}
        /> */}
        <p className="leading-5 p-0 text-white text-lg">Valuation</p>
        <p className="leading-5 text-white text-3xl">{valuation} MATIC</p>
      </div>
    </div>
  );
};

export default Harb;
