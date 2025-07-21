/* import { motion } from "motion/react";
import ErrorMessage from "../../../utils/ErrorMessage";
import Spinner from "../../shared/Layout/Spinner";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/fetchData";
import AssignmentCard from "../components/AssignmentCard";
import AssignmentsPageIntro from "../components/AssignmentsPageIntro";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

  const {
    data: myPostedJobs,
    isPending,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["myPostedjobs", "assignments"],
    queryFn: () => fetchData("/assignments"),
  });

  // console.log(`myPostedJobs`, myPostedJobs, "Assignments.jsx", 22);
  useEffect(() => {
    isSuccess && setAssignments(myPostedJobs?.data);
  }, [myPostedJobs]);
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <AssignmentsPageIntro />
      {isError && <ErrorMessage error={error} />}
      {isPending && <Spinner />}

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {isSuccess &&
          assignments?.map((assignment) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))}
      </motion.div>
    </div>
  );
};

export default Assignments; */

import { motion } from "motion/react";
import ErrorMessage from "../../../utils/ErrorMessage";
import Spinner from "../../shared/Layout/Spinner";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/fetchData";
import AssignmentCard from "../components/AssignmentCard";
import AssignmentsPageIntro from "../components/AssignmentsPageIntro";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const {
    data: myPostedJobs,
    isPending,
    isError,
    error,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["assignments", { difficulty, searchTerm }],
    queryFn: () =>
      fetchData(
        `/assignments?${difficulty ? `difficulty=${difficulty}&` : ""}${
          searchTerm ? `search=${searchTerm}` : ""
        }`,
      ),
  });

  useEffect(() => {
    if (isSuccess) {
      setAssignments(myPostedJobs?.data || []);
    }
  }, [myPostedJobs, isSuccess]);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <AssignmentsPageIntro />

      {/* Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full sm:max-w-xs"
        />
        <div className="flex-center gap-1  w-full sm:max-w-xs">
          <select
            className="select select-bordered w-full sm:max-w-xs flex-1"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button className="btn btn-primary" onClick={refetch}>
            Filter
          </button>
        </div>
      </div>

      {/* Status */}
      {isError && <ErrorMessage error={error} />}
      {isPending && <Spinner />}

      {/* Assignments Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {isSuccess &&
          assignments?.map((assignment) => (
            <AssignmentCard key={assignment._id} assignment={assignment} />
          ))}
      </motion.div>
    </div>
  );
};

export default Assignments;
