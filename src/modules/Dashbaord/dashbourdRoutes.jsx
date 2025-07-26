import AddStories from "./AddStories/AddStories";
import AddPackage from "./Admin/AddPackage/AddPackage";
import DashboardLayout from "./DashboardLayout";
import ManageProfile from "./ManageProfile/ManageProfile";
import ManageStories from "./ManageStories/ManageStories";
import AssignedTour from "./TourGuides/AssignedTour/AssignedTour";
import MyBookings from "./Tourist/Bookings/MyBookings";
import JoinTourGuide from "./Tourist/JoinTourGuide/JoinTourGuide";
import PaymentBooking from "./Tourist/PaymentBooking/PaymentBooking";

const dashbourdRoutes = {
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
};

export default dashbourdRoutes;
