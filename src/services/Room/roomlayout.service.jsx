import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseUrl } from "../Auth/auth.service";

// Create the API with Redux Toolkit Query
export const roomLayoutApi = createApi({
  reducerPath: "roomLayoutApi",
  baseQuery: fetchBaseUrl,
  endpoints: (builder) => ({
    getAllRoomLayouts: builder.query({
      query: () => ({
        url: `/api/roomlayout`, // URL to fetch seats by room type
        method: "GET",
      }),
    }),

    // Get all rooms by room type
    getSeatsByRoomId: builder.query({
      query: (room_id) => ({
        url: `/api/room-layout/${room_id}`, // URL to fetch seats by room type
        method: "GET",
      }),
    }),

    // Create a new room layout (with an empty seats array)
    addRoomLayout: builder.mutation({
      query: (newRoomLayout) => ({
        url: "/api/room-layout/create",
        method: "POST",
        body: newRoomLayout, // Pass the new room layout object
      }),
    }),

    // API để thêm ghế vào phòng
    addSeatToRoomLayout: builder.mutation({
      query: ({ roomId, row, seat_number, seat_type }) => ({
        url: `/api/room-layout/${roomId}/seats`,
        method: "POST",
        body: { row, seat_number, seat_type }, // Truyền thông tin ghế
      }),
    }),

    // API để xoá ghế khỏi phòng
    removeSeatFromRoomLayout: builder.mutation({
      query: ({ roomId, seatId }) => ({
        url: `/api/room-layout/${roomId}/seats/${seatId}`,
        method: "DELETE",
      }),
    }),

    addMultipleSeatsToRoomLayout: builder.mutation({
        query: ({ roomId, seats }) => ({
          url: `/api/room-layout/${roomId}/seats/multiple`,
          method: 'POST',
          body: { seats }, // Pass the array of seats to be added
        }),
      }),
  }),
});

// Export hooks to be used in components
export const {
  useGetAllRoomLayoutsQuery, //
  useGetSeatsByRoomIdQuery, //
  useAddRoomLayoutMutation, //
  useAddSeatToRoomLayoutMutation, //
  useRemoveSeatFromRoomLayoutMutation, //
  useAddMultipleSeatsToRoomLayoutMutation //
} = roomLayoutApi;
