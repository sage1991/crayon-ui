import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChangeEvent, useState } from "react"
import { css } from "@emotion/react"

import { Collapse } from "./Collapse"
import { Switch } from "../../Switch"
import { Palette, Radius } from "../../../theme"

const meta: ComponentMeta<typeof Collapse> = {
  title: "Collapse",
  component: Collapse
}

export default meta

const Template: ComponentStory<typeof Collapse> = (props) => {
  const [isCollapseIn, setIsCollapseIn] = useState<boolean>(false)
  const toggleCollapse = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setIsCollapseIn(target.checked)
  return (
    <>
      <Switch checked={isCollapseIn} onChange={toggleCollapse} />
      <Collapse {...props} in={isCollapseIn} timeout={300}>
        <div
          css={css`
            width: 100px;
            height: 100px;
            background-color: ${Palette.pink["500"]};
            border-radius: ${Radius.xs}px;
          `}
        />
      </Collapse>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
