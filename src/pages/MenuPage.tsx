import {mockGuilds} from "../__mocks__/guild";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {GuildContext} from "../utils/contexts/GuildContext";
import {GuildMenuItem} from "../components/GuildMenuItem";

export const MenuPage = () => {
    const navigate = useNavigate();
    const {updateGuildId} = useContext(GuildContext);
    return (
        <div>
            {/*<ul>
                {mockGuilds.map((guild) => (
                    <li onClick={() => {
                        updateGuildId(guild.id)
                        navigate('/categories')
                    }}>{guild.name}</li>
                ))}
            </ul>*/}
            <h2>Select a Server</h2>
            <div>
                {mockGuilds.map((guild) => ( <GuildMenuItem guild={guild}/>
                ))}
            </div>
        </div>
    );
}