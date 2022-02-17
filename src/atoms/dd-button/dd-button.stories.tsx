import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DDButton } from "./index";
import { DDText } from "../dd-text";

export default {
  title: "Atoms/DDButton",
  component: DDButton,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
    },
    onClick: {
      action: "button clicked",
    },
  },
} as ComponentMeta<typeof DDButton>;

const DefaultTemplate: ComponentStory<typeof DDButton> = (args) => (
  <div className="p-5 bg-bg1">
    <DDButton onClick={args.onClick}>{args.children}</DDButton>
  </div>
);
export const Default = DefaultTemplate.bind({});
Default.args = {
  children: "Button",
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
  onClick: {
    table: {
      disable: true,
    },
  },
};

const BasicPropsTemplate: ComponentStory<typeof DDButton> = (args) => (
  <div className="p-5 bg-bg1">
    <DDButton {...args} />
  </div>
);
export const BasicProps = BasicPropsTemplate.bind({});
BasicProps.args = {
  children: "Button",
  size: "normal",
  disabled: false,
};
BasicProps.argTypes = {
  className: {
    table: {
      disable: true,
    },
  },
  onClick: {
    table: {
      disable: true,
    },
  },
};

const LayoutTemplate: ComponentStory<typeof DDButton> = (args) => (
  <div className="bg-bg2">
    <DDText
      size="sectionHeadline"
      weight="bold"
      caps
      className="mb-10 text-primary"
    >
      ¿quieres ser parte del equipo?
    </DDText>
    <div className="md:flex md:items-center md:space-x-8">
      <DDText
        size="subHeadline"
        weight="light"
        className="text-text mb-12 md:mb-0"
      >
        Revisa nuestra lista de trabajos disponibles.
      </DDText>
      <DDButton
        className="mx-auto block"
        onClick={() => {
          window.open(
            "https://www.getonbrd.com/companies/dynamic-devs",
            "blank"
          );
        }}
      >
        Ir a Dynamic Jobs
      </DDButton>
    </div>
  </div>
);
export const Layout = LayoutTemplate.bind({});
Layout.parameters = {
  controls: { disabled: true },
};
