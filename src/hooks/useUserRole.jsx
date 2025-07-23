import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: userData = null,
    isLoading: roleLoading,
    refetch,
  } = useQuery({
    queryKey: ["userRole", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/email/tourist5@example.com`);
      return res.data.data; // should be the full user object
    },
  });

  const role = userData?.role || "user";

  return {
    role,
    userData,
    roleLoading: authLoading || roleLoading,
    refetch,
  };
};

export default useUserRole;

// import { useQuery } from '@tanstack/react-query';
// import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';
//
// const useUserRole = () => {
//     const { user, loading: authLoading } = useAuth();
//     const axiosSecure = useAxiosSecure();
//
//     const {
//         data: role = 'user',
//         isLoading: roleLoading,
//         refetch,
//     } = useQuery({
//         queryKey: ['userRole', user?.email],
//         enabled: !authLoading && !!user?.email,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/${user.email}/role`);
//             return res.data.role;
//         },
//     });
//
//     return { role, roleLoading: authLoading || roleLoading, refetch };
// };
//
// export default useUserRole;
