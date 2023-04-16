import { Meta, StoryFn } from "@storybook/react"

import { Segments } from "./Segments"
import { Segment } from "./Segment"
import { css } from "@emotion/react"
import { useState } from "react"

const meta: Meta<typeof Segments> = {
  title: "UI/Segment",
  component: Segments
}

export default meta

const Template: StoryFn<typeof Segments> = (props) => {
  const [value, setValue] = useState("segment1")

  return (
    <div
      css={css`
        width: 100%;
        height: 50px;
      `}
    >
      <Segments {...props} currentValue={value} onValueChange={setValue}>
        <Segment value="segment1">segment1</Segment>
        <Segment value="segment2">segment2</Segment>
        <Segment value="segment3">segment3</Segment>
      </Segments>
    </div>
  )
}

export const Default = Template.bind({})
