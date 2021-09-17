import React from "react";
import { Story } from "@storybook/react";
import Skeleton, { SkeletonProps } from "./Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["card", "widget", "area"],
      },
    },
  },
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ maxWidth: 300, height: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export const Default: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

Default.args = {
  type: "card",
};
