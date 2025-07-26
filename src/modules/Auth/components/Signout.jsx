import useAuth from "../../../hooks/useAuth";
import { darkSwal } from "../../../hooks/usePostData";

const Signout = ({ children }) => {
  const { signoutUser } = useAuth();

  const handleSignout = async () => {
    await signoutUser();
    darkSwal.fire({
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
