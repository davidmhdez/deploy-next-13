import React from 'react';
import {MilesLogoWrapper, PichinchaLogoWrapper, PichinchaMilesLogoWrapper} from "./styles";
import Image from "next/image";
import Link from "next/link";

const PichinchaMilesLogo = () => {
    return (
        <Link href="/">
            <PichinchaMilesLogoWrapper>
                <MilesLogoWrapper>
                    <Image
                        src="images/milesLogo.svg"
                        width={49}
                        height={20}
                        alt="milesLogo"
                    />
                </MilesLogoWrapper>
                <PichinchaLogoWrapper>
                    <Image
                        src="images/pichinchaLogo.svg"
                        width={84}
                        height={20}
                        alt="pichinchaLogo"
                    />
                </PichinchaLogoWrapper>
            </PichinchaMilesLogoWrapper>
        </Link>
    );
};

export default PichinchaMilesLogo;
