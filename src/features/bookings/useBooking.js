import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router";

export function useBooking() {
  const { bookingId } = useParams();
//   console.log('bookingid',bookingId);
  const {
    isLoading,
    isPending,
    data: booking,
    error,
  } = useQuery({
    queryKey:["booking",bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

//  console.log('booking',booking);
//  console.log('booking status',booking.status);
  return { isPending, error, booking };
}
