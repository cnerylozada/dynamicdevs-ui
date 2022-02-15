import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IDDText } from "@/models";
import { DDText } from "./index";

export default {
  title: "Atoms/DDText",
  component: DDText,
} as ComponentMeta<typeof DDText>;

const Template: ComponentStory<typeof DDText> = (args: IDDText) => (
  <div className="text-red-500">
    <DDText {...args} />
  </div>
);
export const Primary = Template.bind({});
Primary.args = { size: "paragraph", children: "Abcdefghi" };
