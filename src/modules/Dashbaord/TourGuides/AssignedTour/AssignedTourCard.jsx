const AssignedTourCard = ({ booking }) => {
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

export default AssignedTourCard;
