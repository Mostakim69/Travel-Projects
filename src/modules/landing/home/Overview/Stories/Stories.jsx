import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../../../hooks/useAxiosSecure";
import StoryCard from "./StoryCard";
import Spinner from "../../../../shared/Layout/Spinner";

const Stories = () => {
  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosInstance.get("/stories");
      return res.data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section
      className="px-4 py-16 bg-[#0f172a] text-white"
      data-aos="fade-up-left"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        🌌 Traveler Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>
    </section>
  );
};

export default Stories;
