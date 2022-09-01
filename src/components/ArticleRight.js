import { BoxContainer, BoxTitle } from "../css/commonCss"
import { AriticleContainer } from "./ArticleLeft"
import side1 from '../img/side1.jpg'
import styled from "styled-components"
// import { motion } from "framer-motion"
import {AiFillHeart} from 'react-icons/ai'
import { motion  } from "framer-motion-3d"

const AriticleRTContainer = styled.div`
  border:1px solid rgba(0,0,0,0.2);
  width:250px;
  border-top:0;
  flex-shrink: 0;
  @media screen and (max-width: 960px) { // 데스크탑
    width:100%;
  }
`;

const Side1Container = styled.div`
  perspective: 1000;
  width:100%;
  height:307px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  &:hover{
    transform:rotateY(180deg);
  }
`;
const Front = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  line-height: 50px;
  text-align: center;
  backface-visibility: hidden;
`;
const Back = styled.div`
  transform: rotateY(180deg);
  background-color: #442DE5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content:center;
  backface-visibility: hidden;
`;

const Img = styled.img`
  width:100%;
  height:100%;
`;


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
        <Side1Container>
        <Front>
          <Img src={side1} />
        </Front>
        <Back>
          <AiFillHeart size='50' color='white' />
        </Back>
        </Side1Container>
      </BoxContainer>
    </AriticleRTContainer>
  )
}

export default AriticleRight