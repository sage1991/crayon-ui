import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Backdrop } from "./Backdrop"
import { useState } from "react"
import { Button } from "../Button"

const meta: ComponentMeta<typeof Backdrop> = {
  title: "Backdrop",
  component: Backdrop
}

export default meta

const Template: ComponentStory<typeof Backdrop> = (props) => {
  const [open, setOpen] = useState<boolean>(false)

  const openBackdrop = () => setOpen(true)
  const closeBackdrop = () => setOpen(false)

  return (
    <>
      <Button onClick={openBackdrop}>OPEN BACKDROP</Button>
      <Backdrop open={open} onClick={closeBackdrop} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
