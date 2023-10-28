import { Meta, StoryFn } from "@storybook/react"
import { ChangeEvent, useState } from "react"

import { Switch } from "../../Switch"
import { Fade } from "./Fade"

const meta: Meta<typeof Fade> = {
  title: "Transition/Fade",
  component: Fade
}

export default meta

const Template: StoryFn<typeof Fade> = (props) => {
  const [isFadeIn, setIsFadeIn] = useState<boolean>(false)
  const toggleFade = ({ target }: ChangeEvent<HTMLInputElement>) => setIsFadeIn(target.checked)

  return (
    <>
      <Switch checked={isFadeIn} onChange={toggleFade} />
      <Fade {...props} timeout={300} in={isFadeIn}>
        <h1>Hello Fade!</h1>
      </Fade>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
