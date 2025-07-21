import ProtectedRoute from "../../router/ProtectedRoute";
import { fetchData } from "../../utils/fetchData";
import EvaluateSubmissionPage from "../submission/pages/EvaluateSubmissionPage";
import AssignmentDetailsPage from "./pages/AssignmentDetailsPage";
import Assignments from "./pages/Assignments";
import CreateAssignment from "./pages/CreateAssignment";
import MySubmittedAssignmentPage from "./pages/MySubmittedAssignmentPage";
import PendingAssignmentsPage from "./pages/PendingAssignmentsPage";
import SubmitAssignmentPage from "./pages/SubmitAssignmentPage";
import UpdateAssignment from "./pages/UpdateAssignment";

const assignmentRoutes = [
  {
    path: "assignments/create",
    element: (
      <ProtectedRoute>
        <CreateAssignment />
      </ProtectedRoute>
    ),
  },
  {
    path: "assignments",
    element: (
      <ProtectedRoute>
        <Assignments />
      </ProtectedRoute>
    ),
  },
  {
    path: "assignments/pending",
    element: (
      <ProtectedRoute>
        <PendingAssignmentsPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "assignment/update/:id",
    element: (
      <ProtectedRoute>
        <UpdateAssignment />
      </ProtectedRoute>
    ),
  },
  {
    path: "assignment/details/:id",
    element: (
      <ProtectedRoute>
        <AssignmentDetailsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "assignment/submit/:id",
    element: (
      <ProtectedRoute>
        <SubmitAssignmentPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "assignment/my-submit",
    element: (
      <ProtectedRoute>
        <MySubmittedAssignmentPage />
      </ProtectedRoute>
    ),
  },
  // submission route
  {
    path: "evaluate/:id",
    loader: async ({ params }) => {
      const { id } = params;
      const submissionData = await fetchData(`submission/signle/${id}`);
      return submissionData?.data;
    },
    element: (
      <ProtectedRoute>
        <EvaluateSubmissionPage />
      </ProtectedRoute>
    ),
  },
];

export default assignmentRoutes;
