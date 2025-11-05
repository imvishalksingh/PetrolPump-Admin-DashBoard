import { DollarSign, Package, Users, CheckCircle, IndianRupeeIcon } from "lucide-react";
import { StatCard } from "@/components/Dashboard/StatCard";
import { SalesChart } from "@/components/Dashboard/SalesChart";
import { StockTable } from "@/components/Dashboard/StockTable";
import { RecentTransactions } from "@/components/Dashboard/RecentTransactions";
import { AlertsWidget } from "@/components/Dashboard/AlertsWidget";
import { QuickActions } from "@/components/Dashboard/QuickActions";
import { ShiftOverview } from "@/components/Dashboard/ShiftOverview";

const AdminDashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your petrol pump overview.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Today's Sales"
          value="₹2,45,680"
          icon={IndianRupeeIcon}
          change="+12.5%"
          changeType="positive"
          subtitle="Total revenue today"
        />
        <StatCard
          title="Total Stock"
          value="28,100 L"
          icon={Package}
          change="-5.2%"
          changeType="negative"
          subtitle="Available fuel"
        />
        <StatCard
          title="Active Shifts"
          value="2"
          icon={Users}
          subtitle="Staff on duty"
        />
        <StatCard
          title="Pending Approvals"
          value="1"
          icon={CheckCircle}
          subtitle="Requires action"
        />
      </div>

      {/* Sales Chart */}
      <SalesChart />

      {/* Stock and Shift Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StockTable />
        <ShiftOverview />
      </div>

      {/* Recent Transactions */}
      <RecentTransactions />

      {/* Alerts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsWidget />
        <QuickActions />
      </div>
    </div>
  );
};

export default AdminDashboard;
