import { useState, useEffect } from "react";
import useSecureQuery from "../../../../hooks/useSecureQuery";
import useSecureUpdate from "../../../../hooks/useSecureUpdate";
import AssignedTourCard from "./AssignedTourCard";
import { darkSwal } from "../../../../hooks/usePostData";

const AssignedTour = () => {
  const { data, isLoading, error, refetch } = useSecureQuery(
    ["guideBookings", "687cff8d095a1d459861b897"],
    "/bookings/guide/687cff8d095a1d459861b897",
  );

  // 🧠 Keep track of which booking to update
  const [bookingIdToUpdate, setBookingIdToUpdate] = useState(null);
  const [statusToUpdate, setStatusToUpdate] = useState(null);

  // ✅ Always keep hook at top level
  const {
    mutateAsync: patchBooking,
    isPending,
    isSuccess,
    isError,
    error: patchError,
  } = useSecureUpdate(
    bookingIdToUpdate ? `/bookings/${bookingIdToUpdate}` : "/bookings/empty",
  );

  // ✅ Watch for update trigger
  useEffect(() => {
    const update = async () => {
      if (!bookingIdToUpdate || !statusToUpdate) return;
      try {
        const res = await patchBooking({ status: statusToUpdate });
        if (res?.success) {
          darkSwal.fire("Success", `Booking ${statusToUpdate}`, "success");
          refetch();
        }
      } catch (err) {
        darkSwal.fire("Error", patchError?.message || "Failed", "error");
      } finally {
        setBookingIdToUpdate(null);
        setStatusToUpdate(null);
      }
    };
    update();
  }, [bookingIdToUpdate, statusToUpdate]);

  // ✅ Called from card/button
  const handleAction = (bookingId, status) => {
    setBookingIdToUpdate(bookingId);
    setStatusToUpdate(status);
  };

  if (isLoading)
    return (
      <p className="text-center text-lg text-accent animate-pulse">
        Loading tours...
      </p>
    );

  if (error)
    return <p className="text-center text-red-400">Failed to load bookings.</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
        Assigned Tours
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {data?.data?.map((booking) => (
          <div
            key={booking._id}
            className="rounded-xl shadow-md border border-gray-700 bg-base-200 bg-opacity-80 p-4 backdrop-blur-md hover:shadow-xl transition duration-300 ease-in-out"
          >
            <AssignedTourCard
              booking={booking}
              handleAction={handleAction}
              isPending={isPending && booking._id === bookingIdToUpdate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedTour;

// AssignedTour.jsx
/* import useSecureQuery from "../../../../hooks/useSecureQuery";
import useSecureUpdate from "../../../../hooks/useSecureUpdate";
import AssignedTourCard from "./AssignedTourCard";
import { darkSwal } from "../../../../hooks/usePostData";

const AssignedTour = () => {
  const { data, isLoading, error, refetch } = useSecureQuery(
    ["guideBookings", "687cff8d095a1d459861b897"],
    "/bookings/guide/687cff8d095a1d459861b897",
  );

  const handleAction = async (bookingId, status) => {
    try {
      const res = await useSecureUpdate(`/bookings/${bookingId}`, { status });
      if (res?.data?.success) {
        darkSwal.fire("Success", `Booking ${status}`, "success");
        refetch();
      }
    } catch (err) {
      darkSwal.fire("Error", err.message, "error");
    }
  };

  if (isLoading)
    return (
      <p className="text-center text-lg text-accent animate-pulse">
        Loading tours...
      </p>
    );

  if (error)
    return <p className="text-center text-red-400">Failed to load bookings.</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-md">
        Assigned Tours
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {data?.data?.map((booking) => (
          <div
            key={booking._id}
            className="rounded-xl shadow-lg border border-gray-700 bg-base-200 bg-opacity-80 p-4 backdrop-blur-md hover:shadow-xl transition duration-300 ease-in-out"
          >
            <AssignedTourCard booking={booking} handelAction={handleAction} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedTour; */
