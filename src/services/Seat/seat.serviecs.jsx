import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseUrl } from "../Auth/auth.service";

// Tạo API với Redux Toolkit Query
export const seatApi = createApi({
  reducerPath: 'seatApi',
  baseQuery: fetchBaseUrl,
  endpoints: (builder) => ({

    // Lấy tất cả ghế của một phòng
    getSeatsByRoom: builder.query({
      query: (roomId) => `/api/rooms/${roomId}/seats`, // Đường dẫn đến API lấy ghế trong phòng
    }),


    getSeatTypesByRoomID: builder.query({
      query: (roomId) => `api/rooms/${roomId}/seats/types`,
    }),

    getSeatTypes: builder.query({
      query: () => `api/rooms/seats/types`,
    }),

    // Thêm một ghế
    addSeat: builder.mutation({
      query: ({ room_id, row, seat_number, seat_type, base_price }) => ({
        url: `/api/rooms/${room_id}/seat`,
        method: 'POST',
        body: { room_id, row, seat_number, seat_type, base_price }, 
      }),
    }),

    // Thêm nhiều ghế vào một hàng trong phòng
   addSeatsInRow: builder.mutation({
      query: ({ room_id, row, seatCount, seat_type, base_price }) => ({
        url: `/api/rooms/${room_id}/seats`,
        method: 'POST',
        body: { room_id, row, seatCount, seat_type, base_price }, // Dữ liệu để thêm ghế
      }),
    }),

    createSeatsForRoom: builder.mutation({
      query: (roomId) => ({
        url: `/api/create-seats/${roomId}`,
        method: 'POST',
      }),
    }),

    // Cập nhật giá ghế theo loại ghế hoặc loại ngày
    updateSeatPrices: builder.mutation({
      query: ({ roomId, seat_type, day_type, new_price }) => ({
        url: `/api/rooms/${roomId}/seats/update-price`,
        method: 'PATCH',
         body: { seat_type, day_type, new_price }, // Dữ liệu để cập nhật giá
      }),
    }),

    // Cập nhật all
    updateAllSeatPrices: builder.mutation({
      query: (prices) => ({
        url: '/api/seats/update-all',
        method: 'PATCH',  // Đổi thành PATCH
        body: prices,
      }),
    }),

    updateSeatStatus: builder.mutation({
      query: ({ seatId, newStatus }) => ({
        url: `/api/seats/${seatId}/status`,
        method: "PUT",
        body: { newStatus },
      }),
    }),

    // Xóa một ghế cụ thể
    deleteSeat: builder.mutation({
      query: (seatId) => ({
        url: `/api/seats/${seatId}`, // Đường dẫn đến API xóa ghế theo ID
        method: 'DELETE',
      }),
    }),
  }),
});

// Xuất các hook để sử dụng trong component
export const {
  useGetSeatsByRoomQuery, //
  useGetSeatTypesQuery,//
  useGetSeatTypesByRoomIDQuery,//
  useAddSeatMutation, //
  useAddSeatsInRowMutation,//
  useUpdateSeatPricesMutation,//
  useUpdateAllSeatPricesMutation,//
  useUpdateSeatStatusMutation,//
  useDeleteSeatMutation, //
  useCreateSeatsForRoomMutation //
} = seatApi;
