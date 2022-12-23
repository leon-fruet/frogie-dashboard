import React from "react";
import { useState, useEffect } from "react";
import { DiscordGuild } from "../types/DiscordGuild.type";
import axios from "axios";

const useFetchMutualGuilds = () => {
  const [guilds, setGuilds] = useState<[DiscordGuild[], DiscordGuild[]]>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<[DiscordGuild[], DiscordGuild[]]>(
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
