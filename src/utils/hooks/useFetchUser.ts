import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../types/User.type";
export function useFetchUser() {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<User>("http://localhost:3001/api/auth/status", {
        withCredentials: true,
      })
      .then(({ data }) => setUser(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { user, error, isLoading };
}
