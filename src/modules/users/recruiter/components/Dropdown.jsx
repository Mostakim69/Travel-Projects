const Dropdown = ({ dropdown }) => {
  let legend = dropdown.name === "category" && "Job Category";
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">{legend}</legend>
      <select
        defaultValue={dropdown.defaultValue}
        className="select "
        name={dropdown.name}
      >
        {dropdown.options.map((option, index) => (
          <option key={index} disabled={index === 0} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default Dropdown;
