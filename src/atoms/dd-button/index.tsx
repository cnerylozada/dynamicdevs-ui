import React from "react";
import { IDDButton } from "@/models";
import { DDText } from "../dd-text";

export const DDButton = ({
  size = "normal",
  disabled = false,
  onClick,
  children,
  className,
}: IDDButton) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${
        size === "normal" ? "min-w-[200px] h-[50px]" : "min-w-[77px] h-[35px]"
      } border border-primary text-primary hover:text-text hover:bg-primary 
      ${
        !!disabled
          ? `cursor-not-allowed border-gray2 bg-gray2 hover:bg-gray2 text-white`
          : ""
      }
      ${className}`}
    >
      <DDText size={`${size === "normal" ? "paragraph" : "small"}`}>
        {children}
      </DDText>
    </button>
  );
};
