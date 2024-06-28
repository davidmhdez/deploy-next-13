import styled from "styled-components";
import Colors from "@/presentation/style/colors";

export const BaseInputContainer = styled.div`
    width: 100%;
`;

export const BaseInputWrapper = styled.div<{$hasLabel: boolean, $hasError: boolean, $focused: boolean, $filled: boolean, $hasIcon: boolean, $disabled?: boolean}>`
    width: 100%;
    min-height: 56px;
    border: 1px solid ${({$hasError, $filled, $focused, $disabled})=> {
      if($hasError) {
        return Colors.error;
      } else if($disabled) {
        return '#DBDBDC!important';  
      }else if($filled || $focused) {
        return '#6E6E73';
      } else {
        return '#DBDBDC';
      }
    }};
    border-radius: 0 0 0 14px;
    position: relative;
    background-color: ${({$disabled})=> $disabled ? "#F6F6F6" : Colors.white};
  
    &:hover{
        border-color: #6E6E73;
    }
        
    label{
        font-size: ${({$focused, $hasLabel, $filled})=> $filled || $focused || $hasLabel  ? "10px" : "16px"};
        top: ${({$focused, $hasLabel, $filled})=> $filled || $focused || $hasLabel  ? "10px" : "15px"};
        ${({$disabled})=> $disabled && "color: #B7B7B9;"};
    }
  
    input{
        width: 100%;
        border: none;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        border-radius: 0 0 0 14px;

        &:active, &:focus, &:focus-visible{
            border: none;
            outline: none;
        }
      
        &:disabled{
          color: #B7B7B9;
        }
    }
  
    .MuiSelect-select, input{
        font-size: 16px;
        font-family: 'Prelo', sans-serif!important;
        background-color: transparent;
        color: ${({$hasError})=> $hasError ? Colors.error : Colors.secondary}!important;
        padding-top: ${({$hasLabel})=> $hasLabel ? "20px" : "15px"}!important;
        padding-bottom: ${({$hasLabel})=> $hasLabel ? "10px" : "15px"}!important;
        padding-left: ${({$hasIcon})=> $hasIcon ? "40px" : "15px"}!important;
        padding-right: 15px!important;  
    }
  
    i{
      position: absolute;
      top: 25px;
      left: 12px;
      font-size: 15px;
      color: ${({$hasError, $disabled})=> {
        if($hasError){
          return Colors.error
        }else if($disabled){
          return '#B7B7B9'
        }else{
          return Colors.secondary
        }  
      }};
    }
  
    .custom-select{
      ul{
        padding: 0;
      }
    }
`;

export const BaseInputLabel = styled.label`
    font-family: 'Prelo', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #6E6E73;
    position: absolute;
    left: 15px;
    transition: all 0.3s ease;
`;

export const BaseInputError = styled.p`
    margin: 6px 0 0 15px;
    font-family: 'Prelo-Book', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: ${Colors.error};
`;