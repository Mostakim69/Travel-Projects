const AssignedTourCard = ({ booking }) => {
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
    </div>
  );
};

export default AssignedTourCard;

/* const AssignedTourCard = ({ booking }) => {
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

export default AssignedTourCard; */
