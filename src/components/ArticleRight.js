import { BoxContainer, BoxTitle } from "../css/commonCss"
import { AriticleContainer } from "./ArticleLeft"
import side1 from '../img/side1.jpg'
import styled from "styled-components"
import { motion } from "framer-motion"

const AriticleRTContainer = styled.div`
  border:1px solid rgba(0,0,0,0.2);
  width:250px;
  border-top:0;
  flex-shrink: 0;
  @media screen and (max-width: 960px) { // 데스크탑
    width:100%;
    
  }
`;

const Img = styled.img`
  width:100%;
  height:100%;
`;

const TurnImgContainer = styled(motion.div)`
  width:100%;
  height:307px;
  background-color:#442DE5;
  @media screen and (max-width: 960px) { // 데스크탑
  display: flex;
    
  }
`;

const TurnImgVariants = {
  initial :{

  },
  hover: {
    rotateY : 180,
    backfaceVisibility: 'hidden'
    
  }
}
function AriticleRight(){
  return(
    <AriticleRTContainer>
      <BoxContainer>
        <BoxTitle>
          <h3>
            Effect1
          </h3>
          <p>CSS3의 transform을 이용한 마우스 오버효과입니다</p>
        </BoxTitle>
        <TurnImgContainer
     
        >
        <Img src={side1} />
        <Img src={side1} />
        <Img src={side1} />
        </TurnImgContainer>  
           
            
      </BoxContainer>
    </AriticleRTContainer>
  )
}

export default AriticleRight