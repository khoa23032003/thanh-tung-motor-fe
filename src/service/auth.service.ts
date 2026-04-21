import { api } from "@/src/lib/axios";
import { LogIn } from "lucide-react";

export const authService = {
  LogIn: async (data: { email: string; password: string }) => {
    const res = await api.post("/auth/login", data);
    return res.data;
  },

};
