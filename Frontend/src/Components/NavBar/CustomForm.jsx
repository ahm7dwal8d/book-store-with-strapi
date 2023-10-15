import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
export default function CustomForm() {
  const navigate = useNavigate();
  const formikObj = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: function (values) {
      console.log(values);
      navigate(`/${values.name}`, { replace: true });
    },
  });
  return (
    <>
      <form action="" className="w-full" onSubmit={formikObj.handleSubmit}>
        <input
          type="text"
          //   id="name"
          name="name"
          onChange={formikObj.handleChange}
          value={formikObj.values.name}
          className="bg-transparent focus:outline-none lg:w-[92%] md:w-[90%] sm:w-[88%]"
        />
        <button className="lg:w-[7%] md:w-[9%] sm:w-[10%]">
          <FontAwesomeIcon className="" icon={faSearch} />
        </button>
      </form>
    </>
  );
}
