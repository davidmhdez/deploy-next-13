import React from 'react';
import {
    BurgerMenuSectionContent,
    BurgerMenuSectionsListWrapper
} from "./styles";
import Accordion from "@/presentation/components/Accordion";
import burgerMenuSections
    , {
    BurgerMenuSection
} from "@/presentation/components/layout/BurgerMenu/components/BurgerMenuSectionsList/burguerMenuSections";

const BurgerMenuSectionsList = () => {
    return (
        <BurgerMenuSectionsListWrapper>
            {Object.values(burgerMenuSections).map(burgerMenu=> (
                <Accordion title={burgerMenu.title} key={burgerMenu.title} expandMoreIcon={<i className="icon-menu"/>}>
                    <BurgerMenuSectionContent>
                        {burgerMenu.sections.map((section: BurgerMenuSection) => (
                            <li key={section.title}>
                                <p>{section.title}</p>
                            </li>
                        ))}
                    </BurgerMenuSectionContent>
                </Accordion>
            ))}
        </BurgerMenuSectionsListWrapper>
    );
};

export default BurgerMenuSectionsList;
