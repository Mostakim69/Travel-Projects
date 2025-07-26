import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Spinner from "../../shared/Layout/Spinner";
import { useState } from "react";
import "dayjs/locale/en";
import { Link } from "react-router";
dayjs.extend(relativeTime);

const ManageProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [showModal, setShowModal] = useState(false);

  const { data: userInfo = {}, isPending } = useQuery({
    queryKey: ["manage-profile", user?.email],
    queryFn: async () => {
      // const res = await axiosSecure.get(`/users/email/${user.email}`);
      // const res = await axiosSecure.get(`/users/email/tourist4@example.com`); emaile for tourist
      const res = await axiosSecure.get(`/users/email/4@example.com`); // email for tour guide

      return res.data?.data;
    },
    enabled: !!user?.email,
  });

  if (isPending)
    return (
      <div className="text-center mt-10">
        <Spinner />
      </div>
    );

  const { name, email, photoURL, role, createdAt, last_loggedIn } =
    userInfo || {};

  const completeness =
    ([name, email, photoURL].filter(Boolean).length / 3) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 md:p-10 rounded-xl bg-gradient-to-br from-[#0f1328] to-[#1a1f3b] shadow-xl text-white space-y-6"
      data-aos="fade-up"
    >
      <h1 className="text-xl sm:text-3xl font-bold text-cyan-400 mb-4 text-center">
        👋 Welcome back,{" "}
        <span className="text-white">{name || "Explorer"}</span>
      </h1>

      <div className="flex flex-col md:flex-rw gap-6 items-center">
        <img
          src={photoURL || "https://i.ibb.co/ZVP2y7v/user.png"}
          alt="User"
          className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-cyan-700"
          data-aos="zoom-in"
        />

        <div className="flex-1 space-y-2">
          <p className="text-lg text-cyan-300 font-medium">📧 {email}</p>
          <p className="text-md text-gray-300">
            🔐 Role: <span className="font-semibold text-cyan-400">{role}</span>
          </p>
          <p className="text-md text-gray-400">
            🕓 Account Created:{" "}
            <span className="text-green-400">
              {dayjs(createdAt).format("MMM D, YYYY")} (
              {dayjs(createdAt).fromNow()})
            </span>
          </p>
          <p className="text-md text-gray-400">
            🕘 Last Logged In:{" "}
            <span className="text-yellow-300">
              {dayjs(last_loggedIn).format("MMM D, YYYY h:mm A")} (
              {dayjs(last_loggedIn).fromNow()})
            </span>
          </p>
          <p className="text-md text-gray-400">
            👥 Profile Completeness:{" "}
            <span
              className={`font-bold ${
                completeness >= 100
                  ? "text-green-400"
                  : completeness >= 60
                    ? "text-yellow-400"
                    : "text-red-400"
              }`}
            >
              {Math.round(completeness)}%
            </span>
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div
        className="flex flex-col md:flex-row md:justify-center gap-4 mt-6 *:rounded-full *:max-md:max-w-[300px] max-md:*:mx-auto"
        data-aos="fade-up"
      >
        <button
          className="btn btn-outline btn-block md:btn-wide border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white pulse-glow"
          onClick={() => setShowModal(true)}
        >
          ✏️ Update Profile
        </button>

        {role === "tourist" && (
          <Link
            to="/dashboard/tourist/join-tour-guide"
            className="btn btn-outline btn-block md:btn-wide border-emerald-500 text-emerald-300 hover:bg-emerald-600 hover:text-white pulse-glow"
          >
            ✨ Join as Tour Guide
          </Link>
        )}
      </div>

      {/* DaisyUI Modal */}
      {showModal && (
        <dialog
          id="update_modal"
          className="modal modal-open"
          data-aos="zoom-in"
        >
          <div className="modal-box bg-[#1c233d] text-white border border-cyan-600 shadow-xl">
            <h3 className="font-bold text-lg mb-4">Update Profile Info</h3>
            <form
              method="dialog"
              className="space-y-4"
              // onSubmit={handleUpdateProfile} // future logic
            >
              <input
                type="text"
                defaultValue={name}
                placeholder="Name"
                className="input input-bordered input-md w-full bg-[#0f1328] text-white"
              />
              <input
                type="text"
                defaultValue={photoURL}
                placeholder="Photo URL"
                className="input input-bordered input-md w-full bg-[#0f1328] text-white"
              />
              <div className="modal-action">
                <button
                  className="btn bg-cyan-600 text-white hover:bg-cyan-700"
                  onClick={() => setShowModal(false)}
                >
                  Save
                </button>
                <button
                  className="btn btn-ghost text-gray-300"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </motion.div>
  );
};

export default ManageProfile;
