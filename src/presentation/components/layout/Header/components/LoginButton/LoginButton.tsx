import React from 'react';
import {
    LoginButtonUserIcon,
    LoginButtonWrapper
} from "./styles";

const LoginButton = () => {
    return (
        <LoginButtonWrapper>
            <LoginButtonUserIcon src="images/icons/user.png" alt="user icon"/>
            <span>Ingresar</span>
        </LoginButtonWrapper>
    );
};

export default LoginButton;
