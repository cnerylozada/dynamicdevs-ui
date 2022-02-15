import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DDButton } from "./index";

export default {
  title: "Atoms/Button",
  component: DDButton,
};

const Template = (args: any) => <DDButton {...args} />;
export const Primary = Template.bind({}) as any;
Primary.args = { children: "#ff0" };
