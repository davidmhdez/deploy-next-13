'use client'
import React, {useState} from 'react';
import {
    ContactUsWidgetButton, ContactUsWidgetCardList,
    ContactUsWidgetText,
    ContactUsWidgetWrapper
} from "./styles";
import Image from "next/image";
import ContactUsWidgetCard from "./components/ContactUsWidgetCard";

const ContactUsWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickWidget = () => setIsOpen(!isOpen);

    return (
        <ContactUsWidgetWrapper>
            <ContactUsWidgetButton onClick={handleClickWidget}>
                <ContactUsWidgetText>¿Cómo podemos ayudarte?</ContactUsWidgetText>
                <Image
                    src="/images/icons/alert.svg"
                    alt="alert icon"
                    width={16}
                    height={20}
                />
            </ContactUsWidgetButton>
            {isOpen
                &&
                <ContactUsWidgetCardList>
                    <ContactUsWidgetCard
                        title="Asistencia web"
                        description="Accede a nuestras preguntas y formulario de contacto."
                        path="/"
                    />
                    <ContactUsWidgetCard
                        title="Asistencia telefónica"
                        description="Comunícate con nuestros asesores."
                        path="tel:1800276453"
                    />
                </ContactUsWidgetCardList>
            }
        </ContactUsWidgetWrapper>
    );
};

export default ContactUsWidget;
