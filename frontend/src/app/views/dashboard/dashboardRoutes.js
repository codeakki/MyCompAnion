import { lazy } from "react";
import { authRoles } from "app/auth/authRoles";

const Dashboard1 = lazy(() => import("./dashboard1/Dashboard1"));

const dashboardRoutes = [
  {
    path: "/dashboard/v1",
    component: Dashboard1,
    auth: authRoles.admin
  },
];

export default dashboardRoutes;
