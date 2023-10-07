import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    // getBooks: builder.query({
    //   query: (searchTerm,) => `/books?searchTerm=${searchTerm}`,
    //   providesTags: ["comments"],
    // }),

    getBooks: builder.query({
      query: ({ searchTerm, genre, publicationDate }) =>
        `/books?searchTerm=${searchTerm}&genre=${genre}&publicationDate=${publicationDate}`,
      providesTags: ["comments"],
    }),
    getFeaturedBooks: builder.query({
      query: () => `/featuredBooks`,
      providesTags: ["comments"],
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
      invalidatesTags: ["comments"],
    }),

    postBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),

    updateBook: builder.mutation({
      query: ({ data, id }) => ({
        url: `/book/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
        // body: data,
      }),
      invalidatesTags: ["comments"],
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
  usePostBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetFeaturedBooksQuery,
} = api;
