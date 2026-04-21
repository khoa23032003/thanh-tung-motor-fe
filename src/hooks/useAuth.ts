import { authService } from "@/src/service/auth.service";
import { useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      const data = await authService.LogIn({ email, password });

      // lưu token
      localStorage.setItem("access_token", data.access_token);

      return data;
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
