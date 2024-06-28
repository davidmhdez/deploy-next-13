import styled from "styled-components";

export const DatepickerWrapper = styled.div`
    width: 100%;
  
    .react-datepicker-wrapper{
        width: 100%;

        input{
            width: 100%;
        }
    }

    .react-datepicker__triangle{
        &:before, &:after{
            display: none;
        }
    }
`;