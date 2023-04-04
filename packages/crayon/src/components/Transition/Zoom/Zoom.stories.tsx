import { Meta, StoryFn } from "@storybook/react"
import { ChangeEvent, useState } from "react"
import { css } from "@emotion/react"

import { Zoom } from "./Zoom"
import { Switch } from "../../Switch"
import { Palette, Radius } from "../../../theme"

const meta: Meta<typeof Zoom> = {
  title: "Transition/Zoom",
  component: Zoom
}

export default meta

const Template: StoryFn<typeof Zoom> = (props) => {
  const [isFillIn, setIsFillIn] = useState(props.in ?? false)
  const toggleFill = ({ target }: ChangeEvent<HTMLInputElement>) => setIsFillIn(target.checked)

  return (
    <>
      <Switch
        css={css`
          margin-bottom: 10px;
        `}
        checked={isFillIn}
        onChange={toggleFill}
      />
      <Zoom {...props} in={isFillIn} timeout={300}>
        <div
          css={css`
            width: 100px;
            height: 100px;
            background-color: ${Palette.pink["500"]};
            border-radius: ${Radius.xs}px;
          `}
        />
      </Zoom>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
