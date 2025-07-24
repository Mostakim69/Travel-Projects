import useUserRole from "../../../hooks/useUserRole";

const MyBookings = () => {
  const { userData } = useUserRole();
  console.log(userData, "MyBookings.jsx", 5);
  return (
    <div>
      <h1>My Bookings</h1>
    </div>
  );
};

export default MyBookings;
