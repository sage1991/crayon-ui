export namespace Supports {
  export const is = (condition: string) => `@support (${condition})`
  export const not = (condition: string) => `@supports not (${condition})`
}
