import {mockGuilds} from "../__mocks__/guild";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {GuildContext} from "../utils/contexts/GuildContext";
import {GuildMenuItem} from "../components/GuildMenuItem";
import {Container} from "../utils/styles";

export const MenuPage = () => {
    const navigate = useNavigate();
    const {updateGuildId} = useContext(GuildContext);

    const handleClick = (guildId: string) => {
        updateGuildId(guildId);
        navigate('/dashboard/categories')
    }
    return (
        <div style={{padding: '50px 0'}}>
            <Container>
                <h2 style={{fontWeight: 300}}>Select a Server</h2>
                <div>
                    {mockGuilds.map((guild) => ( <div onClick={() => handleClick(guild.id)}>
                            <GuildMenuItem guild={guild}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}