import React from "react";
import classNames from "classnames";
import "./style.css";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "secondary"]),
  outline: false,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  disabled: false,
  className: "",
};

function Button({
  children = React.Component,
  type = "button",
  onClick = () => {},
  variant = "primary",
  outline = false,
  size = "md",
  disabled = false,
  className = "",
}) {
  const btnVariant = classNames({
    "btn-primary": variant === "primary",
    "btn-secondary": variant === "secondary",
    "btn-accent": variant === "accent",
  });
  const btnOutline = classNames({
    "btn-outline-primary": variant === "primary",
    "btn-outline-secondary": variant === "secondary",
    "btn-outline-accent": variant === "accent",
  });
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type === "button" ? "button" : "submit"}
      className={classNames(
        "btn",
        `btn-size-${size}`,
        !outline && btnVariant,
        outline && btnOutline,
        className,
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
