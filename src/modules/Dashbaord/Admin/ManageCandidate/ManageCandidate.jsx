import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const ManageCandidate = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch candidates
  const { data: candidateData = [], isLoading } = useQuery({
    queryKey: ["tour-guide-requests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/tour-guide-requests");
      return res.data?.data || [];
    },
  });

  // Accept mutation
  const acceptMutation = useMutation({
    mutationFn: async ({ userId, requestId }) => {
      await axiosSecure.patch(`/users/${userId}`, { status: "accepted" });
      await axiosSecure.delete(`/tour-guide-requests/${requestId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tour-guide-requests"]);
      Swal.fire({
        icon: "success",
        title: "Accepted!",
        text: "User is now a tour guide.",
        toast: true,
        timer: 2000,
        background: "#0f172a",
        color: "#fff",
        showConfirmButton: false,
      });
    },
  });

  // Reject mutation
  const rejectMutation = useMutation({
    mutationFn: async (requestId) => {
      await axiosSecure.delete(`/tour-guide-requests/${requestId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tour-guide-requests"]);
      Swal.fire({
        icon: "info",
        title: "Rejected",
        text: "Application removed.",
        toast: true,
        timer: 2000,
        background: "#0f172a",
        color: "#fff",
        showConfirmButton: false,
      });
    },
  });

  return (
    <motion.div
      className="max-w-5xl mx-auto mt-10 p-6 bg-[#0f172a] text-white rounded-xl border border-indigo-800 glow-border shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-3xl font-bold text-center mb-8 glow-text pulse-glow">
        Manage Tour Guide Candidates
      </h1>

      {isLoading ? (
        <p className="text-center text-indigo-300">Loading candidates...</p>
      ) : candidateData.length === 0 ? (
        <p className="text-center text-gray-400">No candidates found.</p>
      ) : (
        <div className="space-y-6">
          {candidateData.map((candidate) => (
            <motion.div
              key={candidate._id}
              className="bg-[#1e293b] rounded-xl p-4 border border-indigo-600 jhilimili-glow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h2 className="text-xl font-semibold text-cyan-300">
                    {candidate.userId.name} ({candidate.userId.email})
                  </h2>
                  <p className="text-sm text-indigo-400">{candidate.title}</p>
                </div>
                <span
                  className={`badge ${
                    candidate.status === "accepted"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {candidate.status}
                </span>
              </div>

              <p className="mb-1 text-slate-300">
                <span className="font-medium">Reason:</span> {candidate.reason}
              </p>
              <p className="mb-3 text-sky-400 underline">
                <a href={candidate.cvLink} target="_blank" rel="noreferrer">
                  View CV
                </a>
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() =>
                    acceptMutation.mutate({
                      userId: candidate.userId._id,
                      requestId: candidate._id,
                    })
                  }
                  className="btn btn-sm btn-success glow-effect hover:glow-effect transition"
                >
                  ✅ Accept
                </button>
                <button
                  onClick={() => rejectMutation.mutate(candidate._id)}
                  className="btn btn-sm btn-error glow-effect hover:glow-effect transition"
                >
                  ❌ Reject
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ManageCandidate;
