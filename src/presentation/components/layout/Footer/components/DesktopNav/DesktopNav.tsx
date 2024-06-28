import React from 'react';
import {DesktopNavWrapper} from "./styles";
import {footerLinks} from "@/presentation/components/layout/Footer/footerContent";
import DesktopNavSection
    from "./components/DesktopNavSection";
import LegalConditionsNavSection
    from "@/presentation/components/layout/Footer/components/DesktopNav/components/LegalConditionsNavSection";

const DesktopNav = () => {
    return (
        <DesktopNavWrapper id="desktop-footer-nav">
            <DesktopNavSection
                title={footerLinks.knowUs.title}
                links={footerLinks.knowUs.links}
            />
            <DesktopNavSection
                title={footerLinks.ourProducts.title}
                links={footerLinks.ourProducts.links}
            />
            <LegalConditionsNavSection/>
        </DesktopNavWrapper>
    );
};

export default DesktopNav;
