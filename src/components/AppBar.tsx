import { AppBarStyle } from "../utils/styles";
import Icon1 from "../assets/icon1.jpg";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { getGuildIconUrl } from "../utils/helpers/DiscordCDN";

export const AppBar = () => {
  const { guild } = useContext(GuildContext);

  function guildIcon(): string {
    if (guild) {
      return getGuildIconUrl(guild?.id, guild?.icon);
    } else {
      return Icon1;
    }
  }

  return (
    <AppBarStyle>
      <h1 style={{ fontWeight: "normal", fontSize: "20px" }}>{guild?.name}</h1>
      <img
        src={guildIcon()}
        height={55}
        width={55}
        style={{ borderRadius: "50%" }}
        alt="logo"
      />
    </AppBarStyle>
  );
};
