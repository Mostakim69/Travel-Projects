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

  const showActions = booking.status === "in-review";

  return (
    <motion.div
      data-aos="zoom-in"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="relative bg-gradient-to-br from-[#240032] via-[#1b012c] to-[#12001f] border border-fuchsia-800/30 rounded-xl p-5 shadow-xl backdrop-blur-md text-white overflow-hidden hover:shadow-fuchsia-600 transition-all duration-300 group"
    >
      {/* Glow border ring */}
      <div className="absolute -inset-[1px] rounded-xl z-0 bg-gradient-to-r from-fuchsia-700 via-indigo-700 to-purple-700 opacity-20 blur-xl animate-pulse group-hover:opacity-40 transition-all"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={touristPhoto}
            alt={touristName}
            className="w-14 h-14 rounded-full ring-2 ring-fuchsia-500 shadow-md animate-glow"
          />
          <div>
            <h2 className="text-lg font-semibold text-white">{touristName}</h2>
            <p className="text-sm text-gray-400">{touristEmail}</p>
          </div>
        </div>

        <div className="text-sm space-y-1 text-gray-300">
          <p>
            <span className="text-fuchsia-400 font-semibold">🎒 Package:</span>{" "}
            {packageName}
          </p>
          <p>
            <span className="text-fuchsia-400 font-semibold">💸 Price:</span> ৳
            {price}
          </p>
          <p>
            <span className="text-fuchsia-400 font-semibold">📅 Date:</span>{" "}
            {formattedDate}
          </p>
        </div>

        {/* Statuses */}
        <div className="mt-4 flex justify-between items-center text-xs">
          <span
            className={`badge text-white px-3 py-1 rounded-full ${
              status === "accepted"
                ? "bg-green-600"
                : status === "rejected"
                  ? "bg-red-600"
                  : "bg-gray-600"
            }`}
          >
            {status}
          </span>
          <span
            className={`badge text-white px-3 py-1 rounded-full ${
              paymentStatus === "paid"
                ? "bg-sky-600"
                : "bg-yellow-700 border border-yellow-500"
            }`}
          >
            {paymentStatus}
          </span>
        </div>

        {/* Accept / Reject Actions (Always Reserve Space for Height Consistency) */}
        <div className="mt-4 min-h-[40px] flex justify-end gap-4 *:rounded-full transition-all">
          {showActions ? (
            <>
              <button
                onClick={() => handleAction(booking._id, "accepted")}
                className="btn btn-sm btn-success hover:brightness-110 transition duration-200"
              >
                Accept
              </button>
              <button
                onClick={() => handleAction(booking._id, "rejected")}
                className="btn btn-sm btn-error hover:brightness-110 transition duration-200"
              >
                Reject
              </button>
            </>
          ) : (
            // Empty div with fixed height to keep card height consistent
            <div className="h-[2.25rem] w-full" />
          )}
        </div>
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
