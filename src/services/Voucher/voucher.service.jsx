import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Function to get the access token from localStorage
const getAccessToken = () => localStorage.getItem('accessToken');

// Tạo API với Redux Toolkit Query
export const voucherApi = createApi({
  reducerPath: 'voucherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4003/', // Your API base URL
    prepareHeaders: (headers) => {
      // Get token from localStorage
      const token = getAccessToken();
      // If token exists, add it to the Authorization header
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({

    getVoucher: builder.query({
      query: () => '/api/voucher/', 
    }),
    getVoucherUser: builder.query({
        query: (id) => `/api/codeVoucherUser/${id}`, 
        method: 'GET',
      }),
    createVoucher: builder.mutation({
        query: (dataVoucherUser) => ({
          url: `/api/codeVoucherUser`,
          method: "POST",
          body: {...dataVoucherUser},  //...  đây chính  lầ lấy giá trị trực tiếp  idUser , Idvoucher
        }),
      }),

     
  }),
});

// Xuất các hook để sử dụng trong component
export const {
    useGetVoucherQuery,
    useGetVoucherUserQuery,
    useCreateVoucherMutation
    
} = voucherApi;
