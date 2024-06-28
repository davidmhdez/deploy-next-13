import styled from "styled-components";
import MQ from "@/presentation/style/media-queries";
import Colors from "@/presentation/style/colors";
import {clearButtonStyles} from "@/presentation/style/reset";

export const ShoppingCartIndicatorWrapper = styled.button`
    ${clearButtonStyles};  
    display: flex;
    position: relative;
    width: 34px;
    height: 26px;

    ${MQ.MD}{
      width: initial;
      height: initial;
    }
  
    i{
      color: ${Colors.secondary};
      font-size: 16px;
    }
`;

export const ShoppingCartIndicatorLabel = styled.span`
    display: none;
    font-family: 'PreloSlab-Book', sans-serif;
    font-size: 15px;
    color: ${Colors.secondary};
  
    ${MQ.MD}{
      display: block;
      margin: 0 10px;
    } 
`;

export const ShoppingCartQuantityIndicator = styled.div`
    border: 1px solid ${Colors.secondary};
    background-color: ${Colors.white};
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: absolute;
    right: 0;
    bottom: 0;

    ${MQ.MD}{
      position: static;
      width: 20px;
      height: 20px;
    }
    
    
    &:hover{
      background-color: ${Colors.primary};
    }
  
    span{
      display: none;
      font-family: 'PreloSlab-Book', sans-serif;
      font-size: 15px;
      color: ${Colors.secondary};

      ${MQ.MD}{
        display: initial;
      }
    }
`;