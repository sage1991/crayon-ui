import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChangeEvent, useState } from "react"

import { Fade } from "./Fade"
import { Switch } from "../../Switch"

const meta: ComponentMeta<typeof Fade> = {
  title: "Fade",
  component: Fade
}

export default meta

const Template: ComponentStory<typeof Fade> = (props) => {
  const [isFadeIn, setIsFadeIn] = useState<boolean>(false)
  const toggleFade = ({ target }: ChangeEvent<HTMLInputElement>) => setIsFadeIn(target.checked)

  return (
    <div>
      <Switch checked={isFadeIn} onChange={toggleFade} />
      <Fade {...props} timeout={300} unmountOnExit in={isFadeIn}>
        <h1>Hello Fade!</h1>
      </Fade>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
