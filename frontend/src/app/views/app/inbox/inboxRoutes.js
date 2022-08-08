import { lazy } from "react";

const Inbox = lazy(() => import("./AppInbox"));

const inboxRoutes = [
  {
    path: "/inbox",
    exact: true,
    component: Inbox
  }
];

export default inboxRoutes;
