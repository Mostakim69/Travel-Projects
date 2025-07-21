import useAuth from "../../../../hooks/useAuth.jsx";
const AddJobBasicInfo = ({ fields }) => {
  let legend =
    fields[0].label.toLowerCase().includes("job") && "Job Basic Info";
  if (fields[0].label.toLowerCase().includes("salary")) {
    legend = "Salary Range";
  }
  if (fields[0].label.toLowerCase().includes("hr")) {
    legend = "HR Related Info";
  }

  const { user } = useAuth();
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">{legend}</legend>

      {fields.map((input, index) => {
        const isHrEmail = input?.name == "hr_email";
        return (
          <div key={index}>
            <label className="label mb-1">{input.label}</label>
            <input
              type={input.type}
              className="input"
              placeholder={input.placeholder}
              name={input.name}
              required
              defaultValue={isHrEmail ? user?.email : undefined}
            />
          </div>
        );
      })}
    </fieldset>
  );
};

export default AddJobBasicInfo;
