import { motion } from "motion/react";
import PageIntro from "../../../../utils/PageIntro";
import AddJobBasicInfo from "../components/AddJobBasicInfo";
import AddJobFilter from "../components/AddJobFilter";
import Dropdown from "../components/Dropdown";
import SalaryRange from "../components/SalaryRange";
import TextArea from "../components/TextArea";
import {
  addJobTextAreas,
  hr_relatedInfos,
  jobBasicInfoFields,
  joCategoriesDropdown,
} from "../recruiter.constant";
import { topToBottom } from "../../../../animation/motion";
import { useMutation } from "@tanstack/react-query";
import postData from "../../../../utils/postData";
import customAlert from "../../../../utils/customAlert";
import { useNavigate } from "react-router";

const h1 = "Post a New Job";

const p = (
  <>
    Fill out the details below to post a new opportunity. Make sure to include a
    detailed job description, requirements, and deadline.
  </>
);
const AddJob = () => {
  const navigate = useNavigate();
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      customAlert({
        text: "Job Posted Successfully!",
      });
      console.log("success");
      setTimeout(() => navigate("/recruiter/mypostedjob"), 3500);
    },
    onError: (err) => {
      console.log(err, "AddJob.jsx", 42);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newJob = Object.fromEntries(formData.entries());
    newJob.requirements = newJob.requirements
      ?.split(",")
      .map((item) => item.trim());
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((item) => item.trim());

    const { min, max, currency } = newJob;
    newJob.status = "active";
    newJob.salaryRange = {
      min,
      max,
      currency,
    };

    delete newJob.min;
    delete newJob.max;
    delete newJob.currency;
    console.log(newJob, "AddJob.jsx", 30);
    mutate({
      endpoint: "jobs",
      body: newJob,
    });
  };
  return (
    <div className="mb-10">
      <PageIntro h1={h1} p={p} />
      {/* form */}
      <motion.div
        className="px- max-w-[800px] rounded-lg bg-gray-50 mx-auto shadow-lg py-4"
        {...topToBottom}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2  w-full justify-items-center">
            <div>
              <AddJobBasicInfo fields={jobBasicInfoFields} />
              <AddJobFilter />
            </div>

            <div>
              {/* deadline */}
              <div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                  <legend className="fieldset-legend">Pick a date</legend>

                  <input
                    className="input"
                    name="applicationDeadline"
                    type="date"
                    placeholder="Pick a date"
                    required
                  />
                </fieldset>
              </div>
              {/* job categories */}
              <Dropdown dropdown={joCategoriesDropdown} />
              <SalaryRange />
            </div>
            {addJobTextAreas.map((job, idx) => (
              <TextArea jobTextArea={job} key={idx} />
            ))}
            {/* hr related info */}
            <AddJobBasicInfo fields={hr_relatedInfos} />
          </div>
          <div className="flex justify-center items-center mt-5  ">
            <input
              type="submit"
              value={isPending ? "Submitting..." : "Submit"}
              disabled={isPending}
              className="btn btn-primary  mx-aut w-[200px]"
            />
          </div>
          <div>
            {isSuccess && (
              <div className="alert alert-success mt-4">
                Application submitted successfully!
              </div>
            )}
            {isError && (
              <div className="alert alert-error mt-4">
                Error: {error.message}
              </div>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddJob;
