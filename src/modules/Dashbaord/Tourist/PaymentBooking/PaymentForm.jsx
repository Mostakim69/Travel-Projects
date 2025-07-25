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
    queryKey: ["parcels", bookingId],
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/${bookingId}`);
      return res.data?.data;
    },
  });

  if (isPending) {
    return "...loading";
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

export default PaymentForm;
