import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

export const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api", // ADD .ENV FILE
  withCredentials: true,
});
