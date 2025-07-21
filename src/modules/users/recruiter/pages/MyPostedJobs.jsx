import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "../../../../utils/ErrorMessage";
import Spinner from "../../../shared/Layout/Spinner";
import { fetchData } from "../../../../utils/fetchData";
import useAuth from "../../../../hooks/useAuth";
import PageIntro from "../../../../utils/PageIntro";
import ApplicationTableHead from "../../../myApplication/component/ApplicationTableHead";
import PostedJobTableRow from "../components/PostedJobTableRow";

const h = "🧾 My Posted Jobs.";

const p =
  "Welcome to your job dashboard! This page displays all the jobs you’ve posted as a recruiter. You can manage each listing—edit details, close positions, or monitor applications—all from one place. Keep your postings up to date to attract the best candidates.";
const MyPostedJobs = () => {
  const { user } = useAuth();
  const {
    data: myPostedJobs,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["myPostedjobs", user?.email],
    queryFn: () =>
      fetchData("jobs/applications", {
        email: user?.email,
      }),
  });
  // console.log(`myPostedJobs`, myPostedJobs, "MyPostedJobs.jsx", 22);
  return (
    <div className="mb-16">
      <PageIntro h1={h} p={p} />
      {/* render jobs application in the ui by table*/}
      {isLoading && <Spinner />}
      {isError && <ErrorMessage error={error} />}
      {isSuccess && (
        <div className="overflow-x-auto">
          <table className="table">
            <ApplicationTableHead
              h1="#"
              h2="Job Title"
              h3="Deadline"
              h4="Count"
              h5="View Applications"
            />
            <tbody>
              {myPostedJobs?.map((job, idx) => (
                <PostedJobTableRow key={idx} index={idx + 1} postedJob={job} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPostedJobs;
