import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getAccessToken = () => localStorage.getItem('accessToken');

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4003/',
    prepareHeaders: (headers) => {
      const token = getAccessToken();
      console.log('Token từ localStorage:', token); // Log token để kiểm tra
      if (token) {
        headers.set('x-access-token', `Bearer ${token}`);
        console.log('Authorization header set:', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    postComments: builder.mutation({
      query: (credentials) => ({
        url: '/api/comment',
        method: 'POST',
        body: credentials,
      }),
    }),
    getComments: builder.query({
      query: (movieId) => `/api/comment/${movieId}`,
    }),
    getUserById: builder.query({
      query: (userId) => `/api/auth/${userId}`, 
    }),
  }),
});

<<<<<<< HEAD
export const { useGetCommentsQuery, usePostCommentsMutation,useGetUserByIdQuery } = apiComents;
=======
export const { useGetCommentsQuery, usePostCommentsMutation } = commentsApi;
>>>>>>> e900a0e5aa161952fba2d8877a9a589411f6b2d4
