import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "./Button"

const meta: ComponentMeta<typeof Button> = {
  title: "UI/Button",
  component: Button
}

export default meta

const Template: ComponentStory<typeof Button> = (props) => {
  const alertWithMessage = (message: string) => () => alert(`${message} button clicked!`)

  return (
    <>
      <Button {...props} color="primary" onClick={alertWithMessage("Primary")}>
        Primary
      </Button>
      <Button {...props} color="secondary" onClick={alertWithMessage("Secondary")}>
        Secondary
      </Button>
      <Button {...props} color="warning" onClick={alertWithMessage("Warning")}>
        Warning
      </Button>
      <Button {...props} color="error" onClick={alertWithMessage("Error")}>
        Error
      </Button>
      <Button {...props} color="success" onClick={alertWithMessage("Success")}>
        Success
      </Button>
    </>
  )
}

export const Contained: ComponentStory<typeof Button> = Template.bind({})
Contained.args = {
  variant: "contained"
}

export const Outlined: ComponentStory<typeof Button> = Template.bind({})
Outlined.args = {
  variant: "outlined"
}

export const Text: ComponentStory<typeof Button> = Template.bind({})
Text.args = {
  variant: "text"
}

export const Disabled: ComponentStory<typeof Button> = (props) => {
  return (
    <>
      <Button {...props} disabled variant="contained" onClick={console.log}>
        Contained
      </Button>
      <Button {...props} disabled variant="outlined">
        Outlined
      </Button>
      <Button {...props} disabled variant="text">
        Text
      </Button>
    </>
  )
}
