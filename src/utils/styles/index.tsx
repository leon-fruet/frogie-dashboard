import styled from "styled-components";

export const MainButton = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  background-color: #282B30;
  padding: 4px 50px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0px 1px 5px 0px #000;
`;

export const HomePageStyle = styled.div`
  height: 100%;
  padding: 100px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const GuildMenuItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  background-color: #282B30;
  border-radius: 5px;
  margin: 8px 0;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const AppBarStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 35px;
  box-sizing: border-box;
  background-color: #282B30;
`;

export const Title = styled.p`
  font-size: 22px;
`;

type FlexProps = Partial<{
    alignItems: string;
    justifyContent: string;
    flexDirection: string;
}>;
export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({alignItems}) => alignItems};
  justify-content: ${({justifyContent}) => justifyContent};
  flex-direction: ${({flexDirection}) => flexDirection};
`;