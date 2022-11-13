import { cloneElement, ComponentType, FC, ReactNode, useState } from "react"
import { createPortal } from "react-dom"
import { usePopper } from "react-popper"
import { Placement } from "@popperjs/core/lib/enums"
import { Modifier } from "@popperjs/core/lib/types"
import { isServerSide } from "@crayon-ui/utils"

import { useForkElementRef } from "../../hooks"
import { ColorVariant } from "../../theme"
import { Fade, TransitionProps } from "../Transition"

import { Arrow, Root } from "./Tooltip.styled"

interface Props {
  color?: ColorVariant
  placement?: Placement
  modifiers?: Array<Partial<Modifier<any, any>>>
  open?: boolean
  content: ReactNode
  TransitionEffect?: ComponentType<TransitionProps>
  portal?: boolean
  children: JSX.Element
}

export const Tooltip: FC<Props> = ({
  color = "primary",
  content,
  placement,
  modifiers = [],
  open = false,
  TransitionEffect = Fade,
  portal,
  children
}) => {
  const [anchorRef, setAnchorRef] = useState<HTMLElement | null>(null)
  const [popperRef, setPopperRef] = useState<HTMLElement | null>(null)
  const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null)
  const forkAnchor = useForkElementRef(setAnchorRef, children.ref)
  const { styles, attributes } = usePopper(anchorRef, popperRef, {
    placement,
    modifiers: [
      ...modifiers,
      { name: "arrow", options: { element: arrowRef } },
      { name: "offset", options: { offset: [0, 12] } }
    ]
  })

  const renderTooltip = () => {
    let tooltip = (
      <TransitionEffect suppressHydrationWarning in={open} timeout={300}>
        <Root {...attributes.popper} ref={setPopperRef} style={styles.popper} color={color}>
          {content}
          <Arrow {...attributes.arrow} ref={setArrowRef} style={styles.arrow} />
        </Root>
      </TransitionEffect>
    )
    if (portal) {
      tooltip = createPortal(tooltip, document.body)
    }
    return tooltip
  }

  return (
    <>
      {cloneElement(children, {
        ...forkAnchor(),
        ...children.props
      })}
      {!isServerSide() && renderTooltip()}
    </>
  )
}
