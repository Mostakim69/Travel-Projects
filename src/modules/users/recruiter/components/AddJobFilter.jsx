const AddJobFilter = () => {
  return (
    <fieldset className="fieldset bg-base-200  border-base-300 rounded-box w-xs border px-2">
      <legend className="fieldset-legend">Job Type</legend>
      <div className="filter mb-3">
        <input
          className="btn filter-reset"
          type="radio"
          name="jobType"
          aria-label="All"
        />
        <input
          className="btn"
          type="radio"
          name="jobType"
          aria-label="On-site"
          value="On-site"
        />
        <input
          value="Remote"
          className="btn"
          type="radio"
          name="jobType"
          aria-label="Remote"
        />
        <input
          value="Hybrid"
          className="btn"
          type="radio"
          name="jobType"
          aria-label="Hybrid"
        />
      </div>
    </fieldset>
  );
};

export default AddJobFilter;
