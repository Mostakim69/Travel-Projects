import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageStories = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: stories = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userStories", user?.email],
    queryFn: async () => {
      // const res = await axiosSecure.get(`/stories/user/${user._id}`);
      const res = await axiosSecure.get(
        `/stories/user/688036d54582db5aafd12e4f`,
      );
      return res.data?.data;
    },
    enabled: !!user?.email,
  });

  console.log(stories, " storeies ManageStories.jsx", 21);
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete this story?",
      text: "You won't be able to recover it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#374151",
      confirmButtonText: "Yes, delete it!",
      background: "#0f172a",
      color: "#f1f5f9",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/stories/${id}`);
        if (res.data?.deletedCount > 0) {
          Swal.fire("Deleted!", "Your story has been deleted.", "success");
          refetch();
        }
      } catch (err) {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  if (isLoading)
    return <div className="text-center py-10 text-info">Loading...</div>;
  if (isError)
    return (
      <div className="text-error text-center py-10">
        Failed to fetch stories.
      </div>
    );

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-accent">
        📝 Manage Your Stories
      </h2>

      {stories.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">
          You haven't shared any stories yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story._id}
              className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-500/30 transition duration-300 relative"
              data-aos="zoom-in"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-3">
                  {story.description}
                </p>
              </div>

              {story.images?.length > 0 && (
                <img
                  src={story.images[0]}
                  alt="Story Preview"
                  className="w-full h-40 object-cover rounded-b-xl border-t border-gray-600"
                />
              )}

              <div className="flex justify-between items-center px-4 py-2 mt-1">
                <Link
                  to={`/dashboard/edit-story/${story._id}`}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  ✏️ Edit
                </Link>
                <button
                  onClick={() => handleDelete(story._id)}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ManageStories;
