import { css } from "@emotion/react"
import { Meta, StoryFn } from "@storybook/react"

import { ColorVariant, Mixin, Palette, Radius } from "../../theme"
import { Ripple } from "./Ripple"

const meta: Meta<typeof Ripple> = {
  title: "UI/Ripple",
  component: Ripple
}

export default meta

const Template: StoryFn<typeof Ripple> = (props) => {
  const colorVariants: ColorVariant[] = ["primary", "secondary", "success", "error", "warning"]
  return (
    <>
      {colorVariants.map((color) => (
        <div
          key={color}
          css={css`
            ${Mixin.flex({ alignment: "center", justify: "center" })}
            width: 100px;
            height: 50px;
            border: 1px solid ${Palette.gray["600"]};
            border-radius: ${Radius.xl}px;
            position: relative;
            margin-right: 15px;
            overflow: hidden;
          `}
        >
          <p>CLICK ME!</p>
          <Ripple {...props} color={color} />
        </div>
      ))}
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: "primary",
  center: false
}

export const Center = Template.bind({})
Center.args = {
  color: "primary",
  center: true
}
