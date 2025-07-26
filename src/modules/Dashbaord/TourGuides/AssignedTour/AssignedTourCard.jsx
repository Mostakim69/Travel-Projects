import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      data-aos="fade-up"
      className="bg-gradient-to-br from-indigo-950 to-purple-900 bg-opacity-80 rounded-2xl p-6 shadow-xl border border-indigo-700 
                 transition-all duration-300 hover:shadow-purple-600 min-h-[330px] flex flex-col justify-between"
    >
      {/* Tourist Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={touristPhoto}
          alt={touristName}
          className="w-16 h-16 rounded-full ring-2 ring-indigo-500 shadow-md"
        />
        <div>
          <h2 className="text-lg font-semibold text-white">{touristName}</h2>
          <p className="text-sm text-gray-400">{touristEmail}</p>
        </div>
      </div>

      {/* Booking Details */}
      <div className="text-sm space-y-2 text-gray-300">
        <p>
          <span className="text-purple-300 font-medium">📦 Package:</span>{" "}
          {packageName}
        </p>
        <p>
          <span className="text-purple-300 font-medium">💰 Price:</span> ৳
          {price}
        </p>
        <p>
          <span className="text-purple-300 font-medium">📅 Tour Date:</span>{" "}
          {formattedDate}
        </p>
      </div>

      {/* Status Badges */}
      <div className="mt-4 flex justify-between items-center">
        <span
          className={`badge border-none ${
            status === "accepted"
              ? "bg-green-600 text-white"
              : status === "rejected"
                ? "bg-red-700 text-white"
                : "bg-gray-800 text-purple-300"
          }`}
        >
          {status}
        </span>
        <span
          className={`badge border-none ${
            paymentStatus === "paid"
              ? "bg-blue-600 text-white"
              : "bg-yellow-700 text-white"
          }`}
        >
          {paymentStatus}
        </span>
      </div>

      {/* Action Buttons or Placeholder */}
      <div className="mt-6">
        {status === "in-review" ? (
          <div className="flex justify-end gap-4 *:rounded-full">
            <button
              onClick={() => handleAction(booking._id, "accepted")}
              className="btn btn-sm bg-green-600 text-white hover:shadow-green-400 hover:brightness-110 transition duration-200"
            >
              Accept
            </button>
            <button
              onClick={() => handleAction(booking._id, "rejected")}
              className="btn btn-sm bg-red-700 text-white hover:shadow-red-400 hover:brightness-110 transition duration-200"
            >
              Reject
            </button>
          </div>
        ) : (
          // Reserve space to maintain height
          <div className="h-10"></div>
        )}
      </div>
    </motion.div>
  );
};

export default AssignedTourCard;

/* const AssignedTourCard = ({ booking, handleAction }) => {
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
        <div className="flex justify-end gap-4 mt-4 *:rounded-full">
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

export default AssignedTourCard; */
