import {useContext} from "react";
import {GuildContext} from "../utils/contexts/GuildContext";
import {Container, Flex, Title} from "../utils/styles";
import {IoSettingsOutline} from 'react-icons/io5'

export const CategoryPage = () => {
    const {guildId} = useContext(GuildContext)
    return (
    <div style={{padding: '50px 0'}}>
        <Container>
            <div>
                <Flex alignItems="center" justifyContent="space-between">
                    <Title>Basic Configurations</Title>
                    <IoSettingsOutline size={40}/>
                </Flex>
            </div>
        </Container>
    </div>
    );
}