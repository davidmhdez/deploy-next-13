import styled from "styled-components";
import Colors from "@/presentation/style/colors";

export const ContactUsWidgetCardWrapper = styled.div`
    background-color: ${Colors.white};
    border-radius: 0 0 0 14px;
    border: 1px solid #dddddd;
    padding: 14px;
    width: 100%;
`;

export const ContactUsWidgetCardTitle = styled.h6`
    margin: 0;
    font-family: 'Prelo-Book', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 19px;
    color: #4a4a50;
`

export const ContactUsWidgetCardDescription = styled.p`
    margin: 0;
    font-family: 'Prelo-Book', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
    font-style: normal;
    color: #4a4a50;
`;