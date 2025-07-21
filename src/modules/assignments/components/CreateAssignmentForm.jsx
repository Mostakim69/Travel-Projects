import DatePicker from "react-datepicker";

const CreateAssignmentForm = (props) => {
  const {
    handleSubmit,
    register,
    errors,
    onSubmit,
    startDate,
    setStartDate,
    isPending,
    error,
    isError,
  } = props;

  const axiosErrorMessage = error?.response?.data;
  let errorForUi;
  if (axiosErrorMessage?.errorFrom) {
    errorForUi = axiosErrorMessage?.errors[0];
  }
  console.log(`errorForUi, errorForUi`, errorForUi);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 animate-fade-in-up"
    >
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter assignment title"
          className="input input-bordered w-full"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Description
        </label>
        <textarea
          placeholder="Enter assignment description"
          className="textarea textarea-bordered w-full"
          rows={4}
          {...register("description", {
            required: "Description is required",
          })}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Marks
          </label>
          <input
            type="number"
            placeholder="Enter total marks"
            className="input input-bordered w-full"
            {...register("marks", { required: "Marks are required" })}
          />
          {errors.marks && (
            <p className="text-red-500 text-sm mt-1">{errors.marks.message}</p>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Thumbnail Image URL
          </label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            {...register("thumbnailUrl", {
              required: "Thumbnail URL is required",
            })}
          />
          {errors.thumbnail && (
            <p className="text-red-500 text-sm mt-1">
              {errors.thumbnail.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Difficulty Level
          </label>
          <select
            className="select select-bordered w-full"
            {...register("difficulty", {
              required: "Select difficulty level",
            })}
          >
            <option value="" disabled>
              Select difficulty
            </option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {errors.difficulty && (
            <p className="text-red-500 text-sm mt-1">
              {errors.difficulty.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Due Date
          </label>
          <DatePicker
            onChange={(date) => setStartDate(date)}
            selected={startDate}
            className="input input-bordered w-full"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="btn btn-primary  btn-outline rounded-full  mx-auto"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Create Assignment"}
        </button>
      </div>
      {errorForUi && <p className="text-red-500 ">{errorForUi}</p>}
      {isError && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </form>
  );
};

export default CreateAssignmentForm;
