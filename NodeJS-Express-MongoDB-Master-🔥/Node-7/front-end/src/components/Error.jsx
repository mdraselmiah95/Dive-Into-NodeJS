import React from "react";

import notFound from "../assets/404.gif";

const Error = () => {
  return (
    <div>
      <img src={notFound} alt="page not found" />
    </div>
  );
};

export default Error;
