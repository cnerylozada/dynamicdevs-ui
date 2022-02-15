export type Size =
  | "headline"
  | "sectionHeadline"
  | "subHeadline"
  | "paragraph"
  | "small";
export type Weight = "light" | "normal" | "bold";

export interface IDDText {
  size?: Size;
  weight?: Weight;
  children: any;
}
