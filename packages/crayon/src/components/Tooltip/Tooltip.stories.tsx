import { Meta, StoryFn } from "@storybook/react"
import { css } from "@emotion/react"

import { Tooltip } from "./Tooltip"
import { Mixin } from "../../theme"

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip
}

export default meta

const Template: StoryFn<typeof Tooltip> = (props) => {
  return (
    <div
      css={css`
        ${Mixin.flex({ direction: "column", alignment: "center" })}
        gap: 70px;
      `}
    >
      <Tooltip {...props} placement="top" open content="this is content" color="primary">
        <div>TOP</div>
      </Tooltip>
      <Tooltip {...props} placement="right" open content="this is content" color="secondary">
        <div>RIGHT</div>
      </Tooltip>
      <Tooltip {...props} placement="bottom" open content="this is content" color="warning">
        <div>BOTTOM</div>
      </Tooltip>
      <Tooltip {...props} placement="left" open content="this is content" color="error">
        <div>LEFT</div>
      </Tooltip>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
