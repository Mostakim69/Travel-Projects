import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { fetchData } from "../../../utils/fetchData";
import { FaPen, FaUserGraduate, FaClipboardCheck } from "react-icons/fa";
import { Link } from "react-router";

const PendingAssignmentsPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["pending-assignments"],
    queryFn: () => fetchData("submission/pending-submissions"),
  });

  const pendingSubmissions = data?.data || [];

  if (isLoading)
    return <div className="text-center mt-20 text-lg">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center flex items-center gap-2 justify-center capitalize">
        <FaClipboardCheck className="text-blue-600 " />
        Awaiting Review & Grading
      </h1>

      {pendingSubmissions.length === 0 ? (
        <p className="text-center text-gray-500">
          🎉 All assignments have been evaluated.
        </p>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="overflow-x-auto"
        >
          <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-blue-50 text-left text-sm uppercase text-gray-600 font-semibold">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Total Marks</th>
                <th className="px-4 py-3">Examinee</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingSubmissions.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 text-sm">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">
                    {item?.assignmentId?.title}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {item.assignmentId?.marks ?? "N/A"}
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2 text-sm">
                    <FaUserGraduate className="text-gray-500" />
                    {item.studentName || item.studentEmail}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Link
                      to={`/evaluate/${item._id}`}
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md transition-all"
                    >
                      <FaPen />
                      Give Mark
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
};

export default PendingAssignmentsPage;
