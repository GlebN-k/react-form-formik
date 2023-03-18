import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={true}
        className="bg-transparent w-full border-green-500"
      />
    </>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  // value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
