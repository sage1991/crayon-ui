export type Vector2 = [number, number]

export const distance = (point1: Vector2, point2: Vector2) => {
  return Math.abs(
    Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2))
  )
}
