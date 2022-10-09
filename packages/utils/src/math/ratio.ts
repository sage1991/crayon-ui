interface Props {
  minimum: number
  maximum: number
}

export const ratio = (num: number, { minimum, maximum }: Props) => {
  return (num - minimum) / (maximum - minimum)
}
