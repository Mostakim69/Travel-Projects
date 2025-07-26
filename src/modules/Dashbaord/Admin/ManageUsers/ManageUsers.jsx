import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users", search, role],
    queryFn: async () => {
      const params = {};
      if (search) params.search = search;
      if (role) params.role = role;
      const res = await axiosSecure.get("/users", { params });
      return res.data?.data || [];
    },
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Manage Users</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          className="px-3 py-2 border rounded bg-gray-800 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-3 py-2 border rounded bg-gray-800 text-white"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="tourist">Tourist</option>
          <option value="tour-guide">Tour Guide</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {isLoading ? (
        <p className="text-white">Loading users...</p>
      ) : isError ? (
        <p className="text-red-500">Failed to load users.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-700 text-white">
            <thead>
              <tr className="bg-gray-900">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr
                  key={user._id}
                  className="text-center border-t border-gray-700"
                >
                  <td className="p-2 border">{idx + 1}</td>
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
