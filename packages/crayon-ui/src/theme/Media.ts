export namespace Media {
  export const up = (size: number) => `@media (min-width: ${size}px)`
  export const down = (size: number) => `@media (max-width: ${size}px)`
  export const between = (size1: number, size2: number) =>
    `@media (min-width: ${Math.min(size1, size2)}px) and (max-width: ${Math.max(size1, size2)}px)`
}
