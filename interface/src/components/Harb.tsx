import React from "react";

interface IHarb {
  valuation: number;
}

const Harb: React.FC<IHarb> = ({ valuation }) => {
  return (
    <div
      className={`
      w-full
      pb-[100%]
      bg-red-600
      relative
      hover:cursor-pointer
      hover:scale-110 hover:z-10 hover:shadow-xl
      transition duration-150 ease-out
    `}
    >
      <div
        className={`
        absolute
        inset-x-0
        bottom-0
        p-4
        flex
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
        <p className="text-white text-2xl">Valuation:</p>
        <p className="text-white text-2xl">{valuation} ETH</p>
      </div>
    </div>
  );
};

export default Harb;
