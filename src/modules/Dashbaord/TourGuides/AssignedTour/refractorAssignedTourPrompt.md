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
import useSecureQuery from "../../../../hooks/useSecureQuery";
import AssignedTourCard from "./AssignedTourCard";

const AssignedTour = () => {
  const { data, isLoading, error } = useSecureQuery(
    ["guideBookings", "687cff8d095a1d459861b897"], // Unique key
    "/bookings/guide/687cff8d095a1d459861b897", // API endpoint
  );

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Error loading bookings</p>;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {data?.data?.map((booking) => (
        <AssignedTourCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
};

export default AssignedTour;
```

### `AssignedTourCard.jsx`

```javascript
const AssignedTourCard = ({ booking }) => {
  return (
    <div>
      <div className="bg-base-200 rounded-lg shadow p-4 space-y-2">
        <h2 className="text-xl font-bold">{booking.packageName}</h2>
        <p>
          <strong>Tourist:</strong> {booking.touristName}
        </p>
        <p>
          <strong>Email:</strong> {booking.touristEmail}
        </p>
        <p>
          <strong>Status:</strong> {booking.status}
        </p>
        <p>
          <strong>Payment:</strong> {booking.paymentStatus}
        </p>
        <p>
          <strong>Price:</strong> ৳{booking.price}
        </p>
        <p>
          <strong>Tour Date:</strong>{" "}
          {new Date(booking.tourDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default AssignedTourCard;
```
