import useSecureQuery from "../../../../hooks/useSecureQuery";
import AssignedTourCard from "./AssignedTourCard";

const AssignedTour = () => {
  const { data, isLoading, error } = useSecureQuery(
    ["guideBookings", "687cff8d095a1d459861b897"],
    "/bookings/guide/687cff8d095a1d459861b897",
  );

  if (isLoading)
    return <p className="text-center text-lg text-accent">Loading tours...</p>;
  if (error)
    return <p className="text-center text-red-400">Failed to load bookings.</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
        Assigned Tours
      </h1>

      <div className="grid gap-6 md:grid-cols-2 ">
        {data?.data?.map((booking) => (
          <AssignedTourCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default AssignedTour;
