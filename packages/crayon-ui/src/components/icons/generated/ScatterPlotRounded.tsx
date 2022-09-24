import { SVGProps } from "react"
export function ScatterPlotRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
      <circle cx={7} cy={14} r={3} />
      <circle cx={11} cy={6} r={3} />
      <circle cx={16.6} cy={17.6} r={3} />
    </svg>
  )
}
