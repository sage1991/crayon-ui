import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ColorVariant } from "@emotion/react"
import { ChangeEvent, useState } from "react"

import { Switch } from "./Switch"

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
    <>
      {colorVariants.map((color) => (
        <Switch {...props} key={color} color={color} checked={checked} onChange={onChange} />
      ))}
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
