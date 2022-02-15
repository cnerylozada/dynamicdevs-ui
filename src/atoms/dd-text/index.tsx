import React from "react";
import { IDDText } from "@/models";

export const DDText = ({ size = "paragraph", children }: IDDText) => {
  return <p className={`font-lato ${size}`}>{children}</p>;
};
