import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChangeEvent, useState } from "react"
import { css } from "@emotion/react"

import { Slide } from "./Slide"
import { Switch } from "../../Switch"
import { Mixin, Palette, Radius } from "../../../theme"

const meta: ComponentMeta<typeof Slide> = {
  title: "Slide",
  component: Slide
}

export default meta

const Template: ComponentStory<typeof Slide> = (props) => {
  const [isSlideIn, setIsSlideIn] = useState<boolean>(false)
  const toggleSlide = ({ target }: ChangeEvent<HTMLInputElement>) => setIsSlideIn(target.checked)
  const directions: Array<"up" | "down" | "right" | "left"> = ["up", "down", "right", "left"]

  return (
    <>
      <Switch
        css={css`
          margin-bottom: 10px;
        `}
        checked={isSlideIn}
        onChange={toggleSlide}
      />
      <div
        css={css`
          ${Mixin.flex()}
          flex: 1;
          gap: 20px;
        `}
      >
        {directions.map((direction) => (
          <div
            key={direction}
            css={css`
              ${Mixin.flex({ alignment: "center", justify: "center" })}
              width: 20%;
              height: 100px;
              overflow: hidden;
              border: 1px solid ${Palette.gray["700"]};
              border-radius: ${Radius.xs}px;
            `}
          >
            <Slide {...props} in={isSlideIn} timeout={300} direction={direction}>
              <h1>Slide up!</h1>
            </Slide>
          </div>
        ))}
      </div>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
