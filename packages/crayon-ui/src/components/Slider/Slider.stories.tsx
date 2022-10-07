import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChangeEvent, useRef, useState } from "react"
import { ColorVariant, css } from "@emotion/react"

import { Slider } from "./Slider"
import { Mixin } from "../../theme"
import { Button } from "../Button"

const meta: ComponentMeta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider
}

export default meta

export const Controlled: ComponentStory<typeof Slider> = (props) => {
  const colors: ColorVariant[] = ["primary", "secondary", "success", "error", "warning", "text"]
  const [value, setValue] = useState<number>(20)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(+e.target.value)

  return (
    <>
      <div
        css={css`
          ${Mixin.flex({ direction: "column" })}
          width: 100%;
          gap: 20px;
        `}
      >
        <h3>controlled input: {value}</h3>
        {colors.map((color) => (
          <Slider {...props} key={color} color={color} value={value} onChange={onChange} />
        ))}
      </div>
    </>
  )
}

export const UnControlled: ComponentStory<typeof Slider> = (props) => {
  const colors: ColorVariant[] = ["primary", "secondary", "success", "error", "warning", "text"]
  const refs = colors.map(() => useRef<HTMLInputElement>(null))

  const onClick = () =>
    refs.forEach((ref) => {
      alert(ref.current?.value)
    })

  return (
    <>
      <div
        css={css`
          ${Mixin.flex({ direction: "column" })}
          width: 100%;
          gap: 20px;
        `}
      >
        <Button variant="text" onClick={onClick}>
          READ VALUE
        </Button>
        {colors.map((color, index) => (
          <Slider {...props} ref={refs[index]} key={color} color={color} />
        ))}
      </div>
    </>
  )
}
