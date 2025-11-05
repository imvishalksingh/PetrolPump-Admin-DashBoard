import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const stockData = [
  { id: 1, product: "Petrol 95", tank: "Tank 1", capacity: 10000, available: 7500, percentage: 75, status: "Normal" },
  { id: 2, product: "Diesel", tank: "Tank 2", capacity: 12000, available: 2100, percentage: 17.5, status: "Low" },
  { id: 3, product: "Petrol 97", tank: "Tank 3", capacity: 8000, available: 6400, percentage: 80, status: "Normal" },
  { id: 4, product: "CNG", tank: "Tank 4", capacity: 5000, available: 4200, percentage: 84, status: "Normal" },
];

export const StockTable = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Stock Summary</h3>
        <p className="text-sm text-muted-foreground mt-1">Current fuel inventory levels</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Product</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Tank</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Capacity (L)</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Available (L)</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Level</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item) => (
              <tr key={item.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                <td className="py-4 px-4 text-sm font-medium text-foreground">{item.product}</td>
                <td className="py-4 px-4 text-sm text-muted-foreground">{item.tank}</td>
                <td className="py-4 px-4 text-sm text-muted-foreground">{item.capacity.toLocaleString()}</td>
                <td className="py-4 px-4 text-sm font-medium text-foreground">{item.available.toLocaleString()}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Progress value={item.percentage} className="w-24 h-2" />
                    <span className="text-sm font-medium text-foreground">{item.percentage}%</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge
                    variant={item.status === "Low" ? "destructive" : "secondary"}
                    className={item.status === "Normal" ? "bg-success text-success-foreground" : ""}
                  >
                    {item.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
