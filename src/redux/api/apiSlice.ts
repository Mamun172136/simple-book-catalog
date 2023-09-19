import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: "POST",
        body: data,
      }),
    }),

    getComment: builder.query({
      query: (id) => `/comment/${id}`, // Use backticks here
      providesTags: ["comments"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = api;
