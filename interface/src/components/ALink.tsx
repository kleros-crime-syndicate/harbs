import React from "react";

const ALink: React.FC<JSX.IntrinsicElements["a"]> = (props) => (
  <a rel="noopener noreferrer" target="_blank" {...props} />
);

export default ALink;
