import React from "react";
import { Redirect } from "react-router-dom";
import dashboardRoutes from "./views/dashboard/dashboardRoutes";
import uiKitsRoutes from "./views/ui-kits/uiKitsRoutes";
import formsRoutes from "./views/forms/formsRoutes";
import sessionsRoutes from "./views/sessions/sessionsRoutes";
import AuthGuard from "./auth/AuthGuard";
import widgetsRoute from "./views/widgets/widgetsRoute";
import chartsRoute from "./views/charts/chartsRoute";
import extraKitsRoutes from "./views/extra-kits/extraKitsRoutes";
import inboxRoutes from "./views/app/inbox/inboxRoutes";
import chatRoutes from "./views/app/chat/chatRoutes";
import calendarRoutes from "./views/app/calendar/calendarRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/v1" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionsRoutes,
  {
    path: "/",
    component: AuthGuard,
    routes: [
      ...dashboardRoutes,
      ...uiKitsRoutes,
      ...formsRoutes,
      ...widgetsRoute,
      ...chartsRoute,
      ...extraKitsRoutes,
      ...inboxRoutes,
      ...chatRoutes,
      ...calendarRoutes,
      ...redirectRoute,
      ...errorRoute
    ]
  }
];

export default routes;
