import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/fetchData";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import AssignmentDetailsCard from "../components/updateAssignments/AssignmentDetails/AssignmentDetailsCard";
const AssignmentDetailsPage = () => {
  const [assignmentDetails, setAssignmentDetails] = useState({});
  const { id } = useParams();

  const { data, isPending, isError, error, isSuccess } = useQuery({
    queryKey: ["assignmentDetails", "viewsingleAssignment"],
    queryFn: () => fetchData(`assignments/${id}`),
  });

  console.log(error, "AssignmentDetailsPage.jsx", 12);
  useEffect(() => {
    if (data?.data) {
      setAssignmentDetails(data.data);
    }
  }, [data]);

  if (isPending) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-red-500">Error: {error.message}</p>
    );
  }

  if (isSuccess) {
    return (
      <div className="sm:min-h-[80vh] flex items-center justify-center p-6 m-2 rounded">
        <AssignmentDetailsCard assignmentDetails={assignmentDetails} />
      </div>
    );
  }

  return null;
};

export default AssignmentDetailsPage;
