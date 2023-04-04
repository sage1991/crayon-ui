import { Meta, StoryFn } from "@storybook/react"
import { ChangeEventHandler, useState } from "react"
import { css, keyframes } from "@emotion/react"
import {
  FavoriteBorderRounded,
  FavoriteRounded,
  StarOutlineRounded,
  StarRounded
} from "@crayon-ui/icons"

import { Checkbox } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox
}

export default meta

const Template: StoryFn<typeof Checkbox> = (props) => {
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

export const Controlled = Template.bind({})

export const UnControlled: StoryFn<typeof Checkbox> = (props) => {
  return (
    <>
      <Checkbox {...props} color="primary" />
      <Checkbox {...props} color="secondary" />
      <Checkbox {...props} color="success" />
      <Checkbox {...props} color="warning" />
      <Checkbox {...props} color="error" />
      <Checkbox {...props} color="text" />
    </>
  )
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

export const CustomIcon = Template.bind({})
CustomIcon.args = {
  icon: <FavoriteBorderRounded />,
  checkedIcon: <FavoriteRounded />
}

export const CustomAnimation = Template.bind({})
CustomAnimation.args = {
  icon: (
    <StarOutlineRounded
      css={css`
        animation: ${keyframes`
          0% {
            transform: rotateY(0);
          }
          100% {
            transform: rotateY(180deg);
          }
        `} 500ms ease-in-out;
      `}
    />
  ),
  checkedIcon: (
    <StarRounded
      css={css`
        animation: ${keyframes`
          0% {
            transform: rotateY(0);
          }
          100% {
            transform: rotateY(180deg);
          }
        `} 500ms ease-in-out;
      `}
    />
  )
}
