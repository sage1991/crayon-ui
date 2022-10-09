interface Props {
  minimum: number
  maximum: number
  exclusive?: boolean
}

export const between = (num: number, { minimum, maximum, exclusive = false }: Props) => {
  if (exclusive) {
    return minimum < num && num < maximum
  }
  return minimum <= num && num <= maximum
}
