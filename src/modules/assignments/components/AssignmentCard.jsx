import { useMutation } from "@tanstack/react-query";
import customAlert from "../../../utils/customAlert";
import useAuth from "../../../hooks/useAuth";
import { format } from "date-fns";
import { motion } from "motion/react";
import { deleteData } from "../../../utils/deleteData";
import { leftToRight } from "../../../animation/motion";
import AssignmentCardBody from "./AssignmentCardBody";
const AssignmentCard = ({ assignment }) => {
  console.log(assignment, "AssignmentCard.jsx", 10);
  const { user } = useAuth();
  const { mutate: deleteAssignment, isPending } = useMutation({
    mutationFn: ({ endpoint, body }) => deleteData(endpoint, body),
    mutationKey: ["deleteAssignment", "deleteSingleassignment"],
    onSuccess: (data) => {
      console.log("success", data);
      customAlert({
        text: "Assignment deleted successfully",
        timer: 2000,
        showConfirmButton: true,
      });
    },
    onError: (err) => {
      const { response } = err;
      const errMessage = response?.data?.message;

      customAlert({
        title: "Error Occured",
        text: errMessage,
        icon: "error",
        timer: 2000,
      });
    },
  });

  const handleDeleteAssignment = async () => {
    alert("Are you sure to delete this assignment?");
    await deleteAssignment({
      endpoint: `assignments/delete-assignment/${assignment._id}`,
      body: { email: user?.email },
    });
  };
  return (
    <motion.div
      key={assignment._id}
      className="card bg-base-100 shadow-xl hover-effect hover:scale-97 scale-95"
      {...leftToRight}
    >
      <figure>
        <img
          src={assignment?.thumbnailUrl}
          alt="Thumbnail"
          className="w-full h-52 object-cover"
        />
      </figure>
      <AssignmentCardBody
        assignment={assignment}
        handleDeleteAssignment={handleDeleteAssignment}
        isPending={isPending}
      />
    </motion.div>
  );
};

export default AssignmentCard;
