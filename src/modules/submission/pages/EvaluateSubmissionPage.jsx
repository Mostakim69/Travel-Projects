import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import EvaluateSumissionForm from "../components/evaluateSubmission/EvaluateSumissionForm";
import useAuth from "../../../hooks/useAuth";
import updateData from "../../../utils/updateData";
import { useLoaderData, useNavigate, useParams } from "react-router";
import EvaluateSubmissionText from "../components/evaluateSubmission/EvaluateSubmissionText";
import customAlert from "../../../utils/customAlert";
import ErrorMessage from "../../../utils/ErrorMessage";
import { useState } from "react";

const EvaluateSubmissionPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const submissionData = useLoaderData();

  const { user } = useAuth();

  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const evaluatedData = {
      ...data,
      evaluatedBy: user?.email,
      // evaluatedBy: "fortesting@gmail.com",
    };
    // console.log(`evaluatedData`, evaluatedData);
    try {
      setError("");
      const result = await updateData({
        endpoint: `submission/evaluate/${id}`,
        body: evaluatedData,
      });
      console.log(`result`, result);

      if (result?.success) {
        customAlert({
          title: "✅ Success",
          text: "Evaluation submitted successfully!",
        });
        // assignment/submit/
        setTimeout(() => {
          navigate(`/assignment/my-submit`);
        }, 2000);
      }
    } catch (err) {
      console.error(err, "EvaluateSubmissionPage.jsx", 45);
      setError(err?.response?.data?.message);
      customAlert({
        title: "⚠️ Opps! Error occured!",
        text: err?.response?.data?.message,
        timer: 3000,
      });
    }
  };

  return (
    <section className="max-w-2xl mx-auto  rounded-xl shadow-lg p-6 mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-center text-primary">
        Evaluate Submission
      </h2>
      <EvaluateSubmissionText submissionData={submissionData} />
      {/* form */}
      {/* handleSubmit, register, errors, onSubmit */}
      <EvaluateSumissionForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </section>
  );
};

export default EvaluateSubmissionPage;
