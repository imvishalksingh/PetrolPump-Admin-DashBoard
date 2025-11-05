import { DataTable } from "../Shared/DataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const mockUsers = [
  {
    id: "U001",
    name: "Rajesh Kumar",
    role: "Admin",
    email: "rajesh@petrolpump.com",
    status: "Active",
    lastLogin: "2025-01-10 09:30",
  },
  {
    id: "U002",
    name: "Amit Sharma",
    role: "Manager",
    email: "amit@petrolpump.com",
    status: "Active",
    lastLogin: "2025-01-10 08:15",
  },
  {
    id: "U003",
    name: "Vijay Singh",
    role: "Nozzleman",
    email: "vijay@petrolpump.com",
    status: "Active",
    lastLogin: "2025-01-09 18:45",
  },
  {
    id: "U004",
    name: "Suresh Patel",
    role: "Nozzleman",
    email: "suresh@petrolpump.com",
    status: "Inactive",
    lastLogin: "2025-01-05 14:20",
  },
  {
    id: "U005",
    name: "Deepak Verma",
    role: "Auditor",
    email: "deepak@petrolpump.com",
    status: "Active",
    lastLogin: "2025-01-10 10:00",
  },
];

export const UserList = () => {
  const columns = [
    {
      key: "id",
      label: "User ID",
      render: (item: any) => (
        <span className="font-medium">{item.id}</span>
      ),
    },
    {
      key: "name",
      label: "Name",
      render: (item: any) => (
        <span className="font-semibold">{item.name}</span>
      ),
    },
    {
      key: "role",
      label: "Role",
      render: (item: any) => {
        const colors: Record<string, string> = {
          Admin: "bg-primary/10 text-primary",
          Manager: "bg-secondary/10 text-primary",
          Nozzleman: "bg-chart-3/10 text-chart-3",
          Auditor: "bg-chart-4/10 text-chart-4",
        };
        return (
          <Badge className={colors[item.role]}>
            {item.role}
          </Badge>
        );
      },
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "lastLogin",
      label: "Last Login",
    },
    {
      key: "status",
      label: "Status",
      render: (item: any) => (
        <Switch checked={item.status === "Active"} />
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <Button variant="outline" size="sm">
          Edit
        </Button>
      ),
    },
  ];

  return <DataTable data={mockUsers} columns={columns} />;
};