import { Meta, StoryFn } from "@storybook/react"

import { Segment } from "./Segment"
import { SegmentButton } from "./SegmentButton"
import { css } from "@emotion/react"
import { useState } from "react"

const meta: Meta<typeof Segment> = {
  title: "UI/Segment",
  component: Segment
}

export default meta

const Template: StoryFn<typeof Segment> = (props) => {
  const [value, setValue] = useState("epic")

  return (
    <Segment
      css={css`
        width: 500px;
      `}
      {...props}
      currentValue={value}
      onValueChange={setValue}
    >
      <SegmentButton value="magazine">magazine</SegmentButton>
      <SegmentButton value="epic">epic</SegmentButton>
    </Segment>
  )
}

export const Default = Template.bind({})
