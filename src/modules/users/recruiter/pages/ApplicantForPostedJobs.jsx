import { useQuery } from "@tanstack/react-query";
import PageIntro from "../../../../utils/PageIntro";
import useAuth from "../../../../hooks/useAuth";
import { fetchData } from "../../../../utils/fetchData";
import Spinner from "../../../shared/Layout/Spinner";
import ErrorMessage from "../../../../utils/ErrorMessage";
import { Link } from "react-router";

const ApplicantForPostedJobs = () => {
  const { user } = useAuth();
  const {
    data: applicants,
    isPending,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["applicationsForPostedJobs", user?.email],
    queryFn: () => fetchData("applications/job/684628c8b30580d2823fd34e"),
  });
  console.log(`applications`, applicants, "ApplicantForPostedJobs.jsx", 22);

  const pageIntro = {
    h: "👥 My Applicants",
    p: "Welcome to your applicant dashboard! Here you can view, assess, and manage all candidates who have applied to your posted jobs. Use this space to review applications, track candidate progress, and make informed hiring decisions. Stay organized and efficient as you move forward in building your ideal team.",
  };

  return (
    <>
      <PageIntro h1={pageIntro.h} p={pageIntro.p} />
      <h2 className="text-2xl text-cente  my-4">
        Total applicants: {applicants?.length}
      </h2>
      {isPending && <Spinner />}
      {isError && <ErrorMessage error={error} />}
      {isSuccess && (
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Applicant</th>
                  <th>Resume</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* rows */}
                {applicants.map((applicant, index) => (
                  <tr key={applicant._id}>
                    <th>{index + 1}</th>
                    <td>
                      {applicant?.name?.toUpperCase() || applicant?.applicant}
                    </td>
                    <td>
                      <Link to={applicant?.linkedin} target="_blank">
                        {applicant?.linkedin?.slice(0, 20) + "..."}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/applications/${applicant._id}`}>
                        View Applications
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default ApplicantForPostedJobs;
