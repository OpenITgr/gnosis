import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const Card: FC = () => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect y="220" rx="5" ry="5" width="50%" height="10" />
      <rect rx="10" ry="10" width="100%" height="50%" />
      <rect y="240" rx="5" ry="5" width="100%" height="10" />
      <rect y="260" rx="5" ry="5" width="100%" height="10" />
    </ContentLoader>
  );
};

export default Card;
