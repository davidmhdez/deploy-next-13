'use client'
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/presentation/config/store";
import {BurgerMenuAside, BurgerMenuCloseButton, BurgerMenuWrapper} from "./styles";
import {closeMenu} from "@/presentation/redux/features/burgerMenu/burgerMenuSlice";
import BurgerMenuSectionsList from "./components/BurgerMenuSectionsList";

const BurgerMenu = () => {
    const burgerMenu = useSelector((state: RootState)=> state.burgerMenu)
    const dispatch = useDispatch();
    const handleCloseBurgerMenu = () => dispatch(closeMenu());

    return (
        <>
            <BurgerMenuWrapper onClick={handleCloseBurgerMenu} $isOpen={burgerMenu.isOpen}/>
            <BurgerMenuAside $isOpen={burgerMenu.isOpen}>
                <BurgerMenuCloseButton onClick={handleCloseBurgerMenu}>
                    Cerrar <i className="icon-cerrar"/>
                </BurgerMenuCloseButton>
                <BurgerMenuSectionsList/>
            </BurgerMenuAside>
        </>
    );
};

export default BurgerMenu;
