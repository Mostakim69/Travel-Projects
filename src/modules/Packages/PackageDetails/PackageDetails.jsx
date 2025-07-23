import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { axiosInstance } from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth(); // assumes user = { displayName, email, photoURL }

  const [guideMode, setGuideMode] = useState("dropdown"); // or 'list'

  const { data: packageData, isLoading: isPackageLoading } = useQuery({
    queryKey: ["package", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/packages/${id}`);
      return res.data.data;
    },
  });

  const { data: tourGuides, isLoading: isGuidesLoading } = useQuery({
    queryKey: ["acceptedGuides"],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/tour-guide-requests/random-accepted?limit=all`,
      );
      return res.data.data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Please login first to book a tour.",
      });
      return;
    }

    const bookingPayload = {
      ...data,
      packageId: id,
      touristName: user.displayName,
      touristEmail: user.email,
      touristPhoto: user.photoURL,
      status: "pending",
    };

    try {
      const res = await axiosInstance.post("/bookings", bookingPayload);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Booking successful!",
          text: "Check your booking status on My Bookings page.",
        });
        reset();
        navigate("/my-bookings");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: err.response?.data?.message || "Failed to book tour",
      });
    }
  };

  if (isPackageLoading || isGuidesLoading)
    return <div className="text-center py-10 text-white">Loading...</div>;

  const {
    title,
    description,
    price,
    days,
    tripType,
    location,
    gallery,
    tourPlan,
  } = packageData;

  return (
    <div className="text-white px-4 md:px-10 py-10 space-y-12 animate-fade-in">
      {/* Gallery Section */}
      <div className="grid md:grid-cols-3 gap-4">
        {gallery.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Tour Gallery"
            className="rounded-lg border border-gray-800 shadow-md hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>

      {/* About Section */}
      <div className="space-y-2">
        <h2 className="text-4xl font-bold glow-pulse">{title}</h2>
        <p className="text-lg text-gray-300">{description}</p>
        <div className="text-sm text-gray-400">
          Location: {location} | Days: {days} | Type: {tripType}
        </div>
      </div>

      {/* Tour Plan */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">🗓️ Tour Plan</h3>
        <div className="space-y-3">
          {tourPlan.map((plan, i) => (
            <div
              key={i}
              className="p-4 bg-[#111827] border-l-4 border-purple-500 rounded-md hover:shadow-purple-md transition-all"
            >
              <h4 className="font-semibold text-lg">Day {plan.day}</h4>
              <p className="text-gray-300">{plan.activities}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guide Mode Toggle */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setGuideMode("dropdown")}
          className={`btn ${guideMode === "dropdown" ? "btn-primary" : "btn-outline"}`}
        >
          Guide Dropdown
        </button>
        <button
          onClick={() => setGuideMode("list")}
          className={`btn ${guideMode === "list" ? "btn-primary" : "btn-outline"}`}
        >
          Guide List
        </button>
      </div>

      {/* Guide Dropdown OR List */}
      {guideMode === "list" ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {tourGuides.map((guide) => (
            <div
              key={guide._id}
              className="p-4 bg-[#0f172a] border border-purple-700 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/tour-guides/${guide._id}`)}
            >
              <h4 className="text-lg font-semibold">{guide.user.name}</h4>
              <p className="text-sm text-gray-400">{guide.user.email}</p>
            </div>
          ))}
        </div>
      ) : null}

      {/* Booking Form */}
      <div className="bg-[#111827] rounded-lg p-6 md:p-10 border border-purple-600 shadow-inner shadow-purple-800">
        <h3 className="text-2xl font-bold mb-6">📝 Book This Tour</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          {/* Package Name */}
          <div>
            <label className="label-text">Package Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={title}
              disabled
              {...register("packageName")}
            />
          </div>

          {/* Tourist Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="label-text">Your Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={user?.displayName}
                disabled
              />
            </div>
            <div>
              <label className="label-text">Your Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={user?.email}
                disabled
              />
            </div>
            <div>
              <label className="label-text">Your Photo URL</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={user?.photoURL}
                disabled
              />
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="label-text">Price</label>
            <input
              type="number"
              className="input input-bordered w-full"
              defaultValue={price}
              {...register("price", { required: true, min: 0 })}
            />
            {errors.price && (
              <p className="text-red-400 text-sm mt-1">Valid price required</p>
            )}
          </div>

          {/* Tour Date */}
          <div>
            <label className="label-text">Tour Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
              {...register("tourDate", { required: true })}
            />
            {errors.tourDate && (
              <p className="text-red-400 text-sm mt-1">Please select a date</p>
            )}
          </div>

          {/* Guide Dropdown */}
          {guideMode === "dropdown" && (
            <div>
              <label className="label-text">Select a Tour Guide</label>
              <select
                className="select select-bordered w-full"
                {...register("guideId", { required: true })}
              >
                <option value="">Choose a guide</option>
                {tourGuides.map((guide) => (
                  <option key={guide._id} value={guide._id}>
                    {guide.user.name} ({guide.user.email})
                  </option>
                ))}
              </select>
              {errors.guideId && (
                <p className="text-red-400 text-sm mt-1">
                  Please select a guide
                </p>
              )}
            </div>
          )}

          <button className="btn btn-accent mt-4 glow-pulse" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;

// import { useParams, useNavigate } from "react-router";
// import { useQuery } from "@tanstack/react-query";
// import { FaCalendarAlt } from "react-icons/fa";
// import { toast } from "react-hot-toast";
// import { axiosInstance } from "../../../hooks/useAxiosSecure";
// import useAuth from "../../../hooks/useAuth";
//
// export default function PackageDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user } = useAuth();
//
//   // Get package details
//   const { data: packageData, isLoading: loadingPackage } = useQuery({
//     queryKey: ["package", id],
//     queryFn: async () => {
//       const res = await axiosInstance.get(`/packages/${id}`);
//       return res.data.data;
//     },
//   });
//
//   // Get accepted tour guides
//   const { data: guides = [] } = useQuery({
//     queryKey: ["accepted-guides"],
//     queryFn: async () => {
//       const res = await axiosInstance.get(
//         "/tour-guide-requests/random-accepted?limit=all",
//       );
//       return res.data.data;
//     },
//   });
//
//   const handleBooking = async (e) => {
//     e.preventDefault();
//     if (!user) return navigate("/login");
//
//     const form = e.target;
//     const price = form.price.value;
//     const date = form.date.value;
//     const guideId = form.guideId.value;
//
//     const bookingData = {
//       packageId: id,
//       packageName: packageData.title,
//       touristName: user.displayName,
//       touristEmail: user.email,
//       touristPhoto: user.photoURL,
//       price,
//       tourDate: date,
//       guideId,
//       status: "pending",
//     };
//
//     try {
//       await axiosInstance.post("/bookings", bookingData);
//       toast.success("Booking request sent!");
//     } catch (err) {
//       toast.error("Failed to book tour");
//     }
//   };
//
//   if (loadingPackage)
//     return <div className="text-center text-white">Loading...</div>;
//
//   return (
//     <section className="text-white px-4 md:px-10 py-12 space-y-12">
//       {/* Gallery */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
//         {packageData.gallery.map((img, idx) => (
//           <div
//             key={idx}
//             className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-cyan-600 shadow-glow"
//           >
//             <img
//               src={img}
//               alt={`Tour ${idx}`}
//               className="w-full h-64 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//
//       {/* About Section */}
//       <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-cyan-700 animate-fadeInUp">
//         <h2 className="text-3xl font-bold text-cyan-400 mb-4">
//           {packageData.title}
//         </h2>
//         <p className="mb-2 text-gray-300">{packageData.description}</p>
//         <p className="text-cyan-300 font-semibold">
//           Trip Type: {packageData.tripType}
//         </p>
//         <p className="text-cyan-300 font-semibold">
//           Location: {packageData.location}
//         </p>
//         <p className="text-cyan-300 font-semibold">
//           Duration: {packageData.days} Days
//         </p>
//         <p className="text-cyan-300 font-semibold">
//           Price: ৳ {packageData.price}
//         </p>
//       </div>
//
//       {/* Tour Plan */}
//       <div className="space-y-6">
//         <h3 className="text-2xl font-bold text-cyan-400">🗓️ Tour Plan</h3>
//         {packageData.tourPlan.map((plan) => (
//           <div
//             key={plan.day}
//             className="bg-gray-900 p-6 rounded-xl border border-cyan-800 hover:shadow-pulse transition-all duration-300"
//           >
//             <h4 className="text-cyan-300 font-semibold">Day {plan.day}</h4>
//             <p className="text-gray-300">{plan.activities}</p>
//           </div>
//         ))}
//       </div>
//
//       {/* Booking Form */}
//       <form
//         onSubmit={handleBooking}
//         className="bg-gray-950 border border-cyan-800 p-8 rounded-xl space-y-6 shadow-inner animate-fadeInUp"
//       >
//         <h3 className="text-2xl font-bold text-cyan-400">📅 Book This Tour</h3>
//
//         <div className="grid md:grid-cols-2 gap-6">
//           <input
//             className="input input-bordered bg-black border-cyan-600 text-white"
//             defaultValue={packageData.title}
//             readOnly
//           />
//           <input
//             className="input input-bordered bg-black border-cyan-600 text-white"
//             defaultValue={user?.displayName}
//             readOnly
//           />
//           <input
//             className="input input-bordered bg-black border-cyan-600 text-white"
//             defaultValue={user?.email}
//             readOnly
//           />
//           <input
//             className="input input-bordered bg-black border-cyan-600 text-white"
//             defaultValue={user?.photoURL}
//             readOnly
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Enter Price"
//             required
//             className="input input-bordered bg-black border-cyan-600 text-white"
//           />
//           <div className="flex items-center gap-2">
//             <FaCalendarAlt className="text-cyan-400" />
//             <input
//               type="date"
//               name="date"
//               required
//               className="input input-bordered bg-black border-cyan-600 text-white w-full"
//             />
//           </div>
//
//           {/* Guide Dropdown */}
//           <select
//             required
//             name="guideId"
//             className="select select-bordered bg-black border-cyan-600 text-white w-full"
//             defaultValue=""
//           >
//             <option disabled value="">
//               Select a Tour Guide
//             </option>
//             {guides.map((guide) => (
//               <option
//                 key={guide._id}
//                 value={guide._id}
//                 onClick={() => navigate(`/guide-profile/${guide._id}`)}
//               >
//                 {guide.user?.name} ({guide.user?.email})
//               </option>
//             ))}
//           </select>
//         </div>
//
//         <div className="text-right">
//           <button
//             type="submit"
//             className="btn btn-accent btn-wide mt-4 animate-pulse hover:scale-105 transition"
//           >
//             Book Now
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }
