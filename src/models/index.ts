export type Size =
  | "headline"
  | "sectionHeadline"
  | "subHeadline"
  | "paragraph"
  | "small";

export interface IDDText {
  size?: Size;
  children: any;
}
