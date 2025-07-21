import { currencyDropdown, currencyInputFields } from "../recruiter.constant";
import AddJobBasicInfo from "./AddJobBasicInfo";

const SalaryRange = () => {
  return (
    <>
      <AddJobBasicInfo fields={currencyInputFields} />
      <div className="bg-base-200 w-xs px-4 pb-3 rounded-xl mt-[-9px] hadow-sm">
        <label className="label mb-1 text-xs font-semibold">Currency</label>
        <br />
        <select
          defaultValue={currencyDropdown.defaultValue}
          className="select"
          name="currency"
        >
          {currencyDropdown.options.map((option, index) => (
            <option key={index} disabled={index === 0} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SalaryRange;
