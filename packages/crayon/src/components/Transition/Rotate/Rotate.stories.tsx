import { css } from "@emotion/react"
import { Meta, StoryFn } from "@storybook/react"
import { ChangeEvent, useState } from "react"

import { Mixin, Palette, Radius } from "../../../theme"
import { Switch } from "../../Switch"
import { Rotate } from "./Rotate"

const meta: Meta<typeof Rotate> = {
  title: "Transition/Rotate",
  component: Rotate
}

export default meta

const Template: StoryFn<typeof Rotate> = (props) => {
  const [isIn, setIsIn] = useState<boolean>(props.in ?? false)
  const toggleTransition = ({ target }: ChangeEvent<HTMLInputElement>) => setIsIn(target.checked)
  return (
    <>
      <label
        css={css`
          ${Mixin.flex({ alignment: "center" })}
          margin-bottom: 10px;
          gap: 10px;
        `}
      >
        <Switch checked={isIn} onChange={toggleTransition} />
        <p>Rotate</p>
      </label>
      <Rotate {...props} timeout={300} degree={180} in={isIn}>
        <div
          css={css`
            width: 100px;
            height: 100px;
            background-color: ${Palette.pink["500"]};
            border-radius: ${Radius.xs}px;
          `}
        />
      </Rotate>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const RotateX = Template.bind({})
RotateX.args = {
  direction: "X"
}

export const RotateY = Template.bind({})
RotateY.args = {
  direction: "Y"
}
