import { useFormik } from "formik";
import { useParams } from "react-router-dom";

const OwnerMenu: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      newValuation: 0,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { tokenID, address } = useParams();
  return (
    <div className="flex gap-12 items-center">
      <form className="flex gap-2 items-center" onSubmit={formik.handleSubmit}>
        <button
          className="border-2 border-black p-2"
          type="submit"
        >
          Change Valuation
        </button>
        <input type="number" min="0" className="border-black border-2 p-1 py-2"/>
      </form>
      <button className="border-2 border-black p-2">
        Revoke
      </button>
    </div>
  );
};

export default OwnerMenu;
