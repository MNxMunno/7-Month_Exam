import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (query) => ({
        url: `/products/${query.path}`,
        params: query.params,
      }),
      providesTags: ["Product"],
    }),
    getDetailProducts: build.query({
      query: (id) => ({
        url: `/products${id}`,
      }),
      providesTags: ["Product"],
    }),
    // Post request
    createProduct: build.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    // Patch request

    // Delete request
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/products`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  // useUpdateProductMutation,
  useGetDetailProductsQuery,
} = productApi;
