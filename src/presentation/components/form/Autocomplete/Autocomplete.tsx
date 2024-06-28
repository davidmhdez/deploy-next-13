import React, {useState} from 'react';
import BaseInput, {BaseInputProps} from "@/presentation/components/form/BaseInput/BaseInput";
import {Chip, TextField} from "@mui/material";
import {StylesAutocomplete} from "@/presentation/components/form/Autocomplete/styles";
import "./autocomplete-popper.css"
import debounce from "@mui/utils/debounce";

export type AutocompleteOptionValue = {
    id: string
    name: string
}

export type AutocompleteProps = {
    value: AutocompleteOptionValue | null
    placeholder?: string
    getOptionValues: (inputValue: string) => Promise<AutocompleteOptionValue[]>
    onChange: (name: string, value: AutocompleteOptionValue | null)=> void
} & Omit<BaseInputProps, 'children' | 'focused' | 'filled'>

const Autocomplete: React.FC<AutocompleteProps> = ({value, disabled, getOptionValues, onChange, name, ...rest}) => {
    const [focused, setFocused] = useState(false);
    const [options, setOptions] = useState<AutocompleteOptionValue[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const debounced = debounce(async (e: any)=>{
        setIsLoading(true)
        if(e){
            const optionsValues = await getOptionValues(e.target.value)
            setOptions(optionsValues)
        }
        setIsLoading(false)
    }, 500)

    return (
        <BaseInput name={name} filled={!!value} disabled={disabled} focused={focused} {...rest}>
            <StylesAutocomplete
                options={options}
                clearIcon={null}
                onFocus={()=> setFocused(true)}
                onBlur={()=> setFocused(false)}
                onInputChange={debounced}
                onChange={(event, value)=>{
                    onChange(name, value)
                }}
                value={value}
                loading={isLoading}
                blurOnSelect
                getOptionLabel={(opt: AutocompleteOptionValue)=> opt.name}
                loadingText="Obteniendo resultados"
                renderOption={(props, option: AutocompleteOptionValue) => {
                    return (
                        <li {...props} key={option.id}>
                            {option.name}
                        </li>
                    )
                }}
                renderTags={(tagValue, getTagProps) => {
                    return tagValue.map((option, index) => (
                        <Chip {...getTagProps({ index })} key={option.id} label={option.name}/>
                    ))
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: null
                        }}
                    />
                )}
                filterOptions={(opt)=> opt}
                isOptionEqualToValue={(option, value)=> option.id === value.id}
            />
        </BaseInput>
    );
};

export default Autocomplete;
