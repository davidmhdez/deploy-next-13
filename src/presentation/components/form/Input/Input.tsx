import React, {useState} from 'react';
import BaseInput from "../BaseInput";
import {BaseInputProps} from "@/presentation/components/form/BaseInput/BaseInput";

export type InputProps = {
    value: string
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
} & Omit<BaseInputProps, 'children' | 'focused' | 'filled'>

const Input: React.FC<InputProps> = ({ value, placeholder, disabled, onChange, name, ...rest}) => {
    const [focused, setFocused] = useState(false);

    return (
        <BaseInput filled={!!value} name={name} disabled={disabled} focused={focused} {...rest}>
            <input
                name={name}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                onFocus={()=> setFocused(true)}
                onBlur={()=> setFocused(false)}
                onChange={onChange}
            />
        </BaseInput>
    );
};

export default Input;
