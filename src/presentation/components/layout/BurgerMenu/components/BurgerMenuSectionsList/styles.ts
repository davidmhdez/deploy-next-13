import styled from "styled-components";
import {clearListStyles} from "@/presentation/style/reset";
import Colors from "@/presentation/style/colors";

export const BurgerMenuSectionsListWrapper = styled.div`
    .accordion-header{
        .accordion-title{
            font-weight: bold;
        }
      
        i{
          transform: rotate(0);
          color: #DEDEDE;
        }
    }
  
    .accordion-body-content{
        padding: 0;
    }
`

export const BurgerMenuSectionContent = styled.ul`
    ${clearListStyles};
    
    li{
        padding: 16px 32px;
        border-bottom: 1px solid #DEDEDE;
      
        a, p{
          color: ${Colors.secondary};
          font-family: 'Prelo-Book', sans-serif;
          font-size: 15px;
          font-weight: 200;
          text-decoration: none;
          margin: 0;
          cursor: pointer;
          
          &:hover{
            color: ${Colors.primary};
          }
        }
    }
`;