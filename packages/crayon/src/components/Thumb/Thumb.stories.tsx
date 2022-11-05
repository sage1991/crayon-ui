import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Thumb } from "./Thumb"
import { ColorVariant } from "../../theme"

const meta: ComponentMeta<typeof Thumb> = {
  title: "UI/Thumb",
  component: Thumb
}

export default meta

const Template: ComponentStory<typeof Thumb> = (props) => {
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
