import React, {useState} from 'react';
import BaseInput, {BaseInputProps} from "@/presentation/components/form/BaseInput/BaseInput";
import {StyledMenuItem, StyledSelect} from "@/presentation/components/form/Select/styles";
import "./select-menu.css";
import {SelectChangeEvent} from "@mui/material";

export type SelectOption = {
    id: string
    name: string
}

export type SelectProps = {
    value: string
    placeholder?: string
    options: SelectOption[]
    onChange: (name: string, value: string)=> void
} & Omit<BaseInputProps, 'children' | 'focused' | 'filled'>
const Select: React.FC<SelectProps> = ({ value, name, placeholder, disabled, options, onChange, ...rest}) => {
    const [focused, setFocused] = useState(false);

    const handleChange = (e: SelectChangeEvent<any>) => {
        onChange(name, e.target.value)
    };

    return (
        <BaseInput filled={!!value} name={name} disabled={disabled} focused={focused} {...rest}>
            <StyledSelect
                placeholder={placeholder}
                value={value}
                onOpen={()=> setFocused(true)}
                onClose={()=> setFocused(false)}
                onSelect={()=> setFocused(false)}
                disabled={disabled}
                onChange={handleChange}
                fullWidth
                MenuProps={{
                    className: "select-menu",
                }}
            >
                {options.map(opt=> (
                    <StyledMenuItem key={opt.id} value={opt.id}>{opt.name}</StyledMenuItem>
                ))}
            </StyledSelect>
        </BaseInput>
    );
};

export default Select;
