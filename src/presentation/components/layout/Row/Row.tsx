import React, { ReactNode } from 'react';
import styled from 'styled-components';

const RowWrapper = styled.div`
    display: flex;
    margin: -10px;
    flex-wrap: wrap;
`;

type Props = {
    children: ReactNode
}

const Row = ({children, ...rest}: Props) => (
    <RowWrapper {...rest}>
        {children}
    </RowWrapper>
)

export default Row;