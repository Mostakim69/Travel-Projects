import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { axiosInstance } from "../../../../../hooks/useAxiosSecure";

const Stories = () => {
  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosInstance.get("/stories");
      return res.data.data;
    },
  });

  if (isLoading) {
    return (
      <div className="text-center text-purple-300 py-10">
        Loading stories...
      </div>
    );
  }

  return (
    <section className="px-4 py-16 bg-[#0f172a] text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        🌌 Traveler Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stories.map((story) => (
          <motion.div
            key={story._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e1b2d] to-[#0f172a] border border-indigo-600 shadow-[0_0_25px_#6366f180] hover:scale-[1.02] hover:shadow-[0_0_40px_#7c3aed88] transition-all duration-300 backdrop-blur-md"
          >
            <div className="relative group">
              <img
                src={story.images?.[0]}
                alt={story.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105 border-b-[4px] border-indigo-400 shadow-[0_4px_30px_rgba(99,102,241,0.6)]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-semibold text-sky-300 group-hover:text-indigo-300 transition-colors">
                  {story.title}
                </h3>
              </div>
            </div>

            <div className="p-5 space-y-3">
              <p className="text-sm text-gray-300 line-clamp-4 leading-relaxed">
                {story.description}
              </p>

              <div className="flex items-center gap-3 pt-4">
                <img
                  src={story.userPhoto}
                  alt={story.userName}
                  className="w-11 h-11 rounded-full border-[2px] border-purple-500 shadow-md"
                />
                <div>
                  <p className="font-semibold text-violet-300 hover:text-sky-400 transition-colors duration-200">
                    {story.userName}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(story.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stories;

// import { useQuery } from "@tanstack/react-query";
// import { motion } from "framer-motion";
// import { axiosInstance } from "../../../../../hooks/useAxiosSecure";
//
// const Stories = () => {
//   const { data: stories = [], isLoading } = useQuery({
//     queryKey: ["stories"],
//     queryFn: async () => {
//       const res = await axiosInstance.get("/stories");
//       return res.data.data;
//     },
//   });
//
//   if (isLoading) {
//     return (
//       <div className="text-center text-purple-300 py-10">
//         Loading stories...
//       </div>
//     );
//   }
//
//   return (
//     <section className="px-4 py-16 bg-[#0f172a] text-white">
//       <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
//         🌌 Traveler Stories
//       </h2>
//
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//         {stories.map((story) => (
//           <motion.div
//             key={story._id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#1f2937] to-[#111827] border border-purple-700 hover:border-sky-500 hover:blur-[1px] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_#7c3aed33]"
//           >
//             <div className="relative group">
//               <img
//                 src={story.images[0]}
//                 alt={story.title}
//                 className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//                 <h3 className="text-xl font-semibold text-sky-300">
//                   {story.title}
//                 </h3>
//               </div>
//             </div>
//
//             <div className="p-5 space-y-3">
//               <p className="text-sm text-gray-300">{story.description}</p>
//
//               <div className="flex items-center gap-3 mt-4">
//                 <img
//                   src={story.userPhoto}
//                   alt={story.userName}
//                   className="w-10 h-10 rounded-full border border-purple-500"
//                 />
//                 <div>
//                   <p className="font-medium text-indigo-300">
//                     {story.userName}
//                   </p>
//                   <p className="text-xs text-gray-400">
//                     {new Date(story.createdAt).toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };
//
// export default Stories;
