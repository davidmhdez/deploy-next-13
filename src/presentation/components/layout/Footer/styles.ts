import styled from "styled-components";
import MQ from "@/presentation/style/media-queries";
import Image from "next/image";

export const FooterWrapper = styled.footer`
    margin-top: auto;  
    width: 100%;
    background-color: #f1f0ed;
  
    #mobile-footer-nav{
      display: block;
      
      ${MQ.LG}{
        display: none;
      }
    }
  
    #desktop-footer-nav{
        display: none;
      
        ${MQ.LG}{
            display: flex;
        }
    }
`;

export const FooterBanner = styled.img`
    width: 100%;
`

export const FooterLogo = styled(Image)`
    margin: 20px auto;
    display: block;
`;
