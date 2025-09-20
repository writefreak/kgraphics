"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

// Define the type for your chart data from the API
type ChartDataItem = {
  date: string;
  desktop: number;
  mobile: number;
};

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function MyChart() {
  const [chartData, setChartData] = React.useState<ChartDataItem[]>([]);
  const [filteredData, setFilteredData] = React.useState<ChartDataItem[]>([]);
  const [timeRange, setTimeRange] = React.useState<"7d" | "1m" | "90d">("90d");

  // Fetch chart data from the API
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/countVisits?t=${new Date().getTime()}`);
        if (!res.ok) throw new Error("Failed to fetch chart data");
        const data: ChartDataItem[] = await res.json();
        setChartData(data);
      } catch (err) {
        console.error("Error fetching chart data:", err);
      }
    }
    fetchData();
  }, []);

  // Filter chart data based on time range
  React.useEffect(() => {
    if (!chartData.length) return;

    const today = new Date();
    let daysToSubtract = 90;

    if (timeRange === "7d") daysToSubtract = 7;
    else if (timeRange === "1m") daysToSubtract = 30;

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - daysToSubtract);

    const filtered = chartData.filter(
      (item) => new Date(item.date) >= startDate
    );
    setFilteredData(filtered);
  }, [timeRange, chartData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Gradient</CardTitle>
        <CardDescription>
          Showing total visitors for the selected time range
        </CardDescription>
        <div className="flex space-x-2 pt-2">
          <button
            onClick={() => setTimeRange("7d")}
            className={`px-3 py-1 rounded-md ${
              timeRange === "7d"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            7 Days
          </button>
          <button
            onClick={() => setTimeRange("1m")}
            className={`px-3 py-1 rounded-md ${
              timeRange === "1m"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            1 Month
          </button>
          <button
            onClick={() => setTimeRange("90d")}
            className={`px-3 py-1 rounded-md ${
              timeRange === "90d"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            90 Days
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={filteredData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
