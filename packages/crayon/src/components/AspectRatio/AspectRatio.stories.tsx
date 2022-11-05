import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChangeEvent, useState } from "react"
import { css } from "@emotion/react"

import { Mixin, Palette } from "../../theme"
import { AspectRatio } from "./AspectRatio"
import { Slider } from "../Slider"

const meta: ComponentMeta<typeof AspectRatio> = {
  title: "UI/AspectRatio",
  component: AspectRatio
}

export default meta

const RATIO_LIST = [
  { width: 3, height: 1 },
  { width: 2, height: 1 },
  { width: 1, height: 1 },
  { width: 3, height: 4 },
  { width: 1, height: 2 }
]

export const Default: ComponentStory<typeof AspectRatio> = () => {
  const [width, setWidth] = useState<number>(100)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    setWidth(+target.value)
  }

  return (
    <div
      css={css`
        ${Mixin.flex({ direction: "column", alignment: "stretch" })}
        width: 100%;
      `}
    >
      <h2>width: {width}px</h2>
      <Slider
        css={css`
          margin-bottom: 20px;
        `}
        min={50}
        max={150}
        value={width}
        onChange={onChange}
      />
      <div
        css={css`
          ${Mixin.flex({ justify: "space-evenly" })}
        `}
      >
        {RATIO_LIST.map((ratio) => (
          <div
            key={`${ratio.width}-${ratio.height}`}
            css={css`
              margin-right: 10px;
              &:last-of-type {
                margin-right: 0;
              }
            `}
          >
            <h3
              css={css`
                text-align: center;
              `}
            >
              {ratio.width} / {ratio.height}
            </h3>
            <AspectRatio
              ratio={ratio.width / ratio.height}
              css={css`
                width: ${width}px;
              `}
            >
              <div
                css={css`
                  background-color: ${Palette.gray["200"]};
                `}
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  )
}
