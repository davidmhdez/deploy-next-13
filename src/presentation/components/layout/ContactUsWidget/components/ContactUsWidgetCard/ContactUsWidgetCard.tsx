import React from 'react';
import {
    ContactUsWidgetCardDescription,
    ContactUsWidgetCardTitle,
    ContactUsWidgetCardWrapper
} from "./styles";
import Link from "next/link";

type Props = {
    title: string
    description: string
    path: string
}

const ContactUsWidgetCard: React.FC<Props> = ({title, description, path}) => {
    return (
        <Link href={path}>
            <ContactUsWidgetCardWrapper>
                <ContactUsWidgetCardTitle>{title}</ContactUsWidgetCardTitle>
                <ContactUsWidgetCardDescription>{description}</ContactUsWidgetCardDescription>
            </ContactUsWidgetCardWrapper>
        </Link>
    );
};

export default ContactUsWidgetCard;
