import styled, {css} from "styled-components";
import Colors from "@/presentation/style/colors";
import MQ from "@/presentation/style/media-queries";

export const PichinchaMilesLogoWrapper = styled.div`
    display: flex;
    margin-right: 36px;

    ${MQ.MD}{
      margin-right: 54px;
    }
`;

const imgWrapperStyles = css`
  padding: 8px;
  display: flex;
  align-items: center;

  ${MQ.MD}{
    padding: 11.8px 13px;
  }
`;

export const MilesLogoWrapper = styled.div`
    background-color: #d9d8d6;
    ${imgWrapperStyles};
  
    img{
      ${MQ.MD}{
        width: 82px;
        height: 30px;
      }
    }
`;

export const PichinchaLogoWrapper = styled.div`
    background-color: ${Colors.primary};
    position: relative;
    ${imgWrapperStyles};
  
    img{
        ${MQ.MD}{
          width: 145px;
          height: 30px;
        }
    }
    
    &:before{
      position: absolute;
      top: 0;
      right: -36px;
      content: '';

      border-right: 18px solid transparent;
      border-top: 18px solid transparent;
      border-left: 18px solid ${Colors.primary};
      border-bottom: 18px solid ${Colors.primary};

      ${MQ.MD}{
        right: -54px;
        border-right-width: 27px;
        border-top-width: 27px ;
        border-left-width: 27px ;
        border-bottom-width: 27px ;
      }
    }
`;