import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import {MenuItem} from "@mui/material";

export const StyledSelect = styled(Select)`
    .MuiSelect-select{
      color: #2C2C30!important;
      font-weight: 500;
    }
  
    fieldset{
      border: none;
    }
`

export const StyledMenuItem = styled(MenuItem)`
    padding: 8px 16px;
    font-family: 'Prelo', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: #6E6E73;
  
    &[aria-selected=true]{
      background-color: #F4F6F9;
    }
  
    &:hover{
      background-color: #F6F6F6;
    }
`
