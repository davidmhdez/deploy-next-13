import React from 'react';
import {
    ContactUsLink, ContactUsLinkText,
    ContactUsSectionParagraph,
    ContactUsSectionWrapper
} from "./styles";
import Image from "next/image";

const ContactUsSection = () => {
    return (
        <ContactUsSectionWrapper>
            <ContactUsSectionParagraph>Pichincha Miles, para consultas comunícate al</ContactUsSectionParagraph>
            <ContactUsLink href="tel:1800276453">
                <Image
                    src="/images/icons/icon-call-center.svg"
                    alt="call center icon"
                    width={28}
                    height={34}
                />
                <ContactUsLinkText>1800 - BPMILE (276453)</ContactUsLinkText>
            </ContactUsLink>
        </ContactUsSectionWrapper>
    );
};

export default ContactUsSection;
