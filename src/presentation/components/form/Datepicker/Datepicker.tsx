import React, {useState} from 'react';
import BaseInput, {BaseInputProps} from "@/presentation/components/form/BaseInput/BaseInput";
import ReactDatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {DatepickerWrapper} from "@/presentation/components/form/Datepicker/styles";
import es from 'date-fns/locale/es';
registerLocale('es', es)

export type DatepickerProps = {
    value: Date | null
    placeholder?: string
    onChange: (name: string, value: Date | null) => void
} & Omit<BaseInputProps, 'children' | 'focused' | 'filled'>
const Datepicker: React.FC<DatepickerProps> = ({value, disabled, name, onChange, ...rest}) => {
    const [focused, setFocused] = useState(false);

    return (
        <BaseInput filled={!!value} disabled={disabled} focused={focused} name={name} {...rest}>
            <DatepickerWrapper>
                <ReactDatePicker
                    onFocus={()=> setFocused(true)}
                    onBlur={()=> setFocused(false)}
                    onCalendarClose={()=> setFocused(false)}
                    selected={value}
                    locale="es"
                    onChange={(date)=>{
                        onChange(name, date)
                    }}
                />
            </DatepickerWrapper>
        </BaseInput>
    );
};

export default Datepicker;
