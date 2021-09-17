import React, { FC } from "react";
import Card from "./components/Card";
import Widget from "./components/Widget";

export type SkeletonProps = {
  type: "card" | "widget" | "area";
};

const Skeleton: FC<SkeletonProps> = ({ type }) => {
  return (
    <>
      {type === "card" && <Card />}
      {type === "widget" && <Widget />}
    </>
  );
};

export default Skeleton;
