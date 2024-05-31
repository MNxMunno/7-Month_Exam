import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getCategory: build.query({
      query: (params) => ({
        url: "/products/categories",
        params,
      }),
      providesTags: [""],
    }),
  }),
});

export const { useGetCategoryQuery } = productApi;
