import { css } from "@emotion/react"
import { Meta, StoryFn } from "@storybook/react"
import { ChangeEvent, useState } from "react"

import { Mixin, Palette, Radius } from "../../../theme"
import { Switch } from "../../Switch"
import { TweenTransition } from "./TweenTransition"

const meta: Meta<typeof TweenTransition> = {
  title: "Transition/TweenTransition",
  component: TweenTransition
}

export default meta

const Template: StoryFn<typeof TweenTransition> = (props) => {
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
        <p>Rotate 45deg</p>
      </label>
      <TweenTransition
        {...props}
        timeout={300}
        in={isIn}
        transition="transform 300ms"
        begin={{ transform: "rotate(0)" }}
        end={{ transform: "rotate(45deg)" }}
      >
        <div
          css={css`
            width: 100px;
            height: 100px;
            background-color: ${Palette.pink["500"]};
            border-radius: ${Radius.xs}px;
          `}
        />
      </TweenTransition>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
