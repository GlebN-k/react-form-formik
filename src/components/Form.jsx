import React, { useState } from "react";

import Input from "./Input";
import Button from "./Button";
import Checkbox from "./Checkbox";

const Form = () => {
  const [user, setUser] = useState({});
  const [errorName, setErrorName] = useState();
  const [errorEmail, setErrorEmail] = useState();
  const [errorTel, setErrorTel] = useState();
  const [errorMessage, setErrorMessage] = useState();

  // reqular expressions for checking input values (email and number)
  const emailNumberPatter = /\S+@\S+\.\S+/;
  const phoneNumberPattern = /^\+380\d{9}$/;

  const handleError = (e) => {
    if (e.target.name === "name" && e.target.value.length < 4) {
      return setErrorName(`Юзернейм повинен містити мінімум 4 символи`);
    } else if (e.target.name === "name") {
      setErrorName(null);
    }

    if (e.target.name === "email" && !emailNumberPatter.test(e.target.value)) {
      return setErrorEmail(`Неправильна адреса електронної пошти`);
    } else if (e.target.name === "email") {
      setErrorEmail(null);
    }

    if (e.target.name === "tel" && !phoneNumberPattern.test(e.target.value)) {
      return setErrorTel(`Перевір формат номеру телефона`);
    } else if (e.target.name === "tel") {
      setErrorTel(null);
    }

    if (e.target.name === "message" && e.target.value.length < 10) {
      return setErrorMessage(`Повідомлення має бути не менше 10 символів`);
    } else if (e.target.name === "message") {
      setErrorMessage(null);
    }
  };

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    handleError(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="p-10 w-[60%] mx-auto bg-lime-200 rounded flex flex-wrap justify-between">
      <div className="bg-transparent w-[300px] border-b-2 border-green-500 my-8">
        <Input
          type="text"
          name="name"
          placeholder="Ім'я та прізвище"
          value={user.name}
          onChange={handleInput}
        />
        {<p className="text-red-600 absolute t-[30px] text-sm">{errorName}</p>}
      </div>
      <div className="bg-transparent w-[300px] border-b-2 border-green-500 my-8">
        <Input
          type="email"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={handleInput}
        />
        {<p className="text-red-600 absolute t-[30px] text-sm">{errorEmail}</p>}
      </div>
      <div className="bg-transparent w-[300px] border-b-2 border-green-500 my-8 text-sm">
        <Input
          type="tel"
          name="tel"
          placeholder="Телефон (у форматі +380)"
          value={user.tel}
          onChange={handleInput}
        />
        {<p className="text-red-600 absolute t-[80px]">{errorTel}</p>}
      </div>
      {/* </div> */}
      {/* <br> */}
      <div className="bg-transparent w-[100%] border-b-2 border-green-500 my-8 basis-full relative">
        <Input
          type="text"
          name="message"
          placeholder="Повідомлення"
          value={user.message}
          onChange={handleInput}
        />
        {<p className="text-red-600 absolute text-sm">{errorMessage}</p>}
      </div>
      <Checkbox />
      <div className="basis-full">
        <Button onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default Form;
