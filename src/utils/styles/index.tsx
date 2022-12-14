import styled, {css} from "styled-components";

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
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3);
`;

export const TextButton = styled(MainButton)`
  padding: 18px 28px;
  width: 100%;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
`;

export const InputField = styled.input`
  padding: 14px 16px;
  box-sizing: border-box;
  font-size: 16px;
  color: #fff;
  font-family: 'DM Sans';
  background-color: #282B30;
  border-radius: 5px;
  border: 1px solid #1E2124;
  outline: none;
  width: 100%;
  :focus {
    outline: 1px solid #ffffff5a;
  }
`;

export const TextArea = styled.textarea`
  padding: 14px 16px;
  box-sizing: border-box;
  font-size: 16px;
  color: #fff;
  font-family: 'DM Sans';
  background-color: #282B30;
  border-radius: 5px;
  border: 1px solid #1E2124;
  outline: none;
  width: 100%;
  resize: none;
  :focus {
    outline: 1px solid #ffffff5a;
  }
`;

type ButtonProps = {
    variant: 'primary' | 'secondary';
};
export const Button = styled.button<ButtonProps>`
  padding: 10px 24px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 16px;
  color: #fff;
  font-family: 'DM Sans';
  cursor: pointer;
  ${({variant}) => variant === 'primary' && css`
    background-color: #7289DA;
  `}
  ${({variant}) => variant === 'secondary' && css`
    background-color: #424549;
  `}
`;

export const Page = styled.div`
    padding: 50px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-family: 'DM Sans';
  font-size: 18px;
  background-color: inherit;
  padding: 12px 16px;
  color: #fff;
  border: 1px solid #1E2124;
  border-radius: 5px;
  & > option{
    background-color: #36393E;
    
  }
`;