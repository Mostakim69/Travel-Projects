import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import usePostData from "../../../hooks/usePostData";
import useUserRole from "../../../hooks/useUserRole";

const AddStories = () => {
  const { user } = useAuth();
  const { userData } = useUserRole();
  const navigate = useNavigate();
  const postData = usePostData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      title: data.title,
      description: data.description,
      images: data.images.split(",").map((url) => url.trim()),
      userId: userData?._id,
      userName: userData?.name,
      userPhoto: user?.photoURL,
    };

    try {
      console.log(payload, "payload AddStories.jsx", 21);
      /* await postData({
        url: "/bookings",
        payload: bookingPayload,
      }); */
      const res = await postData({ url: "/stories", payload });

      console.log(res, " res of AddStories.jsx", 30);
    } catch (err) {
      // toast.error("Failed to post story");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-white">Share Your Story</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-white mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-white mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="images" className="block text-white mb-1">
            Image URLs (comma separated)
          </label>
          <input
            type="text"
            id="images"
            {...register("images", {
              required: "At least one image URL is required",
            })}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-md transition"
        >
          Post Story
        </button>
      </form>
    </div>
  );
};

export default AddStories;
