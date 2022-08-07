import { lazy } from "react";

const FormBasic = lazy(() => import("./FormBasic"));

const FormEditor = lazy(() => import("./FormEditor"));

const formsRoutes = [
  {
    path: "/forms/basic",
    component: FormBasic
  },
  {
    path: "/forms/form-editor",
    component: FormEditor
  }

];

export default formsRoutes;
