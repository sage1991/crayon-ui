import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Checkbox } from "./Checkbox"

const meta: ComponentMeta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox
}

export default meta

const Template: ComponentStory<typeof Checkbox> = (props) => <Checkbox {...props} checked={true} />

export const Primary = Template.bind({})
Primary.args = {}
