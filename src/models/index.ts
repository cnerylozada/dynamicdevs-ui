export type TextSize =
  | "headline"
  | "sectionHeadline"
  | "subHeadline"
  | "paragraph"
  | "small";
export type TextWeight = "light" | "normal" | "bold";

export interface IDDText {
  size?: TextSize;
  weight?: TextWeight;
  caps?: boolean;
  className?: string;
  children: any;
}

export type ButtonSize = "normal" | "small";
export interface IDDButton {
  size?: ButtonSize;
  disabled?: boolean;
  onClick: any;
  children: any;
  className?: string;
}
