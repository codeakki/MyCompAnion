import { lazy } from "react";

const UploadForm = lazy(() => import("./UploadForm"));

const extraKitsRoutes = [
  {
    path: "/extra-kits/upload",
    component: UploadForm
  },

];

export default extraKitsRoutes;
