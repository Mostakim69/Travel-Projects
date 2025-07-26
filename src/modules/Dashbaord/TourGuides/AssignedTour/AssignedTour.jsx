import useSecureQuery from "../../../../hooks/useSecureQuery";

const AssignedTour = () => {
  const { data, isLoading, error } = useSecureQuery(
    ["guideBookings", "687cff8d095a1d459861b897"], // Unique key
    "/bookings/guide/687cff8d095a1d459861b897", // API endpoint
  );

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Error loading bookings</p>;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {data?.data?.map((booking) => (
        <div
          key={booking._id}
          className="bg-base-200 rounded-lg shadow p-4 space-y-2"
        >
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
      ))}
    </div>
  );
};

export default AssignedTour;
