import { Meta, StoryFn } from "@storybook/react"
import { ChangeEvent, useState } from "react"
import { css } from "@emotion/react"

import { Focus } from "./Focus"
import { Switch } from "../../Switch"
import { Palette, Radius } from "../../../theme"

const meta: Meta<typeof Focus> = {
  title: "Transition/Focus",
  component: Focus
}

export default meta

const Template: StoryFn<typeof Focus> = (props) => {
  const [isFocusIn, setIsFocusIn] = useState(props.in ?? false)
  const toggleFocus = ({ target }: ChangeEvent<HTMLInputElement>) => setIsFocusIn(target.checked)

  return (
    <>
      <Switch
        css={css`
          margin-bottom: 10px;
        `}
        checked={isFocusIn}
        onChange={toggleFocus}
      />
      <Focus {...props} in={isFocusIn} timeout={300}>
        <div
          css={css`
            width: 100px;
            height: 100px;
            background-color: ${Palette.pink["500"]};
            border-radius: ${Radius.xs}px;
          `}
        />
      </Focus>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
