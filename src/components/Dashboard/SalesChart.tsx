import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const salesData = [
  { day: "Mon", petrol: 4500, diesel: 3200, cng: 1800 },
  { day: "Tue", petrol: 5200, diesel: 3800, cng: 2100 },
  { day: "Wed", petrol: 4800, diesel: 3500, cng: 1900 },
  { day: "Thu", petrol: 5800, diesel: 4200, cng: 2400 },
  { day: "Fri", petrol: 6200, diesel: 4500, cng: 2600 },
  { day: "Sat", petrol: 7100, diesel: 5100, cng: 2900 },
  { day: "Sun", petrol: 6800, diesel: 4800, cng: 2700 },
];

export const SalesChart = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Sales Overview (Last 7 Days)</h3>
        <p className="text-sm text-muted-foreground mt-1">Liters dispensed by fuel type</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="petrol"
            stroke="hsl(var(--chart-primary))"
            strokeWidth={2}
            name="Petrol"
            dot={{ fill: "hsl(var(--chart-primary))" }}
          />
          <Line
            type="monotone"
            dataKey="diesel"
            stroke="hsl(var(--chart-secondary))"
            strokeWidth={2}
            name="Diesel"
            dot={{ fill: "hsl(var(--chart-secondary))" }}
          />
          <Line
            type="monotone"
            dataKey="cng"
            stroke="hsl(var(--chart-tertiary))"
            strokeWidth={2}
            name="CNG"
            dot={{ fill: "hsl(var(--chart-tertiary))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
