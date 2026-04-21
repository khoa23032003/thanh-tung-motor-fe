import { User } from "@/.next/types/user.type";
import { userService } from "@/src/service/user.service";
import { useEffect, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userService
      .getUsers()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
};
