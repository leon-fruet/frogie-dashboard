import {GuildMenuItemStyle} from "../utils/styles";

type Props = {
    guild: {
        id: string;
        name: string;
        icon: string;
    }
}
export const GuildMenuItem = ({guild}: Props) => <GuildMenuItemStyle>
    <img src={guild.icon} alt={guild.name}/>
    <p>{guild.name}</p>
</GuildMenuItemStyle>