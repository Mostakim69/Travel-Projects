import { useQuery } from "@tanstack/react-query";
import { FaCheckCircle } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { Link } from "react-router"; // react-router-dom, NOT react-router
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserRole from "../../../hooks/useUserRole";
import useAuth from "../../../hooks/useAuth";
import BookingCard from "./BookingCard";

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { userData } = useUserRole();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["myBookings", userData?._id],
    enabled: !!userData?._id,
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/tourist/${userData._id}`);
      return res.data?.data || [];
    },
  });

  if (isLoading) {
    return (
      <div className="text-center text-xl py-20 text-indigo-400 animate-pulse">
        Loading your bookings...
      </div>
    );
  }

  if (!bookings.length) {
    return (
      <div className="text-center py-20 text-gray-400">
        <h2 className="text-2xl font-bold mb-4">No bookings found</h2>
        <Link to="/" className="btn btn-primary glow-border px-6 py-2">
          Browse Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400 tracking-wide">
        📚 My Bookings
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;

// import { useQuery } from "@tanstack/react-query";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { MdPending } from "react-icons/md";
// import { Link } from "react-router";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useUserRole from "../../../hooks/useUserRole";
// import useAuth from "../../../hooks/useAuth";
//
// const MyBookings = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();
//
//   const { userData } = useUserRole();
//   const { data: bookings = [], isLoading } = useQuery({
//     queryKey: ["myBookings", user?.email],
//     // enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axiosSecure.get(`bookings/tourist/${userData._id}`);
//       return res.data?.data;
//     },
//   });
//
//   if (isLoading) {
//     return (
//       <div className="text-center text-xl py-20">Loading your bookings...</div>
//     );
//   }
//
//   if (!bookings.length) {
//     return (
//       <div className="text-center py-20 text-gray-300">
//         <h2 className="text-2xl font-bold mb-4">No bookings found</h2>
//         <Link to="/" className="btn btn-primary glow-border">
//           Browse Packages
//         </Link>
//       </div>
//     );
//   }
//   console.log(bookings, "MyBookings.jsx", 15);
//
//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10 text-gray-200">
//       <h2 className="text-3xl font-bold mb-8 text-center">📚 My Bookings</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {bookings.map((booking) => (
//           <div
//             key={booking._id}
//             className="p-6 rounded-xl border border-gray-700 bg-gray-900 glow-border pulse-glow transition hover:scale-[1.02]"
//           >
//             <h3 className="text-xl font-semibold mb-2">
//               {booking.packageName}
//             </h3>
//             <p>
//               <span className="font-medium">Date:</span>{" "}
//               {new Date(booking.tourDate).toLocaleDateString()}
//             </p>
//             <p>
//               <span className="font-medium">Guide:</span> {booking.guideName}
//             </p>
//             <p>
//               <span className="font-medium">Price:</span> ${booking.price}
//             </p>
//             <div className="mt-3 flex gap-3 items-center">
//               <span className="text-sm px-3 py-1 rounded-full bg-indigo-600 text-white">
//                 {booking.status === "pending" ? (
//                   <>
//                     <MdPending className="inline-block mr-1 text-yellow-300" />
//                     Pending
//                   </>
//                 ) : (
//                   <>
//                     <FaCheckCircle className="inline-block mr-1 text-green-400" />
//                     Confirmed
//                   </>
//                 )}
//               </span>
//               <span className="text-sm px-3 py-1 rounded-full bg-gray-800 text-white border border-indigo-500">
//                 Payment:{" "}
//                 {booking.paymentStatus === "paid" ? (
//                   <span className="text-green-400">Paid</span>
//                 ) : (
//                   <span className="text-red-400">Unpaid</span>
//                 )}
//               </span>
//             </div>
//             {booking.status === "pending" && (
//               <div className="mt-4 text-right">
//                 <Link
//                   to={`/confirm-booking/${booking._id}`}
//                   className="btn btn-sm bg-indigo-700 text-white hover:bg-indigo-500 rounded-md glow-border"
//                 >
//                   Confirm Now
//                 </Link>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default MyBookings;
