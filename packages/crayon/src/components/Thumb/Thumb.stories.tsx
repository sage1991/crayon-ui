import { Meta, StoryFn } from "@storybook/react"

import { ColorVariant } from "../../theme"
import { Thumb } from "./Thumb"

const meta: Meta<typeof Thumb> = {
  title: "UI/Thumb",
  component: Thumb
}

export default meta

const Template: StoryFn<typeof Thumb> = (props) => {
  const colorVariants: ColorVariant[] = [
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "text"
  ]

  return (
    <>
      {colorVariants.map((color) => (
        <Thumb key={color} color={color} {...props} />
      ))}
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
