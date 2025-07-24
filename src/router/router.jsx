import { createBrowserRouter } from "react-router";
import App from "../App";
import { RootLayout } from "../modules/shared/Layout";
// import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import Errorpage from "./ErrorPage";
import TourGuides from "../modules/TourGuides/TourGuides";
import GuideProfile from "../modules/TourGuides/GuideProfile/GuideProfile";
import PackageDetails from "../modules/Packages/PackageDetails/PackageDetails";
import MyBookings from "../modules/Tourist/Bookings/MyBookings";

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

      // booking page
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      // faq pages
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },

  AuthRoute,
]);

export default router;
