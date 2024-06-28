import styled from "styled-components";
import {clearButtonStyles} from "@/presentation/style/reset";
import Colors from "@/presentation/style/colors";
import MQ from "@/presentation/style/media-queries";

export const BurgerMenuButtonWrapper = styled.button`
    ${clearButtonStyles};
    display: flex;
    align-items: center;
  
    ${MQ.MD}{
      margin-right: 17px;
    }
`

export const BurgerMenuButtonLabel = styled.span`
    display: none;
  
    ${MQ.MD}{
      display: initial;
      font-family: 'PreloSlab-Book', sans-serif;
      font-size: 15px;
      color: ${Colors.secondary};
      margin-left: 4px;
    }
`;