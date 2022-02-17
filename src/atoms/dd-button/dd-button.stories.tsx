import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DDButton } from "./index";

export default {
  title: "Atoms/DDButton",
  component: DDButton,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof DDButton>;

const Basic: ComponentStory<typeof DDButton> = (args) => (
  <div className="p-5 bg-bg1">
    <DDButton onClick={args.onClick}>{args.children}</DDButton>
  </div>
);
export const Default = Basic.bind({});
Default.args = {
  children: "Button",
  onClick: () => console.log("dd-button clicked!"),
};
Default.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
  disabled: {
    table: {
      disable: true,
    },
  },
  className: {
    table: {
      disable: true,
    },
  },
};

const Complex: ComponentStory<typeof DDButton> = (args) => (
  <div className="p-5 bg-bg1">
    <DDButton {...args} />
  </div>
);
export const BasicProps = Complex.bind({});
BasicProps.args = {
  children: "Button",
  size: "normal",
  disabled: false,
  onClick: () => console.log("dd-button clicked!"),
};
BasicProps.argTypes = {
  className: {
    table: {
      disable: true,
    },
  },
};
