import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { PartialGuild } from "../types/PartialGuild.type";

const useFetchMutualGuilds = () => {
  const [guilds, setGuilds] = useState<[PartialGuild[], PartialGuild[]]>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<[PartialGuild[], PartialGuild[]]>(
        "http://localhost:3001/api/discord/guilds",
        {
          withCredentials: true,
        }
      )
      .then(({ data }) => setGuilds(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { guilds, error, isLoading };
};

export default useFetchMutualGuilds;
