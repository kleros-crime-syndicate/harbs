import Preview from "components/Preview";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";

interface IField extends React.HTMLProps<HTMLInputElement> {
  formik: any;
  label: string;
  id: string;
}

const Field: React.FC<IField> = ({ label, formik, className, id, ...props }) => (
  <>
    <label className="text-lg text-right mr-2" htmlFor={id}>
      {label}
    </label>
    <input
      className={`${className} border-black border-2 p-1`}
      onChange={formik.handleChange}
      value={formik.values[id]}
      {...{ id, ...props }}
    />
    <div />
  </>
);

interface FormInterface {
  collector: string;
  name: string;
  numberAds: string;
  taxRate: string;
  cooldown: string;
  symbol: string;
  photo: ArrayBuffer | null;
}

const NewCollection = () => {
  const formik = useFormik<FormInterface>({
    initialValues: {
      collector: "",
      name: "",
      numberAds: "",
      taxRate: "",
      cooldown: "",
      symbol: "",
      photo: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const blob = new Blob([file], { type: file.type });
      formik.setFieldValue("photo", await blob.arrayBuffer());
    },
  });

  const photoUri = formik.values.photo
    ? URL.createObjectURL(new Blob([formik.values.photo], { type: "buffer" }))
    : null;

  return (
    <form className={`flex flex-col items-center`} onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2">
        <div className={`h-96 grid grid-cols-3 items-center`}>
          <Field label="Collector Address" className="w-[400px]" id="collector" type="string" formik={formik} />
          <Field label="Name" id="name" className="w-[400px]" type="string" formik={formik} />
          <Field label="Number of ads" id="numberAds" className="w-[70px]" type="number" min={0} formik={formik} />
          <Field
            label="Tax Rate (% per year)"
            id="taxRate"
            className="w-[70px]"
            type="number"
            min={0}
            formik={formik}
          />
          <Field label="Collection Symbol" id="symbol" className="w-[400px]" type="string" formik={formik} />
          <label className="text-lg text-right mr-2" htmlFor={"photo"}>
            Media
          </label>
          <div {...getRootProps()}>
            <input id="photo" {...getInputProps()} />
            <p className="w-[400px] border-black border-2 p-1">Drop image here or click to upload</p>
          </div>
        </div>
        {photoUri && (
          <Preview
            trigger={<img className="max-w-3xl cursor-pointer border-8 border-theme shadow-lg" src={photoUri} />}
          >
            <img src={photoUri} />
          </Preview>
        )}
      </div>
      <button
        className={`
          m-8
          border-4
          border-theme-lightish
          py-2
          px-8
          text-3xl
          text-white
          font-bold
          bg-theme-darkish
          hover:cursor-pointer
          hover:bg-theme-lightish
          transition
          duration-200
        `}
        type="submit"
      >
        Submit
      </button>
      <div className="h-48" />
    </form>
  );
};

export default NewCollection;
