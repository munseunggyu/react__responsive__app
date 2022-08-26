import styled from "styled-components";
import { BoxContainer, BoxTitle } from "../css/commonCss";
import Slider from './Slider'


const SectionContainer = styled.div`

`;

function MainSection(){
  return(
    <SectionContainer>
   <BoxContainer>
    <BoxTitle>
      <h3>
        Framer Motion Slider™
      </h3>
      <p>
        framer-motion을 이용한 이미지 슬라이드 효과
      </p>
    </BoxTitle>
    <Slider />
    
   </BoxContainer>

   </SectionContainer>
  )
}

export default MainSection;