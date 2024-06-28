import styled from "styled-components";
import MQ from "@/presentation/style/media-queries";
import Colors from "@/presentation/style/colors";
import {clearButtonStyles} from "@/presentation/style/reset";

export const LoginButtonWrapper = styled.button`
  ${clearButtonStyles};
  max-height: 23px;
  
  ${MQ.MD}{
    font-family: 'PreloSlab-Book', sans-serif;
    font-size: 15px;
    color: ${Colors.white};
    background-color: ${Colors.secondary};
    border: 1px solid ${Colors.secondary};
    border-radius: 0 0 0 10px;
    max-height: initial;
    padding: 8px 20px;
  }
  
  span{
    display: none;
    
    ${MQ.MD}{
      display: initial;
    }
  }
`;

export const LoginButtonUserIcon = styled.img`
    width: 21px;
    height: 23px;

    ${MQ.MD}{
      display: none;
    }
`;