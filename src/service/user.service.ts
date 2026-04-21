import { User } from "@/.next/types/user.type";
import { api } from "@/src/lib/axios";

export const userService = {
  getUsers: async (): Promise<User[]> => {
    // console.log(api.defaults.baseURL + "/user");
    const res = await api.get("/user");

    return res.data;
  },
};
