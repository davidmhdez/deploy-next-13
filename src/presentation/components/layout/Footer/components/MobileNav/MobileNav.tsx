import React from 'react';
import Accordion from "@/presentation/components/Accordion";
import {MobileNavLinksList, MobileNavWrapper} from "./styles";
import Link from "next/link";
import {footerLinks} from "../../footerContent";

const MobileNav = () => {
    return (
        <MobileNavWrapper id="mobile-footer-nav">
            {Object.values(footerLinks).map(footerLink=> (
                <Accordion key={footerLink.title} title={footerLink.title}>
                    <MobileNavLinksList>
                        {footerLink.links.map(link=>(
                            <li key={link.title}>
                                <Link href={link.path}>{link.title}</Link>
                            </li>
                        ))}
                    </MobileNavLinksList>
                </Accordion>
            ))}
        </MobileNavWrapper>
    );
};

export default MobileNav;
