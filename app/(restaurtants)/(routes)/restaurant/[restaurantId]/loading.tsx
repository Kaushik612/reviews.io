"use client";
import React from "react";

import { PuffLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <PuffLoader size={100} />
    </div>
  );
};

export default loading;
