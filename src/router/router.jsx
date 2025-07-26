import { createBrowserRouter } from "react-router";
import { RootLayout } from "../modules/shared/Layout";
// import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import Errorpage from "./ErrorPage";
import PackageDetails from "../modules/Packages/PackageDetails/PackageDetails";
import Home from "../modules/landing/home/Home";
import GuideProfile from "../modules/Dashbaord/TourGuides/GuideProfile/GuideProfile";
import TourGuides from "../modules/Dashbaord/TourGuides/TourGuides";
import CommunityPage from "../pages/Community/CommunityPage";
import dashbourdRoutes from "../modules/Dashbaord/dashbourdRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        Component: Home,
      },

      {
        path: "/all-trips",
        // element: <Forbidden />,
      },
      // guide profile page
      {
        path: "/guides/:id",
        element: <GuideProfile />,
      },

      {
        path: "tour-guides",
        element: <TourGuides />,
      },
      // package  details page
      {
        path: "packages/:id",
        element: <PackageDetails />,
      },
      {
        path: "community",
        element: <CommunityPage />,
      },
    ],
  },

  {
    path: "/about",
    element: <div>About</div>,
  },
  dashbourdRoutes,
  AuthRoute,
]);

export default router;
