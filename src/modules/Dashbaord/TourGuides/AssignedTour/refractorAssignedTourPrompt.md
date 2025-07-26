You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/TourGuides/AssignedTour
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `AssignedTour_refactored`

Also return a `.sh` script that will:

- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved AssignedTour version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
├── bun.lock
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── CNAME
├── README.md
├── src
│   ├── animation
│   │   ├── auth-lottie.json
│   │   ├── index.js
│   │   ├── LottieAnimation.jsx
│   │   └── motion.js
│   ├── App.jsx
│   ├── console
│   │   ├── error.json
│   │   └── log.json
│   ├── contexts
│   │   └── AuthContext
│   │       ├── AuthContext.jsx
│   │       └── AuthProvider.jsx
│   ├── docs
│   │   ├── note.md
│   │   └── prompt.md
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useFetchData.js
│   │   ├── useHelmet.jsx
│   │   ├── usePostData.jsx
│   │   ├── useSecureQuery.jsx
│   │   ├── useSecureUpdate.js
│   │   └── useUserRole.jsx
│   ├── index.css
│   ├── loggerClient.js
│   ├── main.jsx
│   ├── modules
│   │   ├── Auth
│   │   │   ├── AuthLayout.jsx
│   │   │   ├── AuthRoute.jsx
│   │   │   ├── components
│   │   │   │   ├── AuthSidebar.jsx
│   │   │   │   ├── constant.js
│   │   │   │   ├── SideBarCard.jsx
│   │   │   │   ├── SigninForm.jsx
│   │   │   │   ├── Signout.jsx
│   │   │   │   ├── SignUpForm.jsx
│   │   │   │   └── SocialLogin.jsx
│   │   │   ├── index.js
│   │   │   └── pages
│   │   │       ├── ForgotPass.jsx
│   │   │       ├── Signin.jsx
│   │   │       └── SignUp.jsx
│   │   ├── Dashbaord
│   │   │   ├── AddStories
│   │   │   │   └── AddStories.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── ManageProfile
│   │   │   │   └── ManageProfile.jsx
│   │   │   ├── ManageStories
│   │   │   │   ├── components
│   │   │   │   │   ├── EditStoryModal.jsx
│   │   │   │   │   └── StoryCard.jsx
│   │   │   │   └── ManageStories.jsx
│   │   │   ├── TourGuides
│   │   │   │   ├── AssignedTour
│   │   │   │   │   ├── AssignedTourCard.jsx
│   │   │   │   │   └── AssignedTour.jsx
│   │   │   │   ├── GuideProfile
│   │   │   │   │   └── GuideProfile.jsx
│   │   │   │   └── TourGuides.jsx
│   │   │   └── Tourist
│   │   │       ├── Bookings
│   │   │       │   ├── BookingCard.jsx
│   │   │       │   └── MyBookings.jsx
│   │   │       ├── JoinTourGuide
│   │   │       │   └── JoinTourGuide.jsx
│   │   │       └── PaymentBooking
│   │   │           ├── PaymentBooking.jsx
│   │   │           ├── PaymentForm.jsx
│   │   │           └── refractorPaymentBookingPrompt.md
│   │   ├── landing
│   │   │   ├── home
│   │   │   │   ├── Bannnerr
│   │   │   │   │   └── Banner.jsx
│   │   │   │   ├── CallToActionFull
│   │   │   │   │   └── CallToActionFull.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── HowItWorks
│   │   │   │   │   └── HowItWorks.jsx
│   │   │   │   ├── LiveStats
│   │   │   │   │   └── LiveStats.jsx
│   │   │   │   ├── NewsletterSignup
│   │   │   │   │   └── NewsletterSignup.jsx
│   │   │   │   ├── Overview
│   │   │   │   │   ├── Overview.jsx
│   │   │   │   │   └── Stories
│   │   │   │   │       ├── Stories.jsx
│   │   │   │   │       └── StoryCard.jsx
│   │   │   │   ├── PartnerWithUs
│   │   │   │   │   └── PartnerWithUs.jsx
│   │   │   │   ├── RandomGuides
│   │   │   │   │   └── RandomGuides.jsx
│   │   │   │   ├── Testimonials
│   │   │   │   │   ├── TestimonialCard.jsx
│   │   │   │   │   └── Testimonials.jsx
│   │   │   │   ├── TourismAndGuides.jsx
│   │   │   │   ├── TrendingDestinations
│   │   │   │   │   └── TrendingDestinations.jsx
│   │   │   │   └── WhyChooseUs
│   │   │   │       └── WhyChooseUs.jsx
│   │   │   └── index.js
│   │   ├── Packages
│   │   │   └── PackageDetails
│   │   │       └── PackageDetails.jsx
│   │   └── shared
│   │       ├── Layout
│   │       │   ├── CommonFooter.jsx
│   │       │   ├── index.js
│   │       │   ├── NavbarDrawer.jsx
│   │       │   ├── Navbar.jsx
│   │       │   ├── navbarLinksConstant.jsx
│   │       │   ├── RootLayout.jsx
│   │       │   ├── SidebarLink.jsx
│   │       │   ├── sidebarLinks.js
│   │       │   └── Spinner.jsx
│   │       └── ui
│   │           ├── Avatar.jsx
│   │           ├── Brand.jsx
│   │           ├── Button.jsx
│   │           ├── DropDown.jsx
│   │           ├── index.js
│   │           └── Input.jsx
│   ├── pages
│   │   ├── Community
│   │   │   ├── CommunityPage.jsx
│   │   │   └── components
│   │   └── faq
│   │       ├── faq.constant.js
│   │       └── FAQ.jsx
│   ├── router
│   │   ├── ErrorPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── router.jsx
│   └── utils
│       ├── axiosInstance.js
│       ├── customAlert.js
│       ├── deleteData.js
│       ├── ErrorMessage.jsx
│       ├── fetchData.js
│       ├── PageIntro.jsx
│       ├── postData.js
│       ├── TypeWriterEffect.jsx
│       └── updateData.js
├── structure.md
├── tmuxShow03_25_অপরাহ্ণ_19_07_25.mp4
├── vite.config.js
└── vite.logger.plugin.js

51 directories, 110 files
```

## 📁 Target Module Tree (AssignedTour)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/TourGuides/AssignedTour
├── AssignedTourCard.jsx
└── AssignedTour.jsx

1 directory, 2 files
```

## 📄 Module Files & Contents

### `AssignedTour.jsx`

```javascript
// AssignedTour.jsx
import useSecureQuery from "../../../../hooks/useSecureQuery";
import useSecureUpdate from "../../../../hooks/useSecureUpdate";
import AssignedTourCard from "./AssignedTourCard";
import { darkSwal } from "../../../../hooks/usePostData";

const AssignedTour = () => {
  const { data, isLoading, error, refetch } = useSecureQuery(
    ["guideBookings", "687cff8d095a1d459861b897"],
    "/bookings/guide/687cff8d095a1d459861b897",
  );

  const handleAction = async (bookingId, status) => {
    try {
      const res = await useSecureUpdate(`/bookings/${bookingId}`, { status });
      if (res?.data?.success) {
        darkSwal.fire("Success", `Booking ${status}`, "success");
        refetch();
      }
    } catch (err) {
      darkSwal.fire("Error", err.message, "error");
    }
  };

  if (isLoading)
    return (
      <p className="text-center text-lg text-accent animate-pulse">
        Loading tours...
      </p>
    );

  if (error)
    return <p className="text-center text-red-400">Failed to load bookings.</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
        Assigned Tours
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {data?.data?.map((booking) => (
          <div
            key={booking._id}
            className="rounded-xl shadow-lg border border-gray-700 bg-base-200 bg-opacity-80 p-4 backdrop-blur-md hover:shadow-xl transition duration-300 ease-in-out"
          >
            <AssignedTourCard booking={booking} handelAction={handleAction} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedTour;
```

### `AssignedTourCard.jsx`

```javascript
const AssignedTourCard = ({ booking, handleAction }) => {
  const {
    touristName,
    touristEmail,
    touristPhoto,
    packageName,
    price,
    tourDate,
    status,
    paymentStatus,
  } = booking;

  const formattedDate = new Date(tourDate).toLocaleDateString();

  return (
    <div className="bg-purple-950 bg-opacity-60 rounded-xl p-5 shadow-lg border border-gray-700 hover:shadow-fuchsia-600 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={touristPhoto}
          alt={touristName}
          className="w-14 h-14 rounded-full ring-2 ring-fuchsia-500 shadow-md"
        />
        <div>
          <h2 className="text-lg font-semibold text-white">{touristName}</h2>
          <p className="text-sm text-gray-400">{touristEmail}</p>
        </div>
      </div>

      <div className="text-sm space-y-1 text-gray-300">
        <p>
          <span className="text-fuchsia-400 font-semibold">Package:</span>{" "}
          {packageName}
        </p>
        <p>
          <span className="text-fuchsia-400 font-semibold">Price:</span> ৳
          {price}
        </p>
        <p>
          <span className="text-fuchsia-400 font-semibold">Tour Date:</span>{" "}
          {formattedDate}
        </p>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span
          className={`badge ${
            status === "accepted"
              ? "badge-success"
              : status === "rejected"
                ? "badge-error"
                : "badge-ghost"
          }`}
        >
          {status}
        </span>
        <span
          className={`badge ${
            paymentStatus === "paid"
              ? "badge-info"
              : "badge-outline badge-warning"
          }`}
        >
          {paymentStatus}
        </span>
      </div>

      {booking.status === "in-review" && (
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={() => handleAction(booking._id, "accepted")}
            className="btn btn-success btn-sm hover:brightness-110 transition"
          >
            Accept
          </button>
          <button
            onClick={() => handleAction(booking._id, "rejected")}
            className="btn btn-error btn-sm hover:brightness-110 transition"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default AssignedTourCard;
```
