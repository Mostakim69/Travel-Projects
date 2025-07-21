const TextArea = ({ jobTextArea }) => {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">{jobTextArea.label}</legend>

      <textarea
        className="textarea"
        name={jobTextArea.name}
        placeholder={jobTextArea.placeholder}
        required
      />
    </fieldset>
  );
};

export default TextArea;
