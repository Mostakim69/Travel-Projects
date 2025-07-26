import { useForm, useFieldArray } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { motion } from "framer-motion";

const AddPackage = () => {
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gallery: ["", ""],
      tourPlan: [{ day: 1, activities: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tourPlan",
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosSecure.post("/packages", data);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Package Added",
        text: "Your travel package has been successfully posted!",
        background: "#0f172a",
        color: "#fff",
      });
      reset();
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error?.response?.data?.message || "Something went wrong!",
        background: "#0f172a",
        color: "#fff",
      });
    },
  });

  const onSubmit = (data) => {
    data.price = Number(data.price);
    data.days = Number(data.days);
    data.tourPlan.forEach((plan) => (plan.day = Number(plan.day)));
    mutation.mutate(data);
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#0f172a] text-white shadow-2xl border border-[#1f2937] mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      data-aos="fade-up"
    >
      <h1 className="text-3xl font-bold mb-6 text-center glow-text">
        Add New Travel Package
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="label">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
            placeholder="Sajek Adventure"
          />
          {errors.title && (
            <p className="text-red-400 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full bg-[#1e293b] text-white focus:textarea-accent"
            placeholder="A trip to the scenic Sajek Valley"
          />
        </div>

        {/* Price + Days */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="label">Price (৳)</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: 1,
              })}
              className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
              placeholder="4500"
            />
          </div>
          <div className="flex-1">
            <label className="label">Days</label>
            <input
              type="number"
              {...register("days", {
                required: "Days required",
                min: 1,
              })}
              className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
              placeholder="3"
            />
          </div>
        </div>

        {/* Trip Type */}
        <div>
          <label className="label">Trip Type</label>
          <select
            {...register("tripType", { required: true })}
            className="select select-bordered w-full bg-[#1e293b] text-white focus:select-accent"
          >
            <option value="Adventure">Adventure</option>
            <option value="Relaxation">Relaxation</option>
            <option value="Cultural">Cultural</option>
            <option value="Nature">Nature</option>
            <option value="Historical">Historical</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="label">Location</label>
          <input
            {...register("location", { required: true })}
            className="input input-bordered w-full bg-[#1e293b] text-white focus:input-accent"
            placeholder="Sajek"
          />
        </div>

        {/* Gallery URLs */}
        <div>
          <label className="label">Gallery URLs</label>
          <div className="grid grid-cols-1 gap-2">
            <input
              {...register("gallery.0", { required: true })}
              className="input input-bordered bg-[#1e293b] text-white focus:input-accent"
              placeholder="https://img.url/1.jpg"
            />
            <input
              {...register("gallery.1", { required: true })}
              className="input input-bordered bg-[#1e293b] text-white focus:input-accent"
              placeholder="https://img.url/2.jpg"
            />
          </div>
        </div>

        {/* Tour Plan */}
        <div>
          <label className="label">Tour Plan</label>
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-2 items-center mb-2"
            >
              <input
                type="number"
                {...register(`tourPlan.${index}.day`, {
                  required: true,
                  min: 1,
                })}
                className="input input-sm col-span-2 input-bordered bg-[#1e293b] text-white"
                placeholder="Day"
              />
              <input
                {...register(`tourPlan.${index}.activities`, {
                  required: true,
                })}
                className="input input-sm col-span-9 input-bordered bg-[#1e293b] text-white"
                placeholder="Activities"
              />
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="btn btn-sm btn-error col-span-1"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ day: fields.length + 1, activities: "" })}
            className="btn btn-outline btn-accent mt-2 hover:glow-effect hover:scale-105 transition-all"
          >
            ➕ Add Day
          </button>
        </div>

        {/* Submit */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="btn btn-primary px-10 text-lg tracking-wide transition hover:scale-105 hover:shadow-glow duration-300 glow-effect"
          >
            🚀 Add Package
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AddPackage;
