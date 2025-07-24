import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "error",
        title: "Failed to Submit",
        text: err?.response?.data?.message || err.message,
      });
    },
    onSuccess: (data) => {
      Swal.fire({
        icon: "success",
        title: "Submitted!",
        text: data?.message || "Successfully posted!",
      });
    },
  });
  console.log(error, "error");
  return { postData, isPending, isSuccess, isError, error, data, reset };
};

export default usePostData;
