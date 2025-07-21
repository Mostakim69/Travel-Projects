import { format } from "date-fns";
import { Link } from "react-router";

const AssignmentCardBody = ({
  assignment,
  handleDeleteAssignment,
  isPending,
}) => {
  return (
    <div className="card-body">
      <h2 className="card-title text-xl font-semibold">{assignment.title}</h2>
      <p className="text-gray-600 text-sm">
        {assignment.description.length > 80
          ? assignment.description.slice(0, 80) + "..."
          : assignment.description}
      </p>
      <div className="mt-2">
        <div className="badge badge-secondary mr-2">
          Difficulty: {assignment?.difficulty?.toUpperCase()}
        </div>
        <div className="badge badge-info">Marks: {assignment.marks}</div>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        Due: {format(new Date(assignment.dueDate), "PPP")}
      </p>
      <div className="card-actions max-sm:flex-col justify-center gap-2  mt-8 *:max-sm:btn-block *:btn-outline *:btn-info *:min-w-[98px]">
        <button
          onClick={handleDeleteAssignment}
          className="btn btn-sm btn-primary"
          disabled={isPending}
        >
          {isPending ? "Deleting.." : "Delete"}
        </button>
        <Link
          to={`/assignment/update/${assignment._id}`}
          className="btn btn-sm btn-primary"
        >
          Update
        </Link>
        <Link
          to={`/assignment/details/${assignment._id}`}
          className="btn btn-sm btn-primary"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default AssignmentCardBody;
