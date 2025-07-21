import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import customAlert from "../../../utils/customAlert";
import postData from "../../../utils/postData";
import { useNavigate } from "react-router";
import { bottomToTop } from "../../../animation/motion";
import { motion } from "motion/react";
import CreateAssignmentForm from "../components/CreateAssignmentForm";

const CreateAssignment = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    mutate: createAssignment,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      customAlert({
        title: "Assignment Created!",
      });
      setTimeout(() => {
        navigate("/assignments");
      }, 3000);
    },
  });
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (data) => {
    const assignment = {
      ...data,
      dueDate: startDate,
      creatorEmail: user?.email,
    };

    // reset();
    setStartDate();
    createAssignment({
      endpoint: "assignments/create-assignment",
      body: assignment,
    });
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16 font-sans"
      {...bottomToTop}
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
          Create a New Assignment ✍️
        </h1>
        <p className="text-md text-gray-500 animate-fade-in delay-100">
          Fill out the form below to share a new learning challenge with your
          peers.
        </p>
      </div>

      <CreateAssignmentForm
        onSubmit={onSubmit}
        isPending={isPending}
        error={error}
        isError={isError}
        startDate={startDate}
        setStartDate={setStartDate}
        errors={errors}
        register={register}
        handleSubmit={handleSubmit}
      />
    </motion.div>
  );
};

export default CreateAssignment;
