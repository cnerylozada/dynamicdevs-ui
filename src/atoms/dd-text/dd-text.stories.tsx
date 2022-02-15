import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IDDText } from "@/models";
import { DDText } from "./index";

export default {
  title: "Atoms/DDText",
  component: DDText,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
    weight: {
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof DDText>;

const Template: ComponentStory<typeof DDText> = (args: IDDText) => (
  <div className="text-blue-600">
    <DDText {...args} />
  </div>
);
export const Basic = Template.bind({});
Basic.args = { size: "paragraph", weight: "normal", children: "Abcdefghi" };
