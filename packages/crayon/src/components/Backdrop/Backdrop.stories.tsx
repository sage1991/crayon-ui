import { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"

import { Backdrop } from "./Backdrop"
import { Button } from "../Button"

const meta: Meta<typeof Backdrop> = {
  title: "UI/Backdrop",
  component: Backdrop
}

export default meta

const Template: StoryFn<typeof Backdrop> = (props) => {
  const [open, setOpen] = useState<boolean>(props.open ?? false)
  const openBackdrop = () => setOpen(true)
  const closeBackdrop = () => setOpen(false)

  return (
    <>
      <Button onClick={openBackdrop}>OPEN BACKDROP</Button>
      <Backdrop {...props} open={open} onClick={closeBackdrop} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Transparent = Template.bind({})
Transparent.args = {
  transparent: true
}
