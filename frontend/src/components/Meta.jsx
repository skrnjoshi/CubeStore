// Meta.jsx (or whatever you name your component)
import React from "react";

const Meta = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

Meta.defaultProps = {
  title: "Welcome To ProShop",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electronics",
};

export default Meta;
