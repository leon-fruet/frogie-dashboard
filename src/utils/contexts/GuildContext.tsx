import { createContext } from "react";
import { PartialGuild } from "../types/PartialGuild.type";

type GuildContextType = {
  guild?: PartialGuild;
  updateGuild: (guild: PartialGuild) => void;
};

export const GuildContext = createContext<GuildContextType>({
  updateGuild: () => {},
});
