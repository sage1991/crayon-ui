import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChangeEventHandler, useState } from "react"
import { css, keyframes } from "@emotion/react"

import { Checkbox } from "./Checkbox"
import { FavoriteBorderRounded, FavoriteRounded, StarOutlineRounded, StarRounded } from "../icons"

const meta: ComponentMeta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox
}

export default meta

const Template: ComponentStory<typeof Checkbox> = (props) => {
  const [checked, setChecked] = useState<boolean>(false)
  const onchange: ChangeEventHandler<HTMLInputElement> = ({ target }) => setChecked(target.checked)

  return (
    <>
      <Checkbox {...props} color="primary" onChange={onchange} checked={checked} />
      <Checkbox {...props} color="secondary" onChange={onchange} checked={checked} />
      <Checkbox {...props} color="success" onChange={onchange} checked={checked} />
      <Checkbox {...props} color="warning" onChange={onchange} checked={checked} />
      <Checkbox {...props} color="error" onChange={onchange} checked={checked} />
      <Checkbox {...props} color="text" onChange={onchange} checked={checked} />
    </>
  )
}

export const Default = Template.bind({})

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  icon: <FavoriteBorderRounded />,
  checkedIcon: <FavoriteRounded />
}

export const CustomAnimation = Template.bind({})
CustomAnimation.args = {
  icon: <StarOutlineRounded />,
  checkedIcon: (
    <StarRounded
      css={css`
        animation: ${keyframes`
          0% {
            transform: rotateY(0);
          }
          50% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(180deg);
          }
        `} 500ms ease-in-out;
      `}
    />
  )
}
