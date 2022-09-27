import { ComponentMeta, ComponentStory } from "@storybook/react"
import { useState } from "react"
import { css } from "@emotion/react"

import { Modal } from "./Modal"
import { Button } from "../Button"
import { Radius } from "../../theme"

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
      <Modal
        {...props}
        css={css`
          padding: 10px;
          border-radius: ${Radius.sm}px;
        `}
        open={open}
        onBackdropClick={closeModal}
      >
        <h1
          css={css`
            padding: 0;
            margin: 0 0 20px 0;
          `}
        >
          Hello Modal!
        </h1>
        <Button onClick={closeModal}>CLOSE MODAL</Button>
      </Modal>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
