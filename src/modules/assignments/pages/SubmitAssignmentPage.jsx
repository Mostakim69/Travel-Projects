import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import postData from "../../../utils/postData";
import useAuth from "../../../hooks/useAuth";
import customAlert from "../../../utils/customAlert";

const SubmitAssignmentPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { id } = useParams(); // assignmentId from route
  console.log(id, "SubmitAssignmentPage.jsx", 12);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      let res = await postData({
        endpoint: "submission/submit-assignment",
        body: {
          assignmentId: id,
          googleDocLink: data.googleDocLink,
          notes: data.notes,
          studentEmail: user?.email,
        },
      });
      customAlert({
        title: "Assignment submitted successfully!",
      });
      // reset();
      setTimeout(() => {
        navigate("/assignment/my-submit");
      }, 2500);
      console.log(res, "repsonse");
    } catch (err) {
      console.log(`err`, err);
      toast.error(err?.response?.data?.message || "Submission failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="my-10  justify-center max-w-xl mx-auto p-6 rounded shadow bg-white">
        <h2 className="text-2xl font-semibold mb-4">Submit Assignment</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("googleDocLink", { required: true })}
            className="input input-bordered w-full"
            placeholder="Google Docs Link"
            required
            type="url"
            minLength={10}
          />
          <textarea
            {...register("notes")}
            className="textarea textarea-bordered w-full"
            placeholder="Notes"
            required
            minLength={10}
          />
          <button className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SubmitAssignmentPage;
