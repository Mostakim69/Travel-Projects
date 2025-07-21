import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { fetchData } from "../../../utils/fetchData";
import { useEffect, useState } from "react";
import Spinner from "../../shared/Layout/Spinner";
import ErrorMessage from "../../../utils/ErrorMessage";
import { useForm } from "react-hook-form";
import UpdateAssignmentForm from "../components/updateAssignments/UpdateAssignmentForm";
import updateData from "../../../utils/updateData";
import customAlert from "../../../utils/customAlert";

const UpdateAssignment = () => {
  const {
    mutate: updateAssignment,
    isPending: isPendingForUpdate,
    error: errorForUpdate,
    isError: isErrorForUpdate,
  } = useMutation({
    mutationFn: updateData,
    onSuccess: () => {
      customAlert({
        title: "Updated successfully!",
        text: "You have successfully updated the assignment!",
      });
      setTimeout(() => {
        navigate("/assignments");
      }, 2000);
    },
    onError: (err) => {
      console.log(err, "err inside onError");
    },
  });

  const { id } = useParams();

  const { data, isPending, isError, error, isSuccess } = useQuery({
    queryKey: ["assignments", "assignment"],
    queryFn: () => fetchData(`assignments/${id}`),
  });

  const prevAssignment = data?.data;
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(prevAssignment?.dueDate);
  useEffect(() => {
    if (prevAssignment?.dueDate) {
      setSelectedDate(new Date(prevAssignment.dueDate));
    }
  }, [prevAssignment?.dueDate]);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const updatedAssignment = {
      ...data,
    };
    // console.log(`updatedAssignment inside onSubmit`, updatedAssignment);
    updateAssignment({
      endpoint: `assignments/update-assignment/${id}`,
      body: updatedAssignment,
    });
    // reset();
    // setStartDate();
  };

  return (
    <div className="my-18 max-w-[800px] mx-auto ">
      {isPending && <Spinner />}
      {isError && <ErrorMessage error={error} />}
      {isSuccess && (
        <UpdateAssignmentForm
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
          prevAssignment={prevAssignment}
          isPendingForUpdate={isPendingForUpdate}
          errorForUpdate={errorForUpdate}
          isErrorForUpdate={isErrorForUpdate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      {isErrorForUpdate && <ErrorMessage error={errorForUpdate} />}
    </div>
  );
};

export default UpdateAssignment;
