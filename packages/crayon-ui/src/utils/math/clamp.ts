interface Props {
  minimum: number
  maximum: number
}

export const clamp = (value: number, { minimum, maximum }: Props) =>
  Math.min(Math.max(value, minimum), maximum)
