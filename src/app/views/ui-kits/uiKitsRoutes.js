import { lazy } from "react";
const CardMetrics = lazy(() => import("./card-metrics/CardMetrics"));
const AppTable = lazy(() => import("./tables/AppTable"));
const AppModal = lazy(() => import("./modals/AppModal"));

const uiKitsRoutes = [
  {
    path: "/uikits/cards-metrics",
    component: CardMetrics
  },
  {
    path: "/uikits/tables",
    component: AppTable
  },
  {
    path: "/uikits/modals",
    component: AppModal
  },
];

export default uiKitsRoutes;
