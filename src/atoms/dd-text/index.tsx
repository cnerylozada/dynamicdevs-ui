import React from "react";
import { IDDText } from "@/models";

const sizesStyles = {
  headline: "ddtext-size_headline",
  sectionHeadline: "ddtext-size_sectionHeadline",
  subHeadline: "ddtext-size_subHeadline",
  paragraph: "ddtext-size_paragraph",
  small: "ddtext-size_small",
};
const weightStyles = {
  light: "ddtext-weight_light",
  normal: "ddtext-weight_normal",
  bold: "ddtext-weight_bold",
};
const spacingStyles = {
  headline: "tracking-headline-mob md:tracking-headline-des",
  sectionHeadline:
    "tracking-sectionHeadline-mob md:tracking-sectionHeadline-des",
  subHeadline: "tracking-subHeadline-mob md:tracking-subHeadline-des",
  paragraph: "",
  small: "",
};

export const DDText = ({
  size = "paragraph",
  weight = "normal",
  caps,
  className,
  children,
}: IDDText) => {
  return (
    <p
      className={`font-lato ${sizesStyles[size]} ${weightStyles[weight]} ${
        !!caps ? `uppercase ${spacingStyles[size]}` : ""
      } ${className}`}
    >
      {children}
    </p>
  );
};
