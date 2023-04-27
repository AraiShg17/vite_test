import { Story, Meta } from "@storybook/react";
import Title, { Types } from "./Title";

export default {
  title: "Components/Title",
  component: Title,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xs", "s", "m", "l", "xl"],
      },
    },
    status: {
      control: {
        type: "select",
        options: [
          "default",
          "primary",
          "success",
          "info",
          "warning",
          "error",
          "disabled",
        ],
      },
    },
  },
} as Meta;

const Template: Story<Types> = (args: Types) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Hello",
  size: "m",
  status: "default",
};
