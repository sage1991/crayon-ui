import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ColorVariant, css } from "@emotion/react"
import { ChangeEvent, useState } from "react"

import { Switch } from "./Switch"
import { Mixin } from "../../theme"

const meta: ComponentMeta<typeof Switch> = {
  title: "Switch",
  component: Switch
}

export default meta

const Template: ComponentStory<typeof Switch> = (props) => {
  const colorVariants: ColorVariant[] = [
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "text"
  ]

  const [checked, setChecked] = useState<boolean>(false)
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => setChecked(target.checked)

  return (
    <div
      css={css`
        ${Mixin.flex({ direction: "row" })}
        gap: 10px;
      `}
    >
      {colorVariants.map((color) => (
        <Switch {...props} key={color} color={color} checked={checked} onChange={onChange} />
      ))}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
