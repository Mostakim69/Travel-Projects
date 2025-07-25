import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MySwal = withReactContent(Swal);

const ManageProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const [editData, setEditData] = useState({});
  const [profileComplete, setProfileComplete] = useState(0);

  const {
    data: userInfo = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["userInfo", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/email/tourist4@example.com`);
      return res.data;
    },
  });

  useEffect(() => {
    if (userInfo) {
      const totalFields = ["name", "photo", "phone", "bio"];
      const filled = totalFields.filter((field) => !!userInfo[field]);
      const completeness = Math.round(
        (filled.length / totalFields.length) * 100,
      );
      setProfileComplete(completeness);
    }
  }, [userInfo]);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      name: form.name.value,
      phone: form.phone.value,
      bio: form.bio.value,
      photo: form.photo.value,
    };

    try {
      const res = await axiosSecure.patch(
        `/users/email/${user?.email}`,
        updated,
      );
      if (res.data.modifiedCount > 0) {
        MySwal.fire("Updated!", "Your profile has been updated.", "success");
        refetch();
        document.getElementById("edit_modal").close();
      }
    } catch (err) {
      MySwal.fire("Error", "Something went wrong!", "error");
    }
  };

  if (isLoading)
    return <p className="text-center text-gray-400">Loading profile...</p>;

  return (
    <div
      className="p-6 bg-gray-900 text-gray-200 rounded-lg shadow-xl"
      data-aos="fade-up"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-indigo-400 glow-text">
          Welcome, {userInfo?.name || "Traveler"}!
        </h2>

        <div className="flex items-center gap-6">
          <img
            src={userInfo?.photo || "/default-avatar.png"}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md hover:shadow-xl pulse-glow"
          />
          <div className="space-y-1">
            <p>
              <strong>Name:</strong> {userInfo?.name || "N/A"}
            </p>
            <p>
              <strong>Role:</strong> {userInfo?.role || "Tourist"}
            </p>
            <p>
              <strong>Phone:</strong> {userInfo?.phone || "N/A"}
            </p>
            <p>
              <strong>Bio:</strong> {userInfo?.bio || "N/A"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div
            className="bg-gray-800 p-4 rounded shadow hover:shadow-indigo-500 transition-all duration-300"
            data-aos="fade-right"
          >
            🕓 <strong>Account Created:</strong>{" "}
            {new Date(userInfo?.createdAt).toLocaleDateString()}
          </div>
          <div
            className="bg-gray-800 p-4 rounded shadow hover:shadow-indigo-500"
            data-aos="fade-left"
          >
            🕘 <strong>Last Logged In:</strong>{" "}
            {new Date(userInfo?.last_loggedIn).toLocaleString()}
          </div>
          <div
            className="bg-gray-800 p-4 rounded shadow hover:shadow-indigo-500"
            data-aos="fade-up"
          >
            🔐 <strong>Account Role:</strong> {userInfo?.role || "Tourist"}
          </div>
          <div
            className="bg-gray-800 p-4 rounded shadow hover:shadow-indigo-500"
            data-aos="fade-up"
          >
            👥 <strong>Profile Completeness:</strong> {profileComplete}%
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <button
            className="btn btn-outline btn-info pulse-glow"
            onClick={() => document.getElementById("edit_modal").showModal()}
          >
            ✏️ Edit Profile
          </button>

          <Link
            to="/dashboard/join-tour-guide"
            className="btn btn-primary pulse-glow"
          >
            🌍 Join as Tour Guide
          </Link>

          <button className="btn btn-ghost border border-indigo-700 text-indigo-400 hover:bg-indigo-800 transition">
            📝 View Edit History <span className="text-xs">(Coming soon)</span>
          </button>
        </div>
      </motion.div>

      {/* DaisyUI Modal */}
      <dialog id="edit_modal" className="modal">
        <div className="modal-box bg-gray-900 text-white">
          <h3 className="font-bold text-lg mb-4 text-indigo-400">
            Update Profile
          </h3>
          <form onSubmit={handleEditSubmit} className="space-y-3">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              defaultValue={userInfo?.name}
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              defaultValue={userInfo?.phone}
              className="input input-bordered w-full"
            />
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              defaultValue={userInfo?.photo}
              className="input input-bordered w-full"
            />
            <textarea
              name="bio"
              placeholder="Short Bio"
              defaultValue={userInfo?.bio}
              className="textarea textarea-bordered w-full"
            />
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("edit_modal").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageProfile;

// import { useQuery } from "@tanstack/react-query";
// import { motion } from "framer-motion";
// import useAuth from "../../../hooks/useAuth";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";
// import "dayjs/locale/en"; // or 'bn' for Bangla
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import Spinner from "../../shared/Layout/Spinner";
// dayjs.extend(relativeTime);
//
// const ManageProfile = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//
//   const { data: userInfo = {}, isPending } = useQuery({
//     queryKey: ["manage-profile", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/email/tourist4@example.com`);
//       return res.data?.data;
//     },
//     enabled: !!user?.email,
//   });
//
//   if (isPending)
//     return (
//       <div className="text-center text-lg mt-10">
//         <Spinner />
//       </div>
//     );
//
//   const { name, email, photoURL, role, createdAt, last_loggedIn } =
//     userInfo || {};
//
//   // Profile completeness score (sample logic)
//   const completeness =
//     ([name, email, photoURL].filter(Boolean).length / 3) * 100;
//
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#0c0f1f] to-[#12172c] text-white"
//       data-aos="fade-up"
//     >
//       <div className="flex flex-col md:flex-row items-center gap-6">
//         <img
//           src={photoURL || "https://i.ibb.co/ZVP2y7v/user.png"}
//           alt="profile"
//           className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-md shadow-cyan-700"
//           data-aos="zoom-in"
//         />
//         <div className="flex-1 space-y-2">
//           <h2 className="text-2xl font-bold text-cyan-400">
//             {name || "No Name"}
//           </h2>
//           <p className="text-gray-300">
//             📧 <span className="font-mono">{email}</span>
//           </p>
//           <p className="text-gray-400">
//             🔐 Role: <span className="text-cyan-300 font-semibold">{role}</span>
//           </p>
//           <p className="text-gray-400">
//             🕓 Account Created:{" "}
//             <span className="text-green-400">
//               {dayjs(createdAt).format("MMMM D, YYYY")} (
//               {dayjs(createdAt).fromNow()})
//             </span>
//           </p>
//           <p className="text-gray-400">
//             🕘 Last Logged In:{" "}
//             <span className="text-yellow-300">
//               {dayjs(last_loggedIn).format("MMMM D, YYYY h:mm A")} (
//               {dayjs(last_loggedIn).fromNow()})
//             </span>
//           </p>
//           <p className="text-gray-400">
//             👥 Profile Completeness:{" "}
//             <span
//               className={`font-bold ${
//                 completeness >= 100
//                   ? "text-green-400"
//                   : completeness >= 60
//                     ? "text-yellow-400"
//                     : "text-red-400"
//               }`}
//             >
//               {Math.round(completeness)}%
//             </span>
//           </p>
//         </div>
//       </div>
//
//       {/* Optional: Action Buttons */}
//       <div
//         className="mt-8 flex flex-col md:flex-row items-center gap-4"
//         data-aos="fade-up"
//       >
//         <button className="btn btn-outline btn-block md:btn-wide border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-cyan-500/50 pulse-glow">
//           ✏️ Update Profile
//         </button>
//         <button className="btn btn-outline btn-block md:btn-wide border-red-500 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-red-500/50 pulse-glow">
//           🔒 View Login History
//         </button>
//       </div>
//     </motion.div>
//   );
// };
//
// export default ManageProfile;
