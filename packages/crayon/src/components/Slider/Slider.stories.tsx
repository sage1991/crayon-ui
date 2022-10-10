import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChangeEvent, useRef, useState } from "react"
import { css } from "@emotion/react"

import { Slider } from "./Slider"
import { Mixin } from "../../theme"
import { Button } from "../Button"

const meta: ComponentMeta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider
}

export default meta

export const Controlled: ComponentStory<typeof Slider> = (props) => {
  const [value, setValue] = useState<number>(0)
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
        <Slider {...props} value={value} onChange={onChange} />
      </div>
    </>
  )
}

export const UnControlled: ComponentStory<typeof Slider> = (props) => {
  const ref = useRef<HTMLInputElement>(null)
  const onClick = () => alert(ref.current?.value)

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
        <Slider {...props} ref={ref} defaultValue={30} />
      </div>
    </>
  )
}

export const Step: ComponentStory<typeof Slider> = (props) => {
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<number>(0)
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
        <Slider {...props} value={value} onChange={onChange} step={10} min={-100} max={100} />
        <Slider
          {...props}
          ref={ref}
          color="secondary"
          defaultValue={66}
          step={8}
          min={50}
          max={100}
        />
      </div>
    </>
  )
}

export const Disabled: ComponentStory<typeof Slider> = (props) => {
  const [value, setValue] = useState<number>(50)
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
        <Slider {...props} value={value} onChange={onChange} step={10} disabled />
      </div>
    </>
  )
}
