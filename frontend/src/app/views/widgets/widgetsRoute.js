import { lazy } from "react";


const StatisticsWidget = lazy(() => import("./StatisticsWidget"));


const widgetsRoute = [
  {
    path: "/widgets/statistics",
    component: StatisticsWidget
  },];

export default widgetsRoute;
