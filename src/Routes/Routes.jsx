import { createBrowserRouter } from "react-router";
import AllApps from "../pages/AllApps/AllApps";
import AppsDetails from "../pages/AppsDetails/AppsDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import InstalledApps from "../pages/InstalledApps/InstalledApps";
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
        loader: ()=>fetch("/apps.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: ()=> fetch("/mainApps.json"),
        Component: AllApps
      },
      {
        path: "/apps_details/:id",
        loader: ()=> fetch("/mainApps.json"),
        Component: AppsDetails
      },
      {
        path: "/apps/apps_details/:id",
        loader: ()=> fetch("/mainApps.json"),
        Component: AppsDetails
      },
      {
        path: "/apps/installed_apps",
        loader: ()=> fetch("/mainApps.json"),
        Component: InstalledApps
      }
    ],
  },
]);

/**
 * https://i.ibb.co.com/7fnwW9N/App-Error.png
https://i.ibb.co.com/kgsFzzBx/error-404.jpg
https://i.ibb.co.com/9HBMrqvy/error-image-2.webp
https://i.ibb.co.com/7dXq4D4N/fuse-OS-logo.png
 */
