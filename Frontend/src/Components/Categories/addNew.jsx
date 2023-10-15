import { useFormik } from "formik";
import { useState } from "react";
import { API } from "../../helper";

export default function AddNew() {
  const [img, setImg] = useState("");
  const form = new FormData();
  async function sendData(values) {
    const { title } = values;
    console.log(img);
    try {
      const res = await fetch(`${API}categories`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            cate_title: title,
            cate_img: img.name,
          },
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  const formikObj = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      sendData(values);
      console.log(img[0]);
    },
  });
  return (
    <div className="mt-4">
      <div className="container m-auto">
        <form action="" onSubmit={formikObj.handleSubmit}>
          <div className="form-group my-4">
            <label htmlFor="cate_title">title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter Category Title"
              onChange={formikObj.handleChange}
              value={formikObj.values.title}
            />
          </div>
          <div className="form-group my-4">
            <label htmlFor="img">img:</label>
            <input
              type="file"
              name="img"
              id="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <button type="submit">add</button>
        </form>
        {img && <img src={`/src/assets/${img.slice(11)}`} alt="" />}
      </div>
    </div>
  );
}
