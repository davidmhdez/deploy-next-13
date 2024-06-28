import styled from "styled-components";
import Colors from "@/presentation/style/colors";
import {clearButtonStyles} from "@/presentation/style/reset";

export const BurgerMenuWrapper = styled.div<{$isOpen: boolean}>`
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    opacity: ${({$isOpen})=> $isOpen ? 0.5 : 0};
    visibility: ${({$isOpen})=> $isOpen ? 'visible' : 'hidden'};
    transition: opacity 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
`;

export const BurgerMenuAside = styled.div<{$isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: ${Colors.white};
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    z-index: 6;
    transition: transform 0.3s ease;
    transform: ${({$isOpen})=> !$isOpen ? "translateX(300px)" : "translateX(0)"};
`;

export const BurgerMenuCloseButton = styled.button`
    ${clearButtonStyles};
    width: 100%;
    border-bottom: 1px solid #dddddd;
    padding: 15px;
    text-align: right;
    color: ${Colors.secondary};
    font-family: 'Prelo-Book', sans-serif;
    font-size: 14px;
`;