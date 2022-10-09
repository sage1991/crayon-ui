import { ComponentMeta, ComponentStory } from "@storybook/react"
import { css } from "@emotion/react"

import { Showcase } from "./Showcase"
import { Palette, Radius } from "../../theme"

const meta: ComponentMeta<typeof Showcase> = {
  title: "UI/Showcase",
  component: Showcase
}

export default meta

const Template: ComponentStory<typeof Showcase> = (props) => {
  return (
    <Showcase {...props} title="Showcase">
      <p
        css={css`
          border: 1px dashed ${Palette.gray["300"]};
          background-color: ${Palette.gray["100"]};
          color: ${Palette.gray["500"]};
          border-radius: ${Radius.md}px;
          padding: 20px;
          font-size: 1rem;
          font-weight: 500px;
        `}
      >
        UI will be displayed in here...
      </p>
    </Showcase>
  )
}

export const Default = Template.bind({})
Default.args = {}
