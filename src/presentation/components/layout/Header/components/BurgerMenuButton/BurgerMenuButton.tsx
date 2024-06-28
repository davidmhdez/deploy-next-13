import React from 'react';
import {
    BurgerMenuButtonLabel,
    BurgerMenuButtonWrapper
} from "./styles";
import {useDispatch} from "react-redux";
import {openMenu} from "@/presentation/redux/features/burgerMenu/burgerMenuSlice";

const BurgerMenuButton = () => {
    const dispatch = useDispatch();
    const handleOpenBurgerMenu = () => dispatch(openMenu());

    return (
        <BurgerMenuButtonWrapper onClick={handleOpenBurgerMenu}>
            <i className="icon-menu" />
            <BurgerMenuButtonLabel>Menú</BurgerMenuButtonLabel>
        </BurgerMenuButtonWrapper>
    );
};

export default BurgerMenuButton;
