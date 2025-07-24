import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";

export const darkSwal = Swal.mixin({
  background: "#111827", // Tailwind dark gray-900
  color: "#E5E7EB", // Tailwind gray-200
  confirmButtonColor: "#6366F1", // Tailwind indigo-500
  cancelButtonColor: "#EF4444", // Tailwind red-500
  customClass: {
    popup: "glow-border ",
  },
});

const usePostData = () => {
  const axiosSecure = useAxiosSecure();

  const {
    mutateAsync: postData,
    isPending,
    isSuccess,
    isError,
    error,
    data,
    reset,
  } = useMutation({
    mutationFn: async ({ url, payload }) => {
      const res = await axiosSecure.post(url, payload);
      return res.data;
    },
    onError: (err) => {
      darkSwal.fire({
        icon: "error",
        title: "Failed to Submit",
        text: err?.response?.data?.message || err.message,
      });
    },
    onSuccess: (data) => {
      darkSwal.fire({
        icon: "success",
        title: "Submitted!",
        text: data?.message || "Successfully posted!",
      });
    },
  });

  return { postData, isPending, isSuccess, isError, error, data, reset };
};

export default usePostData;
