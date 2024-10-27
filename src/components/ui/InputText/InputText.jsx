import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  onChange: PropTypes.func,
  className: PropTypes.string,
};

function InputText({
  id = "",
  name = "",
  size = "md",
  onChange = () => {},
  className = "",
  ...props
}) {
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z0-9]/g, ""); // Hapus karakter selain huruf dan angka
    e.target.value = value; // Perbarui nilai input
  };

  return (
    <input
      type="text"
      id={id}
      name={name}
      onInput={handleInputChange}
      onChange={onChange}
      className={classNames("input-text", `input-text-${size}`, className)}
      {...props}
    />
  );
}

InputText.propTypes = propTypes;

export default InputText;
