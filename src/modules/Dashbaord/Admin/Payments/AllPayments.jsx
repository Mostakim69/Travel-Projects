import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { format } from "date-fns";
import { motion } from "framer-motion";

const AllPayments = () => {
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data?.data || [];
    },
  });

  if (isLoading)
    return (
      <div className="text-center py-10 text-white">Loading payments...</div>
    );

  return (
    <div className="p-4 md:p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 glow-text">All Payments</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {payments.map((payment, index) => (
          <motion.div
            key={payment._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#111827] p-5 rounded-2xl glow-border hover:glow-shadow transition-all duration-300 jhilimili-glow"
          >
            <p className="mb-2">
              <span className="font-semibold text-slate-300">Email:</span>{" "}
              <span className="text-slate-100">{payment.email}</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold text-slate-300">
                Transaction ID:
              </span>{" "}
              <span className="text-slate-100">{payment.transactionId}</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold text-slate-300">Booking ID:</span>{" "}
              <span className="text-slate-100">{payment.bookingId}</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold text-slate-300">Amount:</span>{" "}
              <span className="text-green-400">
                ${payment.amount.toFixed(2)}
              </span>
            </p>
            <p>
              <span className="font-semibold text-slate-300">Date:</span>{" "}
              <span className="text-slate-100">
                {format(new Date(payment.date), "PPPpp")}
              </span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllPayments;
