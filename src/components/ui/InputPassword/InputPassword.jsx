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

function InputPassword({
  id = "",
  name = "",
  size = "md",
  icon = null,
  onChange = () => {},
  className = "",
  placeholder = "",
  ...props
}) {
  return (
    <div className={classNames("input-password")}>
      {icon}
      <input
        type="password"
        id={id}
        name={name}
        onChange={onChange}
        className={classNames(
          `input-password-${size}`,
          "input-class",
          className,
        )}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

InputPassword.propTypes = propTypes;

export default InputPassword;
