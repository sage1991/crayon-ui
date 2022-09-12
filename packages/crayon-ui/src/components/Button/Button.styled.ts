import styled from "@emotion/styled"
import { ColorVariant } from "@emotion/react"

import { Mixin, Palette, Radius, Shadow } from "../../theme"
import { alpha, darken } from "../../utils"

interface ButtonRootProps {
  color: ColorVariant
  variant: "contained" | "outlined" | "text"
}

export const ButtonRoot = styled("button")<ButtonRootProps>(({ theme, color, variant }) => {
  const commonStyle = `
    ${Mixin.typography({ size: "1rem", weight: "500" })}
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    border-radius: ${Radius.xs}px;
    text-align: center;
  `

  if (variant === "contained") {
    return `
      ${commonStyle}
      box-shadow: ${Shadow.low};
      color: ${theme.palette[color].contrast};
      background-color: ${theme.palette[color].main};
      transition: box-shadow 300ms, background-color 300ms;
      
      :hover {
        box-shadow: ${Shadow.medium};
        background-color: ${darken(theme.palette[color].main)};
      }
    `
  }

  if (variant === "outlined") {
    return `
      ${commonStyle}
      color: ${theme.palette[color].main};
      background-color: ${Palette.white};
      transition: background-color 300ms;
      border: 1px solid ${theme.palette[color].main};
      
      :hover {
        background-color: ${alpha(theme.palette[color].main, 0.05)};
      }
    `
  }

  return `
    ${commonStyle}
    color: ${theme.palette[color].main};
    background-color: ${Palette.white};
    transition: background-color 300ms;
    
    :hover {
      background-color: ${alpha(theme.palette[color].main, 0.05)};
    }
    `
})
