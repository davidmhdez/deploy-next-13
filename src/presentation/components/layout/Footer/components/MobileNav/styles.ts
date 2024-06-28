import styled from "styled-components";
import {clearListStyles} from "@/presentation/style/reset";

export const MobileNavWrapper = styled.div`
    padding: 0 15px;
    width: 100%;
    margin: 0 auto;
    max-width: 720px;
`;

export const MobileNavLinksList = styled.ul`
    ${clearListStyles};
    
    li{
        padding: 7.5px 0;
      
        a{
          text-decoration: none;
          font-family: 'Prelo-Book', sans-serif;
          font-size: 14px;
          color: #dddddd;
          
          &:hover{
              color: #0a58ca;
          }
        }
    }
`