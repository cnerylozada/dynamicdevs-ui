import React from "react";
import { IDDText } from "@/models";

export const DDText = ({
  size = "paragraph",
  weight = "normal",
  children,
}: IDDText) => {
  return <p className={`font-lato ${size} ${weight}`}>{children}</p>;
};
