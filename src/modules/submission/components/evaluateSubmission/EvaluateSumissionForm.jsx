const EvaluateSumissionForm = (props) => {
  const { onSubmit, register, errors } = props;
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Obtained Marks */}
        <div>
          <label className="label">
            <span className="label-text">Obtained Marks</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            {...register("obtainedMarks", {
              required: "Marks are required",
              min: { value: 0, message: "Marks must be 0 or more" },
              max: { value: 30, message: "Marks must be 30 or less" },
            })}
          />
          {errors.obtainedMarks && (
            <p className="text-red-500 text-sm mt-1">
              {errors.obtainedMarks.message}
            </p>
          )}
        </div>

        {/* Feedback */}
        <div>
          <label className="label">
            <span className="label-text">Feedback</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Write feedback here..."
            {...register("feedback", {
              required: "Feedback is required",
              minLength: {
                value: 5,
                message: "Feedback must be at least 5 characters",
              },
            })}
          ></textarea>
          {errors.feedback && (
            <p className="text-red-500 text-sm mt-1">
              {errors.feedback.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button className="btn btn-primary hover:scale-105 transition-transform duration-200">
            ✅ Submit Evaluation
          </button>
        </div>
      </form>
    </div>
  );
};

export default EvaluateSumissionForm;
