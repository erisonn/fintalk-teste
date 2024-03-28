import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

export const axiosClient = axios.create({
  baseURL: "http://localhost:3000", // ADD .ENV FILE
});
