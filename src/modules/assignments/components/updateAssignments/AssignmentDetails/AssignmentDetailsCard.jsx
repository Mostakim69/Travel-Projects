import { motion } from "motion/react";
import { Link } from "react-router";
const difficultyColors = {
  easy: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  hard: "bg-red-100 text-red-800",
};
const AssignmentDetailsCard = ({ assignmentDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl hover:shadow-4xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer px-8 py-4"
    >
      {/* Thumbnail */}
      <div className="overflow-hidden rounded-2xl shadow-lg mb-6">
        <img
          src={assignmentDetails?.thumbnailUrl}
          alt={assignmentDetails?.title}
          className="w-full h-[400px] object-cover max-sm:h-64 transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl max-sm:text-3xl font-semibold mb-4 tracking-tight text-gray-500 drop-shadow-sm">
        {assignmentDetails?.title}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-700 max-sm:text-sm mb-6 leading-relaxed font-sans tracking-wide">
        {assignmentDetails?.description}
      </p>

      {/* Info Section */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="badge badge-primary px-4 py-3 text-lg font-semibold shadow-md cursor-default select-none">
          Marks: <span className="ml-2">{assignmentDetails?.marks}</span>
        </div>

        <div
          className={`badge px-4 py-3 font-semibold shadow-md cursor-default select-none ${difficultyColors[assignmentDetails?.difficulty]}`}
          title={`Difficulty: ${assignmentDetails?.difficulty}`}
        >
          Difficulty:{" "}
          <span className="capitalize ml-2">
            {assignmentDetails?.difficulty}
          </span>
        </div>

        <div className="badge badge-accent px-4 py-3 font-semibold shadow-md cursor-default select-none">
          Due Date:{" "}
          <span className="ml-2">
            {new Date(assignmentDetails?.dueDate).toLocaleDateString(
              undefined,
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </span>
        </div>

        <div className="badge badge-info px-4 py-3 font-semibold shadow-md cursor-default select-none truncate max-w-xs">
          Creator:{" "}
          <span className="ml-2">{assignmentDetails?.creatorEmail}</span>
        </div>
      </div>
      <div className="flex-center mt-7 mb-4">
        <Link
          to={`/assignment/submit/${assignmentDetails?._id}`}
          className="btn bnt-active btn-wide btn-info"
        >
          Take Assignment
        </Link>
      </div>
    </motion.div>
  );
};

export default AssignmentDetailsCard;
