import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
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

const Basic: ComponentStory<typeof DDText> = (args) => (
  <DDText>{args.children}</DDText>
);
export const Default = Basic.bind({});
Default.args = {
  children: "Abcdefghijklmnopqrstuvwxyz",
};
Default.argTypes = {
  size: {
    table: {
      disable: true,
    },
  },
  weight: {
    table: {
      disable: true,
    },
  },
  caps: {
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

const Complex: ComponentStory<typeof DDText> = (args) => (
  <div>
    <DDText {...args}></DDText>
  </div>
);
export const BasicProps = Complex.bind({});
BasicProps.args = {
  children: "Im a DynamicDevs Text component",
  size: "paragraph",
  weight: "normal",
};
BasicProps.argTypes = {
  caps: {
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

export const UpperCase = Complex.bind({});
UpperCase.args = {
  children: "DynamicDevs Text caps case",
  size: "paragraph",
  weight: "normal",
  caps: true,
};
UpperCase.argTypes = {
  className: {
    table: {
      disable: true,
    },
  },
};
