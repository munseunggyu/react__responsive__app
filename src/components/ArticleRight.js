import { BoxContainer, BoxTitle } from "../css/commonCss"
import { AriticleContainer } from "./ArticleLeft"
import side1 from '../img/side1.jpg'
import styled from "styled-components"
import { motion } from "framer-motion"
import {AiFillHeart} from 'react-icons/ai'

const AriticleRTContainer = styled.div`
  border:1px solid rgba(0,0,0,0.2);
  width:250px;
  border-top:0;
  flex-shrink: 0;
  @media screen and (max-width: 960px) { // 데스크탑
    width:100%;
    
  }
`;



const SideImgContainer = styled(motion.div)`
  width:100%;
  height:307px;
  position: relative;
  perspective:600px;
  display: block;
  figure{
    transform-style:preserve-3d;
    transform:rotateY('0deg');
    transition: all 0.5s ease-in-out;
    backface-visibility:hidden;
  }
  div{
    display: flex;
  align-items:center;
  justify-content:center;
  background-color:#442DE5;
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  left:0;
  z-index:-1;
  transform-style:preserve-3d;
  transform:rotateY('-180deg');
  transition: all 0.5s ease-in-out;
  backface-visibility:hidden;
  }
  &:hover{
   figure{
    transform:rotateY('180deg');
   } 
   div{
    transform:rotateY('0deg');
    z-index: 1;
   }
  }
`;

const Side1Figure = styled.figure`
  transform-style:preserve-3d;
  transform:rotateY('0deg');
  transition: all 0.5s ease-in-out;
  backface-visibility:hidden;
`;

const Side1Back = styled(motion.div)`
  display: flex;
  align-items:center;
  justify-content:center;
  background-color:#442DE5;
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  left:0;
  z-index:-1;
  transform-style:preserve-3d;
  transform:rotateY('180deg');
  transition: all 0.5s ease-in-out;
  backface-visibility:hidden;

`;


const Img = styled.img`
  width:100%;
  height:100%;
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
        <SideImgContainer
        >
          <figure>
            <Img src={side1} />
          </figure>
          <div>
            <AiFillHeart size='30' color='white' />
          </div>
        </SideImgContainer>  
           
            
      </BoxContainer>
    </AriticleRTContainer>
  )
}

export default AriticleRight