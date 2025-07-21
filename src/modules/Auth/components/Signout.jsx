import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Signout = ({ children }) => {
  const { signoutUser } = useAuth();

  const handleSignout = async () => {
    await signoutUser();
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Sign out Success!",
      text: "You have successfully signed out",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <div onClick={handleSignout}>
      {children || <button className="btn">Sign Out</button>}
    </div>
  );
};

export default Signout;
