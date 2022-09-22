import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Checkbox } from "./Checkbox"
import { ChangeEventHandler, useState } from "react"

const meta: ComponentMeta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox
}

export default meta

const Template: ComponentStory<typeof Checkbox> = (props) => {
  const [checked, setChecked] = useState<boolean>(false)
  const onchange: ChangeEventHandler<HTMLInputElement> = ({ target }) => setChecked(target.checked)
  return <Checkbox {...props} onChange={onchange} checked={checked} />
}

export const Default = Template.bind({})
Default.args = {
  color: "primary"
}
