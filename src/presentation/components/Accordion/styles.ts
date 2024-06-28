import styled from "styled-components";
import Colors from "@/presentation/style/colors";
import {clearButtonStyles} from "@/presentation/style/reset";

export const AccordionWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const AccordionHeader = styled.button<{$isOpen: boolean}>`
    ${clearButtonStyles};
    padding: 16px 20px;
    width: 100%;
    color: ${Colors.secondary};
    font-family: 'PreloSlab', sans-serif;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dddddd;
  
    i{
      ${({$isOpen})=> $isOpen && "transform: rotate(180deg);"};
      transition: all 0.3s ease;
    }
`;

export const AccordionBody = styled.div`
    color: ${Colors.secondary};
    font-family: 'Prelo-Book', sans-serif;
    font-size: 14px;
`;

export const AccordionBodyContent = styled.div`
    padding: 16px 20px;
`;