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

export interface IDDButton {
  children: any;
}
