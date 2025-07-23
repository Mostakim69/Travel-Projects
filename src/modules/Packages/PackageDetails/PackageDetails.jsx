import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function PackageDetails() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [guides, setGuides] = useState([]);
  const [bookingData, setBookingData] = useState({
    price: "",
    tourDate: "",
    guideId: "",
  });

  const user = {
    name: "Shahjalal",
    email: "muhommodshahjalal@gmail.com",
    photo: "https://i.ibb.co/sample.png",
  };

  useEffect(() => {
    axios.get(`/packages/${id}`).then((res) => {
      setPkg(res.data.data);
    });
    axios.get("/tour-guide-requests/random-accepted?limit=all").then((res) => {
      setGuides(res.data.data);
    });
  }, [id]);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login to book");

    const bookingPayload = {
      packageId: id,
      packageName: pkg.title,
      touristName: user.name,
      touristEmail: user.email,
      touristPhoto: user.photo,
      price: bookingData.price,
      tourDate: bookingData.tourDate,
      guideId: bookingData.guideId,
      status: "pending",
    };

    await axios.post("/bookings", bookingPayload);
    alert("✅ Booking submitted. Track it from My Bookings.");
  };

  if (!pkg) return <div className="text-center text-xl p-10">Loading...</div>;

  return (
    <div className="bg-[#0e0e1a] text-white px-4 md:px-10 py-8">
      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {pkg.gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i}`}
            className="rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 border border-slate-800"
          />
        ))}
      </div>

      {/* About Tour */}
      <div className="mb-10">
        <h2 className="text-4xl font-bold glow mb-4">{pkg.title}</h2>
        <p className="text-lg opacity-90 mb-4">{pkg.description}</p>
        <div className="flex flex-wrap gap-4 text-md">
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded shadow">
            <FaMapMarkerAlt />
            {pkg.location}
          </div>
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded shadow">
            <MdOutlineAttachMoney />
            {pkg.price} BDT
          </div>
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded shadow">
            <FaRegCalendarAlt />
            {pkg.days} Days
          </div>
        </div>
      </div>

      {/* Tour Plan */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-3 underline underline-offset-4 decoration-cyan-500">
          Tour Plan
        </h3>
        <div className="space-y-4">
          {pkg.tourPlan.map((plan, idx) => (
            <div
              key={idx}
              className="border-l-4 border-cyan-500 pl-4 py-2 glow-card"
            >
              <h4 className="font-bold text-cyan-400">Day {plan.day}</h4>
              <p>{plan.activities}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Guides */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-3 underline underline-offset-4 decoration-pink-500">
          Available Tour Guides
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <a
              key={guide._id}
              href={`/guides/${guide._id}`}
              className="p-4 bg-slate-900 rounded-lg hover:scale-105 transition shadow-lg border border-slate-700 pulse-card"
            >
              <h4 className="text-lg font-bold text-pink-400">
                {guide.user.name}
              </h4>
              <p className="text-sm opacity-80">{guide.user.email}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="mb-10 bg-slate-900 p-6 rounded-lg border border-slate-700">
        <h3 className="text-xl font-semibold mb-4 text-lime-400">Book Now</h3>
        <form
          onSubmit={handleBooking}
          className="grid md:grid-cols-2 gap-4 animate-fade-in"
        >
          <input
            className="input input-bordered bg-transparent text-white"
            value={pkg.title}
            disabled
          />
          <input
            className="input input-bordered bg-transparent text-white"
            value={user.name}
            disabled
          />
          <input
            className="input input-bordered bg-transparent text-white"
            value={user.email}
            disabled
          />
          <input
            className="input input-bordered bg-transparent text-white"
            value={user.photo}
            disabled
          />
          <input
            type="number"
            placeholder="Enter Price"
            className="input input-bordered bg-transparent text-white"
            onChange={(e) =>
              setBookingData({ ...bookingData, price: e.target.value })
            }
            required
          />
          <input
            type="date"
            className="input input-bordered bg-transparent text-white"
            onChange={(e) =>
              setBookingData({ ...bookingData, tourDate: e.target.value })
            }
            required
          />
          <select
            className="select select-bordered bg-transparent text-white"
            onChange={(e) =>
              setBookingData({ ...bookingData, guideId: e.target.value })
            }
            required
          >
            <option value="">Select Guide</option>
            {guides.map((g) => (
              <option key={g._id} value={g._id}>
                {g.user.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="btn btn-success text-white glow mt-2 col-span-2"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
