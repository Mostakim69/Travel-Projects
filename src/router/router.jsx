import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../modules/shared/Layout";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import Errorpage from "./ErrorPage";
import assignmentRoutes from "../modules/assignments/assignmentRoutes";
import TourGuides from "../modules/TourGuides/TourGuides";
import GuideDetails from "../modules/TourGuides/GuideDetails/GuideDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        Component: App,
      },
      // guide details page
      {
        path: "/guides/:id",
        element: <GuideDetails />,
      },

      {
        path: "tour-guides",
        element: <TourGuides />,
      },

      // faq pages

      // assignments route
      ...assignmentRoutes,
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },

  AuthRoute,
]);

export default router;
