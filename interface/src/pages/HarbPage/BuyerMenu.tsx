import { useFormik } from "formik";
import { BigNumber } from "ethers";
import { useBuyHarb } from "hooks/useBuyHarb";

interface IBuyerMenu {
  valuation: BigNumber;
}

interface IValues {
  newValuation: number;
  runaway: number;
}

const BuyerMenu: React.FC<IBuyerMenu> = ({ valuation }) => {
  const { buyHarb, disabled } = useBuyHarb(valuation);
  const formik = useFormik({
    initialValues: {
      newValuation: 0,
      runaway: 0,
    },
    onSubmit: async (values: IValues) => {
      await buyHarb(values);
    },
  });
  return (
    <div className="flex gap-12 items-center">
      <form className="flex gap-2 items-center" onSubmit={formik.handleSubmit}>
        <label>New Valuation:</label>
        <input type="number" step="any" id="newValuation" onChange={formik.handleChange} value={formik.values["newValuation"]} min="0" className="border-black border-2 p-1 py-2"/>
        <label>Runaway: </label>
        <input type="number" step="any" id="runaway" onChange={formik.handleChange} value={formik.values["runaway"]} min="0" className="border-black border-2 p-1 py-2"/>
        <button type="submit" disabled={disabled} className="border-2 border-black p-2 mx-4">
          Buy
        </button>
      </form>
    </div>
  );
};

export default BuyerMenu;
