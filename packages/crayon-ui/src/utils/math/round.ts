export const round = (num: number, at: number = 0) =>
  at === 0 ? Math.round(num) : parseFloat(num.toFixed(at))
