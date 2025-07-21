const AddJobSelect = ({ opton, input }) => {
  return (
    <div>
      <select className="select select-primary">
        {input?.options?.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default AddJobSelect;
