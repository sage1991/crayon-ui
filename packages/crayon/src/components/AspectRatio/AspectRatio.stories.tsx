import { css } from "@emotion/react"
import { Meta, StoryFn } from "@storybook/react"
import { ChangeEvent, useState } from "react"

import { Mixin, Palette, Radius } from "../../theme"
import { Slider } from "../Slider"
import { AspectRatio } from "./AspectRatio"

const meta: Meta<typeof AspectRatio> = {
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

export const Default: StoryFn<typeof AspectRatio> = () => {
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
                transition: width 300ms;
              `}
            >
              <div
                css={css`
                  background-color: ${Palette.gray["200"]};
                  border-radius: ${Radius.xs}px;
                `}
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  )
}
