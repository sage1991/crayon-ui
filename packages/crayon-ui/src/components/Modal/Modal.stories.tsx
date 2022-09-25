import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Modal } from "./Modal"
import { Button } from "../Button"
import { useState } from "react"

const meta: ComponentMeta<typeof Modal> = {
  title: "Modal",
  component: Modal
}

export default meta

const Template: ComponentStory<typeof Modal> = (props) => {
  const [open, setOpen] = useState<boolean>(false)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <div>
      <Button onClick={openModal}>OPEN MODAL</Button>
      <Modal {...props} open={open} onBackdropClick={closeModal}>
        <h1>Hello Modal!</h1>
      </Modal>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
