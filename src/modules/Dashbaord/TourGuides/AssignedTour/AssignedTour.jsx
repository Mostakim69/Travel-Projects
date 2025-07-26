import useSecureQuery from "../../../../hooks/useSecureQuery";
import AssignedTourCard from "./AssignedTourCard";

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
        <AssignedTourCard key={booking._id} booking={booking} />
      ))}
    </div>
  );
};

export default AssignedTour;
