import { ComponentMeta, ComponentStory } from "@storybook/react"
import { css } from "@emotion/react"

import { Button } from "./Button"
import { Mixin } from "../../theme"

const meta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button
}

export default meta

const Template: ComponentStory<typeof Button> = (props) => {
  const alertWithMessage = (message: string) => () => alert(`${message} button clicked!`)

  return (
    <div
      css={css`
        ${Mixin.flex({ direction: "column", alignment: "flex-start" })}
        button {
          margin-bottom: 20px;
        }
      `}
    >
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
    </div>
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
