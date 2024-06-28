import styled from "styled-components";
import Colors from "@/presentation/style/colors";
import MQ from "@/presentation/style/media-queries";

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 69px;
    background-color: ${Colors.white};
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    z-index: 3;

    ${MQ.MD}{
      height: 54px;
      padding: 0;
    }
`;

export const HeaderNavigation = styled.nav`
    display: flex;
    align-items: center;
    gap: 24px;
  
    ${MQ.MD}{
      gap: 17px;
      margin-right: 16px;
    }
`;

export const HeaderNavigationSeparator = styled.div`
    display: none;
    
    ${MQ.MD}{
        display: block;
        width: 1px;
        height: 22.5px;
        background-color: ${Colors.secondary};
    }   
`;