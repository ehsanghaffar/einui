import { DollarSign, Users } from "lucide-react";
import {
  AnalogClockWidget,
  CalendarWidget,
  CompactCalendarWidget,
  CompactStockWidget,
  CryptoWidget,
  CurrentWeatherWidget,
  DetailedWeatherWidget,
  DigitalClockWidget,
  EventsCalendarWidget,
  ForecastWeatherWidget,
  ForecastWidget,
  HourlyWeatherWidget,
  MarketOverviewWidget,
  PortfolioWidget,
  StatsGrid,
  StockTickerWidget,
  StopwatchWidget,
  TimerWidget,
  WorldClockWidget,
} from "@einui/registry";

import type { ComponentExample } from "./types";

// ========== WEATHER EXAMPLES ==========
export const weatherExamples: ComponentExample[] = [
  {
    title: "Current Weather Widget",
    description: "Display current weather with temperature, conditions, and basic metrics.",
    preview: (
      <div className="flex flex-wrap gap-6 justify-center">
        <CurrentWeatherWidget
          location="San Francisco"
          temperature={18}
          feelsLike={16}
          high={22}
          low={14}
          condition="cloudy"
          humidity={68}
          windSpeed={15}
        />
        <CurrentWeatherWidget
          location="Mumbai"
          temperature={35}
          feelsLike={38}
          high={37}
          low={28}
          condition="sunny"
          humidity={45}
          windSpeed={8}
        />
      </div>
    ),
    code: `<CurrentWeatherWidget
  location="San Francisco"
  temperature={18}
  feelsLike={16}
  high={22}
  low={14}
  condition="cloudy"
  humidity={68}
  windSpeed={15}
/>`,
  },
  {
    title: "Forecast Widget",
    description: "5-day weather forecast with high/low temperatures.",
    preview: (
      <ForecastWeatherWidget
        current={{
          temperature: 18,
          condition: "cloudy",
          icon: "cloud",
        }}
        forecast={[
          { day: "Mon", high: 22, low: 14, condition: "sunny" },
          { day: "Tue", high: 24, low: 15, condition: "sunny" },
          { day: "Wed", high: 20, low: 13, condition: "cloudy" },
          { day: "Thu", high: 18, low: 12, condition: "rainy" },
          { day: "Fri", high: 21, low: 14, condition: "cloudy" },
        ]}
      />
    ),
    code: `<ForecastWeatherWidget
  current={{
    temperature: 18,
    condition: "cloudy",
    icon: "cloud",
  }}
  forecast={[
    { day: "Mon", high: 22, low: 14, condition: "sunny" },
    { day: "Tue", high: 24, low: 15, condition: "sunny" },
    { day: "Wed", high: 20, low: 13, condition: "cloudy" },
  ]}
/>`,
  },
  {
    title: "Large Weather Widget",
    description: "Prominent weather display for dashboards and home screens.",
    preview: (
      <div className="flex flex-wrap gap-6">
        <DetailedWeatherWidget location="Mumbai" temperature={29} condition="sunny" />
        <DetailedWeatherWidget location="London" temperature={8} condition="rainy" />
      </div>
    ),
    code: `<LargeWeatherWidget
  location="Mumbai"
  temperature={29}
  condition="sunny"
/>`,
  },
  {
    title: "Forecast Widget",
    description: "5-day weather forecast with high/low temperatures.",
    preview: (
      <ForecastWidget
        forecast={[
          { day: "Mon", high: 22, low: 14, condition: "sunny" },
          { day: "Tue", high: 24, low: 15, condition: "sunny" },
          { day: "Wed", high: 20, low: 13, condition: "cloudy" },
          { day: "Thu", high: 18, low: 12, condition: "rainy" },
          { day: "Fri", high: 21, low: 14, condition: "cloudy" },
        ]}
      />
    ),
    code: `<ForecastWidget
  forecast={[
    { day: "Mon", high: 22, low: 14, condition: "sunny" },
    { day: "Tue", high: 24, low: 15, condition: "sunny" },
    { day: "Wed", high: 20, low: 13, condition: "cloudy" },
  ]}
/>`,
  },
  {
    title: "Hourly Forecast Widget",
    description: "Scrollable hourly weather forecast.",
    preview: (
      <HourlyWeatherWidget
        hours={[
          { time: "Now", temperature: 18, icon: "cloud" },
          { time: "2PM", temperature: 20, icon: "sun" },
          { time: "4PM", temperature: 22, icon: "sun" },
          { time: "6PM", temperature: 19, icon: "cloud" },
          { time: "8PM", temperature: 16, icon: "snow" },
        ]}
      />
    ),
    code: `<HourlyWeatherWidget
    hours={[
    { time: "Now", temperature: 18, icon: "cloud" },
    { time: "2PM", temperature: 20, icon: "sun" },
    { time: "4PM", temperature: 22, icon: "sun" },
    { time: "6PM", temperature: 19, icon: "cloud" },
    { time: "8PM", temperature: 16, icon: "snow" },
  ]}
/>`,
  },

  {
    title: "Weather Details Widget",
    description: "Detailed weather metrics including UV, visibility, pressure, and more.",
    preview: (
      <DetailedWeatherWidget
        location="New York"
        temperature={22}
        condition="sunny"
        humidity={65}
        windSpeed={12}
        feelsLike={24}
      />
    ),
    code: `<DetailedWeatherWidget
  location="New York"
  temperature={22}
  condition="sunny"
  humidity={65}
  windSpeed={12}
  feelsLike={24}
/>`,
  },
];

// ========== CALENDAR EXAMPLES ==========
export const calendarExamples: ComponentExample[] = [
  {
    title: "Calendar Widget",
    description: "Compact calendar widget showing current date and month overview.",
    preview: (
      <div className="flex flex-wrap gap-6 justify-center">
        <CalendarWidget />
        <CalendarWidget date={new Date(2025, 0, 1)} />
      </div>
    ),
    code: `<CalendarWidget />`,
  },
  {
    title: "Month Calendar Widget",
    description: "Full month calendar view with date selection.",
    preview: (
      <div className="flex flex-wrap gap-6">
        <CompactCalendarWidget />
        <CompactCalendarWidget date={new Date(2025, 0, 1)} />
      </div>
    ),
    code: `<div className="flex flex-wrap gap-6">
    <CompactCalendarWidget />
    <CompactCalendarWidget date={new Date(2025, 0, 1)} />
  </div>`,
  },
  {
    title: "Event Widget",
    description: "Display upcoming events and appointments.",
    preview: (
      <EventsCalendarWidget
        date={new Date(2025, 0, 1)}
        events={[
          { id: "1", title: "Team Meeting", time: "9:00 AM", color: "blue" },
          { id: "2", title: "Lunch with Client", time: "12:30 PM", color: "green" },
          { id: "3", title: "Project Review", time: "3:00 PM", color: "purple" },
        ]}
      />
    ),
    code: `<EventsCalendarWidget
  events={[
    { id: "1", title: "Team Meeting", time: "9:00 AM", color: "blue" },
    { id: "2", title: "Lunch with Client", time: "12:30 PM", color: "green" },
    { id: "3", title: "Project Review", time: "3:00 PM", color: "purple" },
  ]}
/>`,
  },
];

// ========== CLOCK EXAMPLES ==========
export const clockExamples: ComponentExample[] = [
  {
    title: "Digital Clock Widget",
    description: "Clean digital clock display with date.",
    preview: (
      <div className="flex flex-wrap gap-6 justify-center">
        <DigitalClockWidget />
        <DigitalClockWidget showSeconds />
        <DigitalClockWidget showSeconds format="24h" />
      </div>
    ),
    code: `<div className="flex flex-wrap gap-6">
<DigitalClockWidget />
<DigitalClockWidget showSeconds />
<DigitalClockWidget showSeconds format="24h" />
</div>`,
  },
  {
    title: "Analog Clock Widget",
    description: "Classic analog clock with smooth hand movement.",
    preview: (
      <div className="flex flex-wrap gap-6 justify-center">
        <AnalogClockWidget showNumbers size="sm" />
        <AnalogClockWidget showNumbers size="md" />
        <AnalogClockWidget size="lg" showNumbers={false} />
      </div>
    ),
    code: `<div className="flex flex-wrap gap-6">
<AnalogClockWidget showNumbers size="sm" />
<AnalogClockWidget showNumbers size="md" />
<AnalogClockWidget showNumbers={false} size="lg" />
</div>`,
  },
  {
    title: "World Clock Widget",
    description: "Display multiple time zones simultaneously.",
    preview: (
      <div className="flex flex-wrap gap-6">
        <WorldClockWidget
          clocks={[
            { city: "New York", timezone: "America/New_York" },
            { city: "London", timezone: "Europe/London", isDay: true },
            { city: "Tokyo", timezone: "Asia/Tokyo", isDay: false },
          ]}
        />
      </div>
    ),
    code: `<WorldClockWidget
  clocks={[
    { city: "New York", timezone: "America/New_York", isDay: true },
    { city: "London", timezone: "Europe/London", isDay: false },
    { city: "Tokyo", timezone: "Asia/Tokyo", isDay: true },
  ]}
/>`,
  },
  {
    title: "Countdown Timer Widget",
    description: "Countdown timer with start, pause, and reset controls.",
    preview: (
      <div className="flex justify-center items-center p-4">
        <TimerWidget initialMinutes={5} />
      </div>
    ),
    code: `<TimerWidget initialMinutes={5} />`,
  },
  {
    title: "Stopwatch Widget",
    description: "Precision stopwatch with lap time tracking.",
    preview: (
      <div className="flex justify-center items-center p-4">
        <StopwatchWidget />
      </div>
    ),
    code: `<StopwatchWidget />`,
  },
];

// ========== STOCKS EXAMPLES ==========
export const stocksExamples: ComponentExample[] = [
  {
    title: "Stock Ticker",
    description: "Scrolling stock ticker with price changes.",
    preview: (
      <StockTickerWidget
        symbol="AAPL"
        name="Apple Inc."
        price={178.23}
        change={2.45}
        changePercent={1.39}
        chartData={[175, 176.5, 175.8, 177, 178.5, 177.8, 178.23]}
      />
    ),
    code: `<StockTickerWidget
  symbol="AAPL"
  name="Apple Inc."
  price={178.23}
  change={2.45}
  changePercent={1.39}
  chartData={[175, 176.5, 175.8, 177, 178.5, 177.8, 178.23]}
/>`,
  },
  {
    title: "Compact Stock Card",
    description: "Compact view of stock information with price change.",
    preview: (
      <CompactStockWidget symbol="TSLA" price={245.67} change={-3.21} changePercent={-1.29} />
    ),
    code: `<CompactStockWidget
  symbol="TSLA"
  price={245.67}
  change={-3.21}
  changePercent={-1.29}
/>`,
  },
  {
    title: "Portfolio Overview",
    description: "Portfolio summary with total value and individual holdings.",
    preview: (
      <PortfolioWidget
        totalValue={125430.5}
        totalChange={3.24}
        holdings={[
          { symbol: "AAPL", name: "Apple", shares: 100, avgCost: 150, currentPrice: 178.23 },
          { symbol: "MSFT", name: "Microsoft", shares: 50, avgCost: 300, currentPrice: 378.91 },
          { symbol: "GOOGL", name: "Alphabet", shares: 25, avgCost: 120, currentPrice: 141.8 },
        ]}
      />
    ),
    code: `<PortfolioWidget
  totalValue={125430.50}
  totalChange={3.24}
  holdings={[...]}
/>`,
  },
  {
    title: "Market Overview",
    description: "Overview of market indices with change percentages.",
    preview: (
      <MarketOverviewWidget
        indices={[
          { name: "S&P 500", value: 4783.45, change: 23.54, changePercent: 0.49 },
          { name: "Dow Jones", value: 37440.34, change: -45.23, changePercent: -0.12 },
          { name: "NASDAQ", value: 15043.97, change: 102.56, changePercent: 0.69 },
        ]}
      />
    ),
    code: `<MarketOverviewWidget
  indices={[
    { name: "S&P 500", value: 4783.45, change: 23.54, changePercent: 0.49 },
    { name: "Dow Jones", value: 37440.34, change: -45.23, changePercent: -0.12 }
  ]}
/>`,
  },
  {
    title: "Crypto Widget",
    description: "Display cryptocurrency prices with market cap and volume.",
    preview: (
      <CryptoWidget
        symbol="BTC"
        name="Bitcoin"
        price={43250.45}
        change24h={2.34}
        marketCap="$845B"
        volume24h="$28.4B"
        sparkline={[42000, 42500, 42200, 43000, 43500, 43200, 43250]}
      />
    ),
    code: `<CryptoWidget
  symbol="BTC"
  name="Bitcoin"
  price={43250.45}
  change24h={2.34}
  marketCap="$845B"
  volume24h="$28.4B"
  sparkline={[...]}
/>`,
  },
];

// ========== STATS EXAMPLES ==========
export const statsExamples: ComponentExample[] = [
  {
    title: "Stats Grid",
    description: "Grid of stats and metrics display widgets.",
    preview: (
      <div className="flex flex-wrap gap-6">
        <StatsGrid
          stats={[
            {
              title: "Total Users",
              value: "12,345",
              change: { value: 12.5, type: "increase" },
              icon: <Users className="w-5 h-5" />,
            },
            {
              title: "Revenue",
              value: "$45,678",
              change: { value: 8.2, type: "increase" },
              glowColor: "green",
              icon: <DollarSign className="w-5 h-5" />,
            },
            {
              title: "Active Sessions",
              value: "1,234",
              change: { value: 5.3, type: "decrease" },
              glowColor: "red",
            },
          ]}
        />
      </div>
    ),
    code: `<StatsGrid
  stats={[
    {
      title: "Total Users",
      value: "12,345",
      change: { value: 12.5, type: "increase" },
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Revenue",
      value: "$45,678",
      change: { value: 8.2, type: "increase" },
      glowColor: "green",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      title: "Active Sessions",
      value: "1,234",
      change: { value: 5.3, type: "decrease" },
      glowColor: "red",
    },
  ]}
/>`,
  },
];

// ========== INNOVATIVE EXAMPLES ==========
export const innovativeExamples: ComponentExample[] = [];
