import { useFormik } from "formik";

interface IField extends React.HTMLProps<HTMLInputElement> {
  formik: any,
  label: string,
  id: string
}

const Field: React.FC<IField> = ({ label, formik, className, id, ...props }) => (
  <>
    <label className="text-right" htmlFor={id}>{label}:</label>
    <input
      className={`${className} border-black border-2 p-1`}
      onChange={formik.handleChange}
      value={formik.values[id]}
      {...{id, ...props}}
    />
    <div />
  </>
);

const NewCollection = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      collector: "",
      name: "",
      numberAds: "",
      taxRate: "",
      cooldown: "",
      symbol: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      className={`flex flex-col items-center gap-6`}
      onSubmit={formik.handleSubmit}
    >
      <div className={`grid grid-cols-3 items-center gap-6`}>
        <Field
          label="Collector Address"
          className="w-[400px]"
          id="collector"
          type="string"
          formik={formik}
        />
        <Field
          label="Name"
          id="name"
          className="w-[400px]"
          type="string"
          formik={formik}
        />
        <Field
          label="Number of ads"
          id="numberAds"
          className="w-[70px]"
          type="number"
          min={0}
          formik={formik}
        />
        <Field
          label="Tax Rate (% per year)"
          id="taxRate"
          className="w-[70px]"
          type="number"
          min={0}
          formik={formik}
        />
        <Field
          label="Collection Symbol"
          id="symbol"
          className="w-[250px]"
          type="string"
          formik={formik}
        />
      </div>
      <button
        className={`
          border-2
          border-black
          p-2
          hover:cursor-pointer
          hover:bg-gray-200
          transition
          duration-200
        `}
        type="submit">Submit</button>
    </form>
  );
};

export default NewCollection;
