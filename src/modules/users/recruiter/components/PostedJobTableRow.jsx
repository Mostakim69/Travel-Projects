import { Link } from "react-router";

const PostedJobTableRow = ({ index, postedJob }) => {
  const { title, applicationDeadline, application_count, jobId } = postedJob;
  return (
    <tr>
      <td>{index}</td>
      <td>
        <h2>{title || "No Title provided"}</h2>
      </td>
      <td>
        <p>{applicationDeadline || "2025-08-13"}</p>
      </td>
      <td>
        <p>{application_count}</p>
      </td>
      <th>
        <Link to={`/jobs/${jobId}`}>
          <button className="btn btn-ghost btn-xs">View Applications</button>
        </Link>
      </th>
    </tr>
  );
};

export default PostedJobTableRow;
