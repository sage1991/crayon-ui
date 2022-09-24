import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ColorVariant, css } from "@emotion/react"

import { Thumb } from "./Thumb"
import { Mixin } from "../../theme"

const meta: ComponentMeta<typeof Thumb> = {
  title: "Thumb",
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
    <div
      css={css`
        ${Mixin.flex({ direction: "row" })}
      `}
    >
      {colorVariants.map((color) => (
        <Thumb key={color} color={color} {...props} />
      ))}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
