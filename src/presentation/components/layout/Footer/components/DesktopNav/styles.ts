import styled from "styled-components";
import Colors from "@/presentation/style/colors";
import {clearListStyles} from "@/presentation/style/reset";

export const DesktopNavWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 960px;
    margin: 0 auto;
`;

export const DesktopNavSectionWrapper = styled.div`
    padding: 0 12px;
    width: 50%;
`;

export const DesktopNavSectionTitle = styled.h6`
    color: ${Colors.secondary};
    margin-bottom: 33px;
    font-size: 20px;
    font-family: 'PreloSlab', sans-serif;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;
`;

export const DesktopNavLinksList = styled.ul`
    ${clearListStyles};
  
    li {
        text-align: center;
        a{
            text-decoration: none;           
            color: ${Colors.secondary};
            font-size: 14px;
            font-family: 'Prelo-Book', sans-serif;
            line-height: 1.5;
        }
    }
`;