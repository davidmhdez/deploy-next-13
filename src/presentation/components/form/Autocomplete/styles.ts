import styled from "styled-components";
import {Autocomplete} from "@mui/material";

export const StylesAutocomplete = styled(Autocomplete)`
    fieldset{
      top: 0;
      border: none;
    }
  
    .MuiAutocomplete-inputRoot{
      padding: 0!important;
    }
`