'use client'
import React from 'react';
import {HeaderNavigation, HeaderNavigationSeparator, HeaderWrapper} from "./styles";
import PichinchaMilesLogo from "./components/PichinchaMilesLogo";
import LoginButton from "./components/LoginButton";
import ShoppingCartIndicator from "./components/ShoppingCartIndicator";
import BurgerMenuButton from "./components/BurgerMenuButton";
import Image from 'next/image';

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
            <Image 
                src="https://gn-resources.preprodppm.com/public/banners/dfa9b3cb-9970-4645-a4e0-4916c317f69a/b5367bca-463d-449a-8d5b-adf9f2bad369.jpg" 
                alt='imagen'
                width={640}
                height={75}
            />
        </HeaderWrapper>
    );
};

export default Header;
