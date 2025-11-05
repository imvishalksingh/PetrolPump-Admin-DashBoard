import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const shifts = [
  {
    id: 1,
    nozzleman: "Rajesh Kumar",
    shift: "Morning",
    status: "Active",
    liters: 2450,
    cash: 125000,
    startTime: "6:00 AM",
  },
  {
    id: 2,
    nozzleman: "Suresh Patel",
    shift: "Afternoon",
    status: "Active",
    liters: 1890,
    cash: 98500,
    startTime: "2:00 PM",
  },
  {
    id: 3,
    nozzleman: "Amit Singh",
    shift: "Night",
    status: "Pending",
    liters: 0,
    cash: 0,
    startTime: "10:00 PM",
  },
];

export const ShiftOverview = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Shift Overview</h3>
        <p className="text-sm text-muted-foreground mt-1">Current shift status and performance</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Nozzleman</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Shift</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Liters</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Cash</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Start Time</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift) => (
              <tr key={shift.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                <td className="py-4 px-4 text-sm font-medium text-foreground">{shift.nozzleman}</td>
                <td className="py-4 px-4 text-sm text-muted-foreground">{shift.shift}</td>
                <td className="py-4 px-4">
                  <Badge
                    variant={shift.status === "Active" ? "default" : "secondary"}
                    className={shift.status === "Active" ? "bg-success text-success-foreground" : ""}
                  >
                    {shift.status}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-sm font-medium text-foreground">{shift.liters.toLocaleString()} L</td>
                <td className="py-4 px-4 text-sm font-medium text-foreground">₹{shift.cash.toLocaleString()}</td>
                <td className="py-4 px-4 text-sm text-muted-foreground">{shift.startTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
