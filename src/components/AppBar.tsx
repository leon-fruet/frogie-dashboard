import {AppBarStyle} from "../utils/styles";
import Icon1 from '../assets/icon1.jpg'
import {useContext} from "react";
import {GuildContext} from "../utils/contexts/GuildContext";

export const AppBar = () => {
    return (
        <AppBarStyle>
            <h1 style={{fontWeight: 'normal', fontSize: '20px'}}>Configuring</h1>
            <img
                src={Icon1}
                height={55}
                width={55}
                style={{borderRadius: '50%'}}
                alt="logo" />
        </AppBarStyle>
    );
};