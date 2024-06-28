import styled from "styled-components";
import Colors from "@/presentation/style/colors";

export const ContactUsSectionWrapper = styled.div`
    margin: 16px auto 0 auto;
    max-width: 300px;
`;

export const ContactUsSectionParagraph = styled.p`
    text-align: center;
    color: ${Colors.secondary};
    font-size: 14px;
    font-family: 'Prelo-Book', sans-serif;
`;

export const ContactUsLink = styled.a`
    text-decoration: none;
    color: ${Colors.secondary};
    border-radius: 30px;
    background-color: ${Colors.primary};
    width: 260px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContactUsLinkText = styled.span`
    border-left: 1px solid ${Colors.secondary};
    color: ${Colors.secondary};
    font-size: 14px;
    font-family: 'Prelo-Bold', sans-serif;
    padding: 15px 13px;
    margin-left: 28px;
`;