import React, { ReactNode } from 'react';
import styled from 'styled-components';
import MQ from "@/presentation/style/media-queries";

const ColWrapper = styled.div<Props>`
    width: calc(100% - 20px);
    margin: 10px;
    flex: 0 0 auto;

    ${MQ.SM}{
        ${({sm}) => sm && sm < 12 ? `width: calc(${sm * 8.33}% - 20px)` : ''};
    }

    ${MQ.MD}{
        ${({md}) => md && md < 12 ? `width: calc(${md * 8.33}% - 20px)` : ''};
    }

    ${MQ.LG}{
        ${({lg}) => lg && lg < 12 ? `width: calc(${lg * 8.33}% - 20px)` : ''};
    }

    ${MQ.XL}{
        ${({xl}) => xl && xl < 12 ? `width: calc(${xl * 8.33}% - 20px)` : ''};
    }

    ${MQ.XXL}{
        ${({xxl}) => xxl && xxl < 12 ? `width: calc(${xxl * 8.33}% - 20px)` : ''};
    }
`;

export type ColSizing = {
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xxl?: number
}

type Props = {
    children: ReactNode,
} & ColSizing

const Col: React.FC<Props> = ({children, sm, md, lg, xl, ...rest}) => {
    return (
        <ColWrapper sm={sm} md={md} lg={lg} xl={xl} {...rest}>
            {children}
        </ColWrapper>
    );
};

export default Col;