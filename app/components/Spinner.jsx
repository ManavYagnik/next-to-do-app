import React from "react";
import Image from "next/image";
import loader from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner-loader">
      <Image src={loader} alt="loading.." />
    </div>
  );
};

export default Spinner;
