import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: "TXN001",
    product: "Petrol 95",
    liters: 45.2,
    amount: 2350,
    paymentMode: "Card",
    timestamp: "10:45 AM",
    nozzle: "Pump 1",
  },
  {
    id: "TXN002",
    product: "Diesel",
    liters: 60.8,
    amount: 3890,
    paymentMode: "Cash",
    timestamp: "10:42 AM",
    nozzle: "Pump 3",
  },
  {
    id: "TXN003",
    product: "CNG",
    liters: 12.5,
    amount: 750,
    paymentMode: "UPI",
    timestamp: "10:38 AM",
    nozzle: "Pump 5",
  },
  {
    id: "TXN004",
    product: "Petrol 97",
    liters: 35.0,
    amount: 2100,
    paymentMode: "Card",
    timestamp: "10:35 AM",
    nozzle: "Pump 2",
  },
  {
    id: "TXN005",
    product: "Diesel",
    liters: 55.3,
    amount: 3540,
    paymentMode: "Cash",
    timestamp: "10:30 AM",
    nozzle: "Pump 4",
  },
];

export const RecentTransactions = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
        <p className="text-sm text-muted-foreground mt-1">Latest 5 sales</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">ID</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Product</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Liters</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Amount</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Payment</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Pump</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                <td className="py-3 px-4 text-sm font-medium text-primary">{txn.id}</td>
                <td className="py-3 px-4 text-sm text-foreground">{txn.product}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{txn.liters} L</td>
                <td className="py-3 px-4 text-sm font-medium text-foreground">₹{txn.amount}</td>
                <td className="py-3 px-4">
                  <Badge variant="outline">{txn.paymentMode}</Badge>
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{txn.nozzle}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{txn.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
