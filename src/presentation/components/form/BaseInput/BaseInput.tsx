import React, {ReactNode} from 'react';
import {
    BaseInputContainer,
    BaseInputError,
    BaseInputLabel,
    BaseInputWrapper
} from "@/presentation/components/form/BaseInput/styles";
import Col from "@/presentation/components/layout/Col";
import {ColSizing} from "@/presentation/components/layout/Col/Col";

export interface BaseInputProps {
    id: string
    children: ReactNode
    name: string
    label?: string
    error?: string
    focused: boolean
    filled: boolean
    icon?: ReactNode
    disabled?: boolean
    size?: ColSizing
}

const BaseInput: React.FC<BaseInputProps> = ({label, error, children, focused, filled, icon, disabled, size}) => {

    return (
        <Col {...size}>
            <BaseInputContainer>
                <BaseInputWrapper
                    $hasError={!!error}
                    $hasLabel={!!label}
                    $filled={filled}
                    $focused={focused}
                    $hasIcon={!!icon}
                    $disabled={disabled}
                >
                    {label && <BaseInputLabel>{label}</BaseInputLabel>}
                    {icon}
                    {children}
                </BaseInputWrapper>
                {error && <BaseInputError>{error}</BaseInputError>}
            </BaseInputContainer>
        </Col>
    );
};

export default BaseInput;
