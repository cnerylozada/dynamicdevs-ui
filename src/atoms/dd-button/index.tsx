import React from "react";
import { IDDButton } from "@/models";
import { DDText } from "../dd-text";

export const DDButton = ({ children }: IDDButton) => {
  return (
    <button>
      <DDText>{children}</DDText>
    </button>
  );
};
