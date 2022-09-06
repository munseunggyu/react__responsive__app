import { BoxContainer, BoxTitle } from "../css/commonCss"
import side1 from '../img/side1.jpg'
import side2 from '../img/side2.jpg'
import side3 from '../img/side3.jpg'
import side4 from '../img/side4.jpg'
import styled from "styled-components"
import { motion } from "framer-motion"
import {AiFillHeart} from 'react-icons/ai'

const Img = styled.img`
  width:100%;
  height:100%;
`;


const RightSectionContainer = styled.section`
  border:1px solid rgba(0,0,0,0.2);
  width:250px;
  border-top:0;
  flex-shrink: 0;
  @media screen and (max-width: 960px) { // 데스크탑
    width:100%;
    display: flex;
  }
  @media screen and (max-width: 600px) { // 테블릿
    & > ${BoxContainer}:last-child{
      display:none;
    }
  }

`;

const Side12Container = styled.div`
  perspective: 1000;
  width:100%;
  height:307px;
  position: relative;
  transform-style: preserve-3d; 
  transition: 1s;
  &:hover{
    transform:rotateY(180deg);
  }
  @media screen and (max-width: 960px) { // 데스크탑
   /* height:382px; */
  }
  @media screen and (max-width: 768px) { // 데스크탑
    height:242px
  }
  @media screen and (max-width: 600px) { // 테블릿
    height:307px;
  }
`;

const Front = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;
const Back = styled.div`
  transform: rotateY(180deg);
  background-color: #442DE5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:inherit;
  transform-style: preserve-3d;
  display: flex;
  align-items:center;
  justify-content:center;
  backface-visibility: hidden;
`;

const Side2FigCaption = styled.figcaption`
  position: absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%) translateZ(100px);
  display: block;
  text-align:center;
  width:60%;
  background-color:rgba(0,0,0,0.5);
  color: white;
  font-size:20px;
  padding: 10px 7px;
`;


const Side3Figure = styled(motion.figure)`
  position: relative;
  overflow:hidden;
  padding:0;
  margin:0;
  ${Img}:hover{
    opacity: .4;
  }
`;

const Side3FigCaption = styled(motion.figcaption)`
  width:100px;
  height:100px;
  background-color:black;
  color:white;
  border-radius:50%;
  position: absolute;
  top:35%;
  left:28%;
  display: flex;
  align-items:center;
  justify-content:center;  
  h4{
    text-align:center;
  }
`;


const side3Variants = {
  initial:{
    x:200,
    rotate:360,
  },
  hover:{
    rotate:0,
    x:0,
  },
  bgHover:{
    backgroundColor:'rgba(0,0,0,0.4)'
  }
  
}

function RightSection(){
  return(
    <RightSectionContainer>
      <BoxContainer>
        <BoxTitle>
          <h3>
            Effect1
          </h3>
          <p>CSS3의 transform을 이용한 마우스 오버효과입니다</p>
        </BoxTitle>
        <Side12Container>
        <Front>
          <Img src={side1} alt='마우스 오버 효과 이미지1' />
        </Front>
        <Back>
          <AiFillHeart size='50' color='white' />
        </Back>
        </Side12Container>
      </BoxContainer>
      <BoxContainer>
        <BoxTitle>
          <h3>
            Effect2
          </h3>
          <p>CSS3의 transform을 이용한 마우스 오버효과입니다</p>
        </BoxTitle>
        <Side12Container>
        <Front>
          <Img src={side2} alt='마우스 오버 효과 이미지2' />
          <Side2FigCaption>
            Hover Effect
          </Side2FigCaption>
        </Front>
        <Back>
         <Img src={side4} alt='마우스 오버 효과 이미지4' />
         <Side2FigCaption>
            Hover Effect
          </Side2FigCaption>
        </Back>
        </Side12Container>
      </BoxContainer>
      <BoxContainer>
        <BoxTitle>
          <h3>
            Effect3
          </h3>
          <p>CSS3의 transform을 이용한 마우스 오버효과입니다</p>
        </BoxTitle>
        <Side3Figure
          initial='initial'
          whileHover='hover'
        >
          <Img src={side3} alt='마우스 오버 효과 이미지3' />
          <Side3FigCaption
          variants={side3Variants}
          transition={{type:'tween'}}
          >
            <h4>HOVER EFFECT</h4>
          </Side3FigCaption>
        </Side3Figure>
      </BoxContainer>
    </RightSectionContainer>
  )
}

export default RightSection