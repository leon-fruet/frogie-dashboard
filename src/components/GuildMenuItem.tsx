import { GuildMenuItemStyle } from "../utils/styles";
import { DiscordGuild } from "../utils/types/DiscordGuild.type";

export const GuildMenuItem = (data: { guild: DiscordGuild }) => {
  const guildIconUrl = `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png`;

  return (
    <GuildMenuItemStyle>
      <img
        src={guildIconUrl}
        alt={data.guild.name}
        width={40}
        height={40}
        style={{ borderRadius: "50%" }}
      />
      <p>{data.guild.name}</p>
    </GuildMenuItemStyle>
  );
};
