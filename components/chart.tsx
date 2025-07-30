"use client"

import { Bar, BarChart, CartesianGrid,XAxis } from "recharts"

import { ChartConfig, ChartContainer,ChartTooltip, ChartTooltipContent,ChartLegend, ChartLegendContent } from "@/components/ui/chart"

const chartData = [
  { day: "Monday", desktop: 186, mobile: 80 },
  { day: "Tuesday", desktop: 305, mobile: 200 },
  { day: "Wednesday", desktop: 237, mobile: 120 },
  { day: "Thursday", desktop: 73, mobile: 190 },
  { day: "Friday", desktop: 209, mobile: 130 },
  { day: "Sat/Sun", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Lesson",
    color: "#C1D0FF",
  },
  mobile: {
    label: "Article",
    color: "#93BEFF",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
         <XAxis
      dataKey="day"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
     <ChartTooltip content={<ChartTooltipContent />} />
     <ChartLegend content={<ChartLegendContent />} />

        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
