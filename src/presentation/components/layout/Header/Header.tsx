'use client'
import React from 'react';
import {HeaderNavigation, HeaderNavigationSeparator, HeaderWrapper} from "./styles";
import PichinchaMilesLogo from "./components/PichinchaMilesLogo";
import LoginButton from "./components/LoginButton";
import ShoppingCartIndicator from "./components/ShoppingCartIndicator";
import BurgerMenuButton from "./components/BurgerMenuButton";

const Header = () => {
    return (
        <HeaderWrapper>
            <PichinchaMilesLogo/>
            <HeaderNavigation>
                <LoginButton/>
                <HeaderNavigationSeparator/>
                <ShoppingCartIndicator/>
                <HeaderNavigationSeparator/>
                <BurgerMenuButton/>
            </HeaderNavigation>
        </HeaderWrapper>
    );
};

export default Header;
