import { Link } from "react-router";

const EvaluateSubmissionText = ({ submissionData }) => {
  const { studentEmail, googleDocLink, notes } = submissionData;
  return (
    <div>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold">📧 Submitted By:</span>{" "}
          <span className="text-sky-700 ">{studentEmail}</span>
        </p>
        <p>
          <span className="font-semibold">📄 Google Doc Link:</span>{" "}
          <Link to={googleDocLink} target="_blank" rel="noopener noreferrer">
            Open Document
          </Link>
        </p>
        <p>
          <span className="font-semibold">📝 Total Marks:</span>{" "}
          <span className="text-gray-500 ">30</span>
        </p>
        <p>
          <span className="font-semibold">📔 Notes:</span>{" "}
          <span className="text-gray-700 ">{notes}</span>
        </p>
      </div>
    </div>
  );
};

export default EvaluateSubmissionText;
