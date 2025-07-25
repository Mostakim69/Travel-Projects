import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en"; // or 'bn' for Bangla
import useAxiosSecure from "../../../hooks/useAxiosSecure";
dayjs.extend(relativeTime);

const ManageProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userInfo = {}, isPending } = useQuery({
    queryKey: ["manage-profile", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/email/${user?.email}`);
      return res.data?.data;
    },
    enabled: !!user?.email,
  });

  if (isPending)
    return <div className="text-center text-lg mt-10">Loading...</div>;

  const { name, email, photoURL, role, createdAt, last_loggedIn } =
    userInfo || {};

  // Profile completeness score (sample logic)
  const completeness =
    ([name, email, photoURL].filter(Boolean).length / 3) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg bg-gradient-to-br from-[#0c0f1f] to-[#12172c] text-white"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={photoURL || "https://i.ibb.co/ZVP2y7v/user.png"}
          alt="profile"
          className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-md shadow-cyan-700"
          data-aos="zoom-in"
        />
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-cyan-400">
            {name || "No Name"}
          </h2>
          <p className="text-gray-300">
            📧 <span className="font-mono">{email}</span>
          </p>
          <p className="text-gray-400">
            🔐 Role: <span className="text-cyan-300 font-semibold">{role}</span>
          </p>
          <p className="text-gray-400">
            🕓 Account Created:{" "}
            <span className="text-green-400">
              {dayjs(createdAt).format("MMMM D, YYYY")} (
              {dayjs(createdAt).fromNow()})
            </span>
          </p>
          <p className="text-gray-400">
            🕘 Last Logged In:{" "}
            <span className="text-yellow-300">
              {dayjs(last_loggedIn).format("MMMM D, YYYY h:mm A")} (
              {dayjs(last_loggedIn).fromNow()})
            </span>
          </p>
          <p className="text-gray-400">
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

      {/* Optional: Action Buttons */}
      <div
        className="mt-8 flex flex-col md:flex-row items-center gap-4"
        data-aos="fade-up"
      >
        <button className="btn btn-outline btn-block md:btn-wide border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-cyan-500/50 pulse-glow">
          ✏️ Update Profile
        </button>
        <button className="btn btn-outline btn-block md:btn-wide border-red-500 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-red-500/50 pulse-glow">
          🔒 View Login History
        </button>
      </div>
    </motion.div>
  );
};

export default ManageProfile;
