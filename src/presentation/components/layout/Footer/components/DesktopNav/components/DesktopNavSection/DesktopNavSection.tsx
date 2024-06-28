import React from 'react';
import {
    DesktopNavLinksList,
    DesktopNavSectionTitle,
    DesktopNavSectionWrapper
} from "../../styles";
import {FooterLink} from "../../../../footerContent";
import Link from "next/link";

type Props = {
    title: string
    links: FooterLink[]
}

const DesktopNavSection: React.FC<Props> = ({title, links}) => {
    return (
        <DesktopNavSectionWrapper>
            <DesktopNavSectionTitle>{title}</DesktopNavSectionTitle>
            <DesktopNavLinksList>
                {links.map(link=> (
                    <li key={link.title}>
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </DesktopNavLinksList>
        </DesktopNavSectionWrapper>
    );
};

export default DesktopNavSection;
