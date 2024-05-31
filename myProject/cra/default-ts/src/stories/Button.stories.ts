import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// Default export for story metadata
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/XSpk2L7ZrA3Wj7Y1oBx820/Relume-Library-Figma-Kit-(v1.11)---edited-color-palettes?node-id=3480-7762&t=wYvEv50Jgafa8XlO-1",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story definitions
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/XSpk2L7ZrA3Wj7Y1oBx820/Relume-Library-Figma-Kit-(v1.11)---edited-color-palettes?node-id=3480-7762&t=wYvEv50Jgafa8XlO-1",
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
