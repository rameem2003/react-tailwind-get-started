import React from "react";

const Container = ({ children, className }) => {
  return <div className={` ${className} mx-auto`}>{children}</div>;
};

export default Container;
