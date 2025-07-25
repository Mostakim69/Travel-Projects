import { createBrowserRouter } from "react-router";
import { RootLayout } from "../modules/shared/Layout";
// import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "../modules/Auth/AuthRoute";
import Errorpage from "./ErrorPage";
import PackageDetails from "../modules/Packages/PackageDetails/PackageDetails";
import Home from "../modules/landing/home/Home";
import GuideProfile from "../modules/Dashbaord/TourGuides/GuideProfile/GuideProfile";
import TourGuides from "../modules/Dashbaord/TourGuides/TourGuides";
import MyBookings from "../modules/Dashbaord/Tourist/Bookings/MyBookings";
import DashboardLayout from "../modules/Dashbaord/DashboardLayout";
import PaymentBooking from "../modules/Dashbaord/Tourist/PaymentBooking/PaymentBooking";
import ManageProfile from "../modules/Dashbaord/ManageProfile/ManageProfile";

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
      // faq pages
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "payment-booking/:bookingId",
        element: <PaymentBooking />,
      },
      {
        path: "guide/manage-profile",
        element: <ManageProfile />,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },

  AuthRoute,
]);

export default router;
