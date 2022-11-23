import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Add",
  style: {
    padding: "4px 8px",
    margin: "10px",
    color: "white",
    fontSize: "0.875rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    lineHeight: "1.75",
    background: "#0C6CFC",
    minWidth: "64px",
    fontWeight: "700"
  },
  onClick: () => {
    console.log("You clicked the Default button");
  },
};

export const White = Template.bind({});
White.args = {
  label: "White button",
  style: {
    ...Default.args.style,
    color: "black",
    background: "white",
    border: "2px solid black",
  },
  onClick: () => {
    console.log("You clicked the White button");
  },
};

export const Small = Template.bind({});
Small.args = {
  label: "Small button",
  style: {
    ...Default.args.style,
    padding: "3px",
    width: "10em",
    margin: "2px",
    color: "white",
    fontSize: "14px",
  },
  onClick: () => {
    console.log("You clicked the Small button");
  },
};
