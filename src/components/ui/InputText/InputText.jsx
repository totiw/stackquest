import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  icon: PropTypes.node || null,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

function InputText({
  id = "",
  name = "",
  size = "md",
  icon = null,
  onChange = () => {},
  className = "",
  placeholder = "",
  ...props
}) {
  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z0-9]/g, ""); // Hapus karakter selain huruf dan angka
    e.target.value = value; // Perbarui nilai input
  };

  return (
    <div className={classNames("input-text")}>
      {icon}
      <input
        type="text"
        id={id}
        name={name}
        onInput={handleInputChange}
        onChange={onChange}
        className={classNames(`input-text-${size}`, "input-class", className)}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

InputText.propTypes = propTypes;

export default InputText;
