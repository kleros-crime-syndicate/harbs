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
    `}
      onClick={() => navigate("/" + address)}
    >
      <div
        className={`
        absolute
        inset-x-0
        bottom-0
        bg-stone-800/70
        p-4
        flex
        justify-between
      `}
      >
        <p
          className={`
          text-white
          text-2xl
        `}
        >
          Valuation:
        </p>
        <p
          className={`
          text-white
          text-2xl
        `}
        >
          {valuation} ETH
        </p>
      </div>
    </div>
  );
};

export default Harb;
