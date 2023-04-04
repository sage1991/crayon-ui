import { Meta, StoryFn } from "@storybook/react"
import { ChangeEvent, useState } from "react"

import { ColorVariant } from "../../theme"
import { Switch } from "./Switch"

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch
}

export default meta

const Template: StoryFn<typeof Switch> = (props) => {
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

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

export const UnControlled: StoryFn<typeof Switch> = (props) => {
  const colorVariants: ColorVariant[] = [
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "text"
  ]
  return (
    <>
      {colorVariants.map((color) => (
        <Switch {...props} key={color} color={color} />
      ))}
    </>
  )
}
UnControlled.args = {}
