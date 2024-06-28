'use client'
import React from 'react';
import {FooterBanner, FooterLogo, FooterWrapper} from "./styles";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import ContactUsSection from "./components/ContactUsSection";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterBanner
                src="/images/footerBanner.jpeg"
                alt="footer banner"
            />
            <MobileNav/>
            <DesktopNav/>
            <ContactUsSection/>
            <FooterLogo
                src="/images/pichinchaLogo.svg"
                alt="pichincha logo"
                width={149}
                height={32}
            />
        </FooterWrapper>
    );
};

export default Footer;
