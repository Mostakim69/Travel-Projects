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
import JoinTourGuide from "../modules/Dashbaord/Tourist/JoinTourGuide/JoinTourGuide";
import ManageStories from "../modules/Dashbaord/ManageStories/ManageStories";
import CommunityPage from "../pages/Community/CommunityPage";
import AddStories from "../modules/Dashbaord/AddStories/AddStories";
import AssignedTour from "../modules/Dashbaord/TourGuides/AssignedTour/AssignedTour";
import AddPackage from "../modules/Dashbaord/Admin/AddPackage/AddPackage";

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
      {
        path: "community",
        element: <CommunityPage />,
      },

      // booking page
      // faq pages
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // tourist routes
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "payment-booking/:bookingId",
        element: <PaymentBooking />,
      },

      {
        path: "tourist/join-tour-guide",
        element: <JoinTourGuide />,
      },
      // common routes
      {
        path: "manage-profile",
        element: <ManageProfile />,
      },

      {
        path: "manage-stories",

        element: <ManageStories />,
      },
      {
        path: "add-stories",
        element: <AddStories />,
      },
      // guide routes
      {
        path: "guide/my-assigned-tours",
        element: <AssignedTour />,
      },

      // admin routes
      {
        path: "admin/add-package",
        element: <AddPackage />,
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
