import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, QueryParamsPost } from "../types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query<Post[], QueryParamsPost>({
      query: ({ limit, start }) => ({
        url: `posts`,
        method: "GET",
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
