import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const Widget: FC = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="80" y="29" rx="5" ry="5" width="100%" height="15" />
      <circle cx="30" cy="35" r="30" />
    </ContentLoader>
  );
};

export default Widget;
