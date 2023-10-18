"use client";

import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  border,
  backgroundColor,
  textColor,
  borderRadius,
  onClick,
  children,
  padding,
  boxShadow,
  cursor,
  fontWeight,
  type,
  height,
}) => {
  const buttonStyle = {
    border,
    backgroundColor,
    color: textColor,
    borderRadius,
    padding,
    cursor,
    boxShadow,
    fontWeight,
    height,
  };

  return (
    <button style={buttonStyle} type={type} onClick={onClick} className="hover:scale-95 transition-all disabled:cursor-not-allowed w-full duration-300 center gap-2">
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  border: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  padding: PropTypes.string,
  boxShadow: PropTypes.string,
  cursor: PropTypes.string,
  fontWeight: PropTypes.oneOf(["normal", "semibold", "bold"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  height: PropTypes.string,
};

CustomButton.defaultProps = {
  border: "1px solid #057087",
  backgroundColor: "#057087",
  textColor: "#000000",
  borderRadius: "8px",
  padding: "10px 20px",
  cursor: "pointer",
  fontWeight: "normal",
  height: "45px",
};

export default CustomButton;
