import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, DollarSign, BarChart3, Users, Settings, Package, FileText, TrendingUp } from "lucide-react";

const actions = [
  { icon: Plus, label: "Add Pump", description: "Register new fuel pump", variant: "default" as const },
  { icon: DollarSign, label: "Update Price", description: "Change fuel rates", variant: "default" as const },
  { icon: BarChart3, label: "View Reports", description: "Sales & analytics", variant: "default" as const },
  { icon: Users, label: "Manage Users", description: "Staff & permissions", variant: "default" as const },
  { icon: Package, label: "Stock Alert", description: "Set inventory levels", variant: "default" as const },
  { icon: FileText, label: "Generate Invoice", description: "Create bill", variant: "default" as const },
  { icon: TrendingUp, label: "Analytics", description: "Performance metrics", variant: "default" as const },
  { icon: Settings, label: "Settings", description: "System config", variant: "default" as const },
];

export const QuickActions = () => {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
        <p className="text-sm text-muted-foreground mt-1">Common tasks and shortcuts</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto flex flex-col items-center justify-center p-4 gap-2 hover:bg-primary/5 hover:border-primary transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <action.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">{action.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};
