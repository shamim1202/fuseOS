import { createBrowserRouter } from "react-router";
import AllApps from "../pages/AllApps/AllApps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: ()=>fetch("apps.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: ()=> fetch("mainApps.json"),
        Component: AllApps
      }
    ],
  },
]);
