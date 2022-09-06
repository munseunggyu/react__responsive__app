import styled from "styled-components";
import { BoxContainer, BoxTitle } from "../css/commonCss";
import uuid from 'react-uuid';
import Slider from './Slider';
import img1 from '../img/light01.jpg';
import img2 from '../img/light02.jpg';
import img3 from '../img/light03.jpg';
import img4 from '../img/light04.jpg';
import img5 from '../img/light05.jpg';
import img6 from '../img/light06.jpg';
import img7 from '../img/light07.jpg';
import img8 from '../img/light08.jpg';
import img9 from '../img/light09.jpg';
import img10 from '../img/light10.jpg';
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const CenterSectionContainer = styled.section`
  width:calc(100% - 500px);
  padding-bottom:20px;
  border-bottom:1px solid rgba(0,0,0,0.2);

  @media screen and (max-width: 960px) { // 데스크탑
    width:calc(100% - 250px);
  flex-shrink:2;

  }
  @media screen and (max-width: 768px) { // 테블릿
    width:100%;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:5px; 
  margin-bottom:5px;
 
 
`;
const ImgWrapper = styled(motion.div)`
  position: relative;
  overflow:hidden;
  width:19%;  
  @media screen and (max-width: 960px) { // 데스크탑
    width:30%;
    &:last-child{
      display:none;
    }
  }
`;
const ImgText = styled(motion.p)`
  background-color:rgba(0,0,0,0.4);
  opacity: 0;
  color:white;
  position:absolute;
  bottom:0;
  width:100%;
  text-align:center;
  padding:5px;
`;

const ImgTemplate = styled.img`
  width:100%;
  height:100%;
  &:hover{
    filter:${props => props.filter};
  }
`;

const ReactPlayerContainer = styled.div`
  width:100%;
  height:340px;
`;

const ImgpVariants = {
  initial: {
    opacity:0,
    bottom:-10
  },
  hover: {
    opacity:1,
    bottom:0
  }
}

function CenterSection(){
  const imgs =[
    {img: img1,filter: 'blur(2px)',text:'blur'},
    {img: img2,filter: 'brightness(50%)',text:'brightness'},
    {img:img3,filter:'contrast(10%)',text:'contrast'},
    {img:img4,filter:'grayscale(100%)',text:'grayscale'},
    {img:img5,filter:'hue-rotate(120deg)',text:'hue-rotate'},
    {img:img6,filter:'invert(100%)',text:'invert'},
    {img:img7,filter:'opacity(10%)',text:'opacity'},
    {img:img8,filter:'saturate(10%)',text:'saturate'},
    {img:img9,filter:'sepia(120%)',text:'sepia'},
    {img:img10,filter:'sepia(120%) hue-rotate(120deg)',text:'Mix'}
  ]
  
  return(
    <CenterSectionContainer>
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
   <BoxContainer>
    <BoxTitle>
      <h3>
        Filter Effect
      </h3>
      <p>
      CSS3에서는 Background-blend-mode, mix-blend-mode, filter와 같이 포토샵에 다루는 효과들이 있습니다.
      </p>
    </BoxTitle>
    <ImgContainer>
    {
      imgs.map(img => 
      <ImgWrapper
        initial='initial'
        whileHover='hover'
        key={uuid()} 
      >
      <ImgTemplate src={img.img} filter={img.filter} alt={img.filter} />
      <ImgText
        variants={ImgpVariants}
      >{img.text}</ImgText>
      </ImgWrapper>
    )}
    </ImgContainer>
     </BoxContainer>
     <BoxContainer>
      <BoxTitle>
        <h3>Video</h3>
        <p>
          영상을 보주는 영역입니다.
        </p>
      </BoxTitle>
      <ReactPlayerContainer>
      <ReactPlayer 
        alt='유튜브 링크이다'
      />
      </ReactPlayerContainer>
     </BoxContainer>
   </CenterSectionContainer>
  )
}

export default CenterSection;