import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DDButton } from "./index";

export default {
  title: "Atoms/DDButton",
  component: DDButton,
} as ComponentMeta<typeof DDButton>;

const Basic: ComponentStory<typeof DDButton> = (args) => (
  <DDButton>{args.children}</DDButton>
);
export const Default = Basic.bind({});
Default.args = { children: "Im a DDButton" };
