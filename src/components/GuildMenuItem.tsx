import { GuildMenuItemStyle } from "../utils/styles";
import { PartialGuild } from "../utils/types/PartialGuild.type";
import { getGuildIconUrl } from "../utils/helpers/DiscordCDN";

export const GuildMenuItem = (data: { guild: PartialGuild }) => {
  return (
    <GuildMenuItemStyle>
      <img
        src={getGuildIconUrl(data.guild.id, data.guild.icon)}
        alt={data.guild.name}
        width={40}
        height={40}
        style={{ borderRadius: "50%" }}
      />
      <p>{data.guild.name}</p>
    </GuildMenuItemStyle>
  );
};
