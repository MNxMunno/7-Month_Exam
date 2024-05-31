// import { api } from "./api";

// export const usersApi = api.injectEndpoints({
//   endpoints: (build) => ({
//     // Get request
//     getUsers: build.query({
//       query: (params) => ({
//         url: "/users",
//         method: "GET",
//         params,
//       }),
//       providesTags: ["User"],
//     }),
//     postUsers: build.mutation({
//       query: (body) => ({
//         url: "/auth/login",
//         method: "POST",
//         body,
//       }),
//       providesTags: ["User"],
//     }),
//   }),
// });

// export const { useGetUsersQuery, usePostUsersMutation } = usersApi;
