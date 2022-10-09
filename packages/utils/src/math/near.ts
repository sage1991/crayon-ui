export const near = (num: number, points: number[]) => {
  if (points.length === 0) {
    return num
  }
  const diff = Math.min(...points.map((point) => Math.abs(point - num)))
  return points.find((point) => point === num + diff) ?? num - diff
}
