You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/Tourist/PaymentBooking
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `PaymentBooking_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved PaymentBooking version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client
├── bun.lock
├── eslint.config.js
├── index.html
├── note.md
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
│   ├── firebase
│   │   └── firebase.init.js
│   ├── hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useFetchData.js
│   │   ├── useHelmet.jsx
│   │   ├── usePostData.jsx
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
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── TourGuides
│   │   │   │   ├── GuideProfile
│   │   │   │   │   └── GuideProfile.jsx
│   │   │   │   └── TourGuides.jsx
│   │   │   └── Tourist
│   │   │       ├── Bookings
│   │   │       │   ├── BookingCard.jsx
│   │   │       │   └── MyBookings.jsx
│   │   │       └── PaymentBooking
│   │   │           ├── PaymentBooking.jsx
│   │   │           └── PaymentForm.jsx
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
│   │       │   ├── navbarDrawer
│   │       │   │   ├── Navdrawer.jsx
│   │       │   │   └── NavdrawerStart.jsx
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

43 directories, 99 files
```

## 📁 Target Module Tree (PaymentBooking)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-client/src/modules/Dashbaord/Tourist/PaymentBooking
├── PaymentBooking.jsx
└── PaymentForm.jsx

1 directory, 2 files
```

## 📄 Module Files & Contents

### `PaymentBooking.jsx`
```javascript
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Key);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm></PaymentForm>
    </Elements>
  );
};

export default Payment;
```

### `PaymentForm.jsx`
```javascript
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../../hooks/usePostData";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { bookingId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { isPending, data: bookingInfo = {} } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${bookingId}`);
      return res.data?.data;
    },
  });

  if (isPending) {
    return (
      <div className="text-center text-indigo-400 py-20 animate-pulse">
        Loading Booking Info...
      </div>
    );
  }

  const amount = bookingInfo.price;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setError("");

    const res = await axiosSecure.post("/payments/create-payment-intent", {
      amountInCents,
      bookingId,
    });

    const clientSecret = res?.data?.data?.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user.displayName,
          email: user.email,
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      setError("");
      if (result.paymentIntent.status === "succeeded") {
        const transactionId = result.paymentIntent.id;

        const paymentData = {
          bookingId,
          amount,
          email: user?.email,
          transactionId,
          paymentMethod: result.paymentIntent.payment_method_types,
        };

        const paymentRes = await axiosSecure.post("/payments", paymentData);

        if (paymentRes?.data?.data?._id) {
          await darkSwal.fire({
            icon: "success",
            title: "Payment Successful!",
            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
            confirmButtonText: "Go to My Bookings",
          });
          navigate("/dashboard/my-bookings");
        }
      }
    }
  };

  return (
    <div
      className="max-w-4xl mx-auto p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl border border-indigo-800"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-bold text-center text-indigo-400 mb-6"
        data-aos="zoom-in"
      >
        Complete Your Payment
      </h2>

      <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
        <div className="space-y-3 text-gray-300" data-aos="fade-right">
          <p>
            <span className="text-indigo-400 font-semibold">Package:</span>{" "}
            {bookingInfo.packageId?.title}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Location:</span>{" "}
            {bookingInfo.packageId?.location}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tour Date:</span>{" "}
            {new Date(bookingInfo.tourDate).toLocaleDateString()}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Days:</span>{" "}
            {bookingInfo.packageId?.days}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Trip Type:</span>{" "}
            {bookingInfo.packageId?.tripType}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Guide:</span>{" "}
            {bookingInfo.guideName}
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">Tourist:</span>{" "}
            {bookingInfo.touristName}
          </p>
        </div>

        <div data-aos="fade-left">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-800 p-6 rounded-xl shadow-xl"
          >
            {/* <CardElement className="p-3 border border-indigo-700 rounded bg-sky-900 text-white" /> */}
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#e0e0ff", // Light text
                    backgroundColor: "#0f172a", // Night blue background
                    iconColor: "#7dd3fc", // Tailwind sky-400 for icon
                    "::placeholder": {
                      color: "#94a3b8", // slate-400
                    },
                  },
                  invalid: {
                    color: "#f87171", // Tailwind red-400
                    iconColor: "#f87171",
                  },
                },
              }}
              className="p-4 border border-indigo-700 rounded bg-[#0f172a]"
            />

            <button
              type="submit"
              disabled={!stripe}
              className="btn w-full py-3 rounded-md font-semibold text-lg transition-all duration-300 bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-indigo-400 shadow-sm hover:scale-105"
              data-aos="zoom-in"
            >
              Pay ${amount}
            </button>
            {error && (
              <p className="text-red-500 mt-2 text-sm" data-aos="fade-in">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

/* import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { darkSwal } from "../../../../hooks/usePostData";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { bookingId } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { isPending, data: bookingInfo = {} } = useQuery({
    queryKey: ["booking", "payment booking", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/${bookingId}`);
      return res.data?.data;
    },
  });

  if (isPending) {
    return <div>...loading</div>;
  }

  const amount = bookingInfo.price;
  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    // step- 1: validate the card
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");

      // step-2: create payment intent
      const res = await axiosSecure.post("payments/create-payment-intent", {
        amountInCents,
        bookingId,
      });

      const clientSecret = res?.data?.data?.clientSecret;

      // step-3: confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        setError("");
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment succeeded!");
          const transactionId = result.paymentIntent.id;

          const paymentData = {
            bookingId,
            amount,
            email: user?.email,
            transactionId,
            paymentMethod: result.paymentIntent.payment_method_types,
          };

          const paymentRes = await axiosSecure.post("/payments", paymentData);
          // console.log(paymentRes.data., "checking");
          console.log(paymentRes?.data?.data?._id, "PaymentForm.jsx", 93);
          if (paymentRes?.data?.data?._id) {
            // ✅ Show SweetAlert with transaction ID
            await darkSwal.fire({
              icon: "success",
              title: "Payment Successful!",
              html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
              confirmButtonText: "Go to My Bookings",
            });
            const paymentHistory = await axiosSecure.post("payments", {
              bookingId,
              email: user?.email,
              amount,
              transactionId,
              paymentMethod: result.paymentIntent.payment_method_types,
            });

            console.log(paymentHistory, "PaymentForm.jsx", 103);
            // ✅ Redirect to /myParcels
            navigate("/dashboard/my-bookings");
          }
        }
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded"></CardElement>
        <button
          type="submit"
          className="btn btn-primary text-black w-full"
          disabled={!stripe}
        >
          Pay ${amount}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm; */
```
