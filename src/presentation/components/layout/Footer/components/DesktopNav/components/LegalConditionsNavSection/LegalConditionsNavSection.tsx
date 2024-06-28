import React from 'react';
import {
    LegalConditionsNavSectionWrapper
} from "./styles";
import {footerLinks} from "@/presentation/components/layout/Footer/footerContent";
import Link from "next/link";

const LegalConditionsNavSection = () => {
    return (
        <LegalConditionsNavSectionWrapper>
            {footerLinks.legalConditions.links.map(link=> (
                <li key={link.title}>
                    <Link href={link.path}>{link.title}</Link>
                </li>
            ))}
        </LegalConditionsNavSectionWrapper>
    );
};

export default LegalConditionsNavSection;
