import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { FaCalendarAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Get package details
  const { data: packageData, isLoading: loadingPackage } = useQuery({
    queryKey: ["package", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/packages/${id}`);
      return res.data.data;
    },
  });

  // Get accepted tour guides
  const { data: guides = [] } = useQuery({
    queryKey: ["accepted-guides"],
    queryFn: async () => {
      const res = await axiosInstance.get(
        "/tour-guide-requests/random-accepted?limit=all",
      );
      return res.data.data;
    },
  });

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!user) return navigate("/login");

    const form = e.target;
    const price = form.price.value;
    const date = form.date.value;
    const guideId = form.guideId.value;

    const bookingData = {
      packageId: id,
      packageName: packageData.title,
      touristName: user.displayName,
      touristEmail: user.email,
      touristPhoto: user.photoURL,
      price,
      tourDate: date,
      guideId,
      status: "pending",
    };

    try {
      await axiosInstance.post("/bookings", bookingData);
      toast.success("Booking request sent!");
    } catch (err) {
      toast.error("Failed to book tour");
    }
  };

  if (loadingPackage)
    return <div className="text-center text-white">Loading...</div>;

  return (
    <section className="text-white px-4 md:px-10 py-12 space-y-12">
      {/* Gallery */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
        {packageData.gallery.map((img, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-cyan-600 shadow-glow"
          >
            <img
              src={img}
              alt={`Tour ${idx}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-cyan-700 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">
          {packageData.title}
        </h2>
        <p className="mb-2 text-gray-300">{packageData.description}</p>
        <p className="text-cyan-300 font-semibold">
          Trip Type: {packageData.tripType}
        </p>
        <p className="text-cyan-300 font-semibold">
          Location: {packageData.location}
        </p>
        <p className="text-cyan-300 font-semibold">
          Duration: {packageData.days} Days
        </p>
        <p className="text-cyan-300 font-semibold">
          Price: ৳ {packageData.price}
        </p>
      </div>

      {/* Tour Plan */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-cyan-400">🗓️ Tour Plan</h3>
        {packageData.tourPlan.map((plan) => (
          <div
            key={plan.day}
            className="bg-gray-900 p-6 rounded-xl border border-cyan-800 hover:shadow-pulse transition-all duration-300"
          >
            <h4 className="text-cyan-300 font-semibold">Day {plan.day}</h4>
            <p className="text-gray-300">{plan.activities}</p>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      <form
        onSubmit={handleBooking}
        className="bg-gray-950 border border-cyan-800 p-8 rounded-xl space-y-6 shadow-inner animate-fadeInUp"
      >
        <h3 className="text-2xl font-bold text-cyan-400">📅 Book This Tour</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <input
            className="input input-bordered bg-black border-cyan-600 text-white"
            defaultValue={packageData.title}
            readOnly
          />
          <input
            className="input input-bordered bg-black border-cyan-600 text-white"
            defaultValue={user?.displayName}
            readOnly
          />
          <input
            className="input input-bordered bg-black border-cyan-600 text-white"
            defaultValue={user?.email}
            readOnly
          />
          <input
            className="input input-bordered bg-black border-cyan-600 text-white"
            defaultValue={user?.photoURL}
            readOnly
          />
          <input
            type="number"
            name="price"
            placeholder="Enter Price"
            required
            className="input input-bordered bg-black border-cyan-600 text-white"
          />
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-cyan-400" />
            <input
              type="date"
              name="date"
              required
              className="input input-bordered bg-black border-cyan-600 text-white w-full"
            />
          </div>

          {/* Guide Dropdown */}
          <select
            required
            name="guideId"
            className="select select-bordered bg-black border-cyan-600 text-white w-full"
            defaultValue=""
          >
            <option disabled value="">
              Select a Tour Guide
            </option>
            {guides.map((guide) => (
              <option
                key={guide._id}
                value={guide._id}
                onClick={() => navigate(`/guide-profile/${guide._id}`)}
              >
                {guide.user?.name} ({guide.user?.email})
              </option>
            ))}
          </select>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="btn btn-accent btn-wide mt-4 animate-pulse hover:scale-105 transition"
          >
            Book Now
          </button>
        </div>
      </form>
    </section>
  );
}
