import styled from "styled-components";
import Colors from "@/presentation/style/colors";
import {clearButtonStyles} from "@/presentation/style/reset";

export const ContactUsWidgetWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 16px;
    z-index: 2;
    width: 250px;
    background-color: ${Colors.white};
    box-shadow: 0 0 4px 1px #00000040;
    padding: 11px 15px;
`;

export const ContactUsWidgetButton = styled.button`
    ${clearButtonStyles};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const ContactUsWidgetText = styled.p`
    margin: 0;
    color: ${Colors.secondary};
    font-size: 15px;
    font-family: 'Prelo-Book', sans-serif;
    font-style: normal;
    line-height: 19px;
    font-weight: 400;
`;

export const ContactUsWidgetCardList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  
    a{
      text-decoration: none;
    }
`;