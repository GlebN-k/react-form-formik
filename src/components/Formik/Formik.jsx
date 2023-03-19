import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const FeedbackForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      checked: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "Юзернейм повинен містити мінімум 4 символи")
        .required("Обовʼязкове поле"),
      email: Yup.string()
        .email("Неправильна адреса електронної пошти")
        .required("Обовʼязкове поле"),
      phone: Yup.string()
        .matches(/^\+380\d{9}$/, "Перевір формат номеру телефона")
        .required("Обовʼязкове поле"),
      message: Yup.string()
        .min(10, "Повідомлення має бути не менше 10 символів")
        .required("Обовʼязкове поле"),
      checked: Yup.bool().oneOf([true], "Потрібно надати згоду"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-[60%] mx-auto bg-lime-200 rounded flex flex-wrap justify-between"
    >
      <div className="relative bg-transparent w-[300px] border-b-2 border-green-500 my-8">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Ім'я та прізвище"
          className="bg-transparent w-full border-green-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-600 absolute t-[60px] text-sm">
            {formik.errors.name}
          </div>
        ) : null}
      </div>

      <div className="relative bg-transparent w-[300px] border-b-2 border-green-500 my-8">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="bg-transparent w-full border-green-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 absolute t-[30px] text-sm">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="relative bg-transparent w-[300px] border-b-2 border-green-500 my-8">
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder="Телефон у форматі (+380)"
          className="bg-transparent w-full border-green-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-600 absolute t-[30px] text-sm">
            {formik.errors.phone}
          </div>
        ) : null}
      </div>

      <div className="relative bg-transparent w-[300px] border-b-2 border-green-500 my-8 basis-full">
        <input
          id="message"
          name="message"
          type="text"
          placeholder="Повідомлення"
          className="bg-transparent w-full border-green-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-600 absolute t-[30px] text-sm">
            {formik.errors.message}
          </div>
        ) : null}
      </div>

      <div>
        <input
          type="checkbox"
          name="checked"
          checked={formik.values.checked}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label className="text-green-800 ml-4" htmlFor="checked" onClick={() => {
    formik.setFieldValue("checked", !formik.values.checked);
  }}>
          Надіслати мені оновлення про академію
        </label>
        {formik.touched.checked && formik.errors.checked ? (
          <div className="text-red-600 absolute t-[30px] text-sm">
            {formik.errors.checked}
          </div>
        ) : null}
      </div>
      
      <div className="basis-full">
        <button
          type="submit"
          className="bg-amber-500 text-white rounded-full px-8 py-3 text-xl hover:bg-amber-600 my-5 m-auto block mt-16"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
