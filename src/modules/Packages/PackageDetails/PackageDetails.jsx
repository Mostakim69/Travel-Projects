import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { axiosInstance } from "../../../hooks/useAxiosSecure";
import useUserRole from "../../../hooks/useUserRole";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userData } = useUserRole();

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
    if (!userData) {
      Swal.fire({
        icon: "warning",
        title: "Please login first to book a tour.",
      });
      return;
    }

    const bookingPayload = {
      ...data,
      packageId: id,
      touristName: userData.name,
      touristEmail: userData.email,
      touristPhoto: userData.photoURL,
      status: "pending",
    };

    try {
      console.log(bookingPayload);
      // const res = await axiosInstance.post("/bookings", bookingPayload);
      // if (res.data.success) {
      //   Swal.fire({
      //     icon: "success",
      //     title: "Booking successful!",
      //     text: "Check your booking status on My Bookings page.",
      //   });
      //   reset();
      //   navigate("/my-bookings");
      // }
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
          className={`btn ${guideMode === "dropdown" ? "btn-primary" : "btn-outline"} rounded-full`}
        >
          Select Guide
        </button>
        <button
          onClick={() => setGuideMode("list")}
          className={`btn ${guideMode === "list" ? "btn-primary" : "btn-outline"} rounded-full`}
        >
          See Guide List
        </button>
      </div>

      {/* Guide Dropdown OR List */}
      {guideMode === "list" ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {tourGuides.map((guide) => (
            <div
              key={guide._id}
              className="p-4 bg-[#0f172a] border border-purple-700 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/guides/${guide._id}`)}
            >
              <h4 className="text-lg font-semibold">{guide.user.name}</h4>
              <p className="text-sm text-gray-400">{guide.user.email}</p>
            </div>
          ))}
        </div>
      ) : null}

      {/* Booking Form */}
      <div className="bg-[#0f172a] rounded-lg p-6 md:p-10 border border-purple-700 shadow-lg shadow-purple-900 text-gray-100">
        <h3 className="text-2xl font-bold mb-6 text-purple-400">
          📝 Book This Tour
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
          {/* Package Name */}
          <div>
            <label className="label-text text-sm text-purple-300 mb-1 block">
              Package Name
            </label>
            <input
              type="text"
              readOnly
              className="input input-bordered w-full bg-[#1e293b] text-white placeholder-gray-500"
              placeholder="Package Name"
              value={title}
              {...register("packageName")}
            />
          </div>

          {/* Tourist Info */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="label-text text-sm text-purple-300 mb-1 block">
                Your Name
              </label>
              <input
                type="text"
                readOnly
                className="input input-bordered w-full bg-[#1e293b] text-white placeholder-gray-500"
                placeholder="Your Name"
                value={userData?.name || ""}
              />
            </div>
            <div>
              <label className="label-text text-sm text-purple-300 mb-1 block">
                Your Email
              </label>
              <input
                type="email"
                readOnly
                className="input input-bordered w-full bg-[#1e293b] text-white placeholder-gray-500"
                placeholder="Your Email"
                value={userData?.email || ""}
              />
            </div>
            <div>
              <label className="label-text text-sm text-purple-300 mb-1 block">
                Your Photo URL
              </label>
              <input
                type="text"
                readOnly
                className="input input-bordered w-full bg-[#1e293b] text-white placeholder-gray-500"
                placeholder="Your Photo URL"
                value={userData?.photoURL || ""}
              />
            </div>
          </div>

          {/* Price */}
          <div>
            <label className="label-text text-sm text-purple-300 mb-1 block">
              Price (৳)
            </label>
            <input
              type="number"
              className="input input-bordered w-full bg-[#1e293b] text-white"
              defaultValue={price}
              {...register("price", { required: true, min: 0 })}
              readOnly
            />
            {errors.price && (
              <p className="text-red-400 text-sm mt-1">Valid price required</p>
            )}
          </div>

          {/* Tour Date */}
          <div>
            <label className="label-text text-sm text-purple-300 mb-1 block">
              Tour Date
            </label>
            <input
              type="date"
              className="input input-bordered w-full bg-[#1e293b] text-white"
              {...register("tourDate", { required: true })}
            />
            {errors.tourDate && (
              <p className="text-red-400 text-sm mt-1">Please select a date</p>
            )}
          </div>

          {/* Guide Dropdown */}
          {guideMode === "dropdown" && (
            <div>
              <label className="label-text text-sm text-purple-300 mb-1 block">
                Select a Tour Guide
              </label>
              <select
                className="select select-bordered w-full bg-[#1e293b] text-white"
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

          {/* Submit */}
          <button
            className="btn btn-accent mt-4 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 glow-pulse rounded-full"
            type="submit"
          >
            🚀 Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
