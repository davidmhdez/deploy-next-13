'use client'
import React, {ReactNode, useState} from 'react';
import {AccordionBody, AccordionBodyContent, AccordionHeader, AccordionWrapper} from "./styles";
import {useAutoAnimate} from "@formkit/auto-animate/react";

type Props = {
    title: string
    children: ReactNode
    defaultOpen?: boolean
    expandMoreIcon?: ReactNode
}

const Accordion: React.FC<Props> = ({title, children, defaultOpen, expandMoreIcon}) => {
    const [isOpen, setIsOpen] = useState(!!defaultOpen);
    const [parent] = useAutoAnimate();
    const reveal = () => setIsOpen(!isOpen)

    return (
        <AccordionWrapper>
            <AccordionHeader className="accordion-header" $isOpen={isOpen} onClick={reveal}>
                <span className="accordion-title">{title}</span>
                {expandMoreIcon ? expandMoreIcon : <i className="icon-down"/>}
            </AccordionHeader>
            <AccordionBody ref={parent}>
                {isOpen && <AccordionBodyContent className="accordion-body-content">{children}</AccordionBodyContent>}
            </AccordionBody>
        </AccordionWrapper>
    );
};

export default Accordion;
