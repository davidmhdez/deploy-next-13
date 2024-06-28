import styled from "styled-components";
import {clearListStyles} from "@/presentation/style/reset";
import Colors from "@/presentation/style/colors";

export const LegalConditionsNavSectionWrapper = styled.ul`
    ${clearListStyles};
    display: flex;
    margin: 23px auto 0 auto;
    
    li{
        padding: 0 10px;
        position: relative;
      
        &:not(:last-child):after{
          position: absolute;
          content: '';
          width: 1px;
          height: 18px;
          background-color: ${Colors.secondary};
          top: 0;
          right: 0;
        }
      
        a{
            text-decoration: none;
            color: ${Colors.secondary};
            text-transform: uppercase;
            font-size: 12px;
            font-family: 'Prelo-Book', sans-serif;
        }
    }
`;