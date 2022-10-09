import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChangeEvent, useState } from "react"

import { Fade } from "./Fade"
import { Switch } from "../../Switch"

const meta: ComponentMeta<typeof Fade> = {
  title: "Transition/Fade",
  component: Fade
}

export default meta

const Template: ComponentStory<typeof Fade> = (props) => {
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
