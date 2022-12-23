import { mockGuilds } from "../__mocks__/guild";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GuildContext } from "../utils/contexts/GuildContext";
import { GuildMenuItem } from "../components/GuildMenuItem";
import { Container, Flex, GuildMenuItemStyle, Page } from "../utils/styles";
import useFetchMutualGuilds from "../utils/hooks/useFetchMutualGuilds";
import { MoonLoader } from "react-spinners";
import { CustomButton } from "../utils/styles/index";

export const MenuPage = () => {
  const navigate = useNavigate();
  const { updateGuildId } = useContext(GuildContext);

  const handleClick = (guildId: string) => {
    updateGuildId(guildId);
    navigate("/dashboard/categories");
  };

  const openInviteLink = () => {
    window.open(
      "https://discord.com/api/oauth2/authorize?client_id=961226893984677888&permissions=8&scope=bot%20applications.commands",
      "_blank",
      "noreferrer"
    );
  };

  const { guilds, error, isLoading } = useFetchMutualGuilds();

  return (
    <Page>
      <Container>
        <h2 style={{ fontWeight: 300 }}>Select a Server</h2>
        <div>
          {isLoading ? (
            <Flex justifyContent="center">
              <MoonLoader size={40} color="white" />
            </Flex>
          ) : guilds?.[0].length === 0 ? (
            <GuildMenuItemStyle onClick={openInviteLink}>
              <p>Looks very empty here... Click here to invite out bot now!</p>
            </GuildMenuItemStyle>
          ) : (
            guilds?.[0].map((guild) => (
              <div onClick={() => handleClick(guild.id)}>
                <GuildMenuItem guild={guild} />
              </div>
            ))
          )}
        </div>
      </Container>
      <Container>
        <h2 style={{ fontWeight: 300 }}>Invite also!</h2>
        <div>
          {isLoading ? (
            <Flex justifyContent="center">
              <MoonLoader size={40} color="white" />
            </Flex>
          ) : (
            guilds?.[1].map((guild) => {
              return (
                <div onClick={openInviteLink}>
                  <GuildMenuItemStyle>
                    <Flex
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                      gap="1rem"
                    >
                      <img
                        src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                        alt={guild.name}
                        width={40}
                        height={40}
                        style={{ borderRadius: "50%" }}
                      />
                      <p>{guild.name}</p>
                    </Flex>
                    <CustomButton>Invite Now!</CustomButton>
                  </GuildMenuItemStyle>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </Page>
  );
};
