import styled from "styled-components";
import { BoxContainer, BoxTitle, Title } from "../css/commonCss";
import {BsChevronDoubleRight} from 'react-icons/bs'
import { motion } from "framer-motion";
import {AiFillPlusCircle} from 'react-icons/ai'
import blogImg1_01 from '../img/blog4_@1.jpg'
import blogImg1_02 from '../img/blog4_@2.jpg'
import blogImg1_03 from '../img/blog4_@3.jpg'
import blogImg2_01 from '../img/blog3_@1.jpg'
import blogImg2_02 from '../img/blog3_@2.jpg'
import blogImg2_03 from '../img/blog3_@3.jpg'

export const AriticleLeftContainer = styled.div`
  border:1px solid rgba(0,0,0,0.2);
  border-top:0;
`;

const MenuCardContainer = styled(motion.div)`
  display: grid;
  /* justify-content:space-between; */
  grid-template-columns:0.9fr 0.1fr;
  padding:8px;
  color:rgba(0,0,0,0.4);
  border-bottom:1px solid rgba(0,0,0,0.2);
  padding-top:20px;
  p.motion{
    font-size:18px;
  }
  span{
    /* padding:10px; */
  }
`;

const menuVariants = {
  initial:{
    backgroundColor:'white'
  },
  
  hover:{
    color:'white',
    backgroundColor:'#2C95C3',
    transition:{
      type:'sping'
    }
  }
};

const NoticeHeader = styled.div`
  display: flex;
  justify-content:space-between;
  color:${props => props.theme.pColor};
  h3{
    font-size:16px;
    color:#3A83A9;
  }
  div{
    font-size:11px;
    display: flex;
    margin-top:5px;
    align-items:center;
    p{
      margin-left:3px;
    }
  }
`;

const NoticeEffect = styled.ul`
  padding:14px;
  font-size:13px;
  max-width:240px;
  color: rgba(0,0,0,0.6);
  @media screen and (max-width: 768px) { // 테블릿
    max-width:100%;
}
`;
const NoticeOneli = styled.li`
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding-left:7px;
  padding-bottom:3px;
  position: relative;
  cursor: pointer;
  &:hover{
    color: rgba(39, 132, 176,1);
  }
  &::before{
    content: '';
  width: 3px; height: 3px;
  border-radius: 50%;
  background: black;
  position: absolute; 
  left: 0;
    top: 3px;
  }
`;
const NoticeTwoli = styled.li`
  display: -webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
  overflow:hidden;
  text-overflow:ellipsis;
  padding-left:7px;
  margin-bottom:7px;
  position: relative;
  cursor: pointer;
  &:hover{
    color: rgba(39, 132, 176,1);
  }
  &::before{
    content: '';
  width: 3px; height: 3px;
  border-radius: 50%;
  background: black;
  position: absolute; 
  left: 0;
    top: 3px;
  }
`;


const BlogImg = styled.div`
  background-image:${props=> props.bgImg === '1'
  ? `url(${blogImg1_01})` 
  : `url(${blogImg2_01})` };
  width:100%;
  height:80px;
  background-position:center;
  background-size : cover;
  margin-bottom:8px;
  margin-top:5px;
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 2dppx) {
      background-image:${props=> props.bgImg === '1'
      ? `url(${blogImg1_02})` 
      : `url(${blogImg2_02})`};
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 3),
    only screen and (min-device-pixel-ratio: 3),
    only screen and (min-resolution: 3dppx) {
      background-image:${props=> props.bgImg === '1'
      ? `url(${blogImg1_03})` 
      : `url(${blogImg2_03})`};
  }
  @media screen and (max-width: 768px) { // 테블릿
    height:205px;
}
`;
const Text = styled.p`
  font-size:14px;
  color:rgba(0,0,0,.65);
  margin-bottom:15px;
`;
function AriticleLeft(){
  let text = ['CAFE','TUTORIAL','WEBSITE','REFERENCE','CSS3','HTML5']
  let repeat = [1,2,3,4]
  return(
    <AriticleLeftContainer>
      <BoxContainer>
        <BoxTitle>
          <h3>
            Menu
          </h3>
          <p>
            framer-motion을 이용한 마우스 오버 효과 메뉴입니다.
          </p>
        </BoxTitle>
        {
          text.map((item,i) => 
          <MenuCardContainer 
            key={i}
            whileHover='hover'
            variants={menuVariants}
          >
            <motion.p >{item}</motion.p>
            <motion.span

            ><BsChevronDoubleRight /></motion.span>
          </MenuCardContainer>)
        }
      </BoxContainer>
      <BoxContainer>
        <BoxTitle>
          <h3>
            Notice
          </h3>
          <p>
            게시판 영역의 한줄 효과와 두줄 효과 게시판입니다.
          </p>
        </BoxTitle>
        <NoticeHeader>
          <h3>Notice1</h3>
          <div>MORE 
            <p><AiFillPlusCircle /></p>
          </div>
        </NoticeHeader>
        <NoticeEffect>
          {repeat.map((v,i) => 
            <NoticeOneli>이 줄은 한줄 효과 입니다. 이 줄은 한줄 효과 입니다. 이 줄은 한줄 효과 입니다. 이 줄은 한줄 효과 입니다.</NoticeOneli>
          )} 
        </NoticeEffect>
        <NoticeHeader>
          <h3>Notice2</h3>
          <div>MORE 
            <p><AiFillPlusCircle /></p>
          </div>
        </NoticeHeader>
        <NoticeEffect>
          {repeat.map((v,i) => 
            <NoticeTwoli>이 줄은 두줄 효과 입니다. 이 줄은 두줄 효과 입니다. 이 줄은 두줄 효과 입니다. 이 줄은 두줄 효과 입니다. 이 줄은 두줄 효과 입니다.</NoticeTwoli>
          )} 
        </NoticeEffect>
      </BoxContainer>
      <BoxContainer>
        <BoxTitle>
          <h3>
            Blog
          </h3>
          <p>
            해상도에 따라 이미지를 다르게 표현하는 방법이다
          </p>
        </BoxTitle>
        <BlogImg bgImg='1' />
        <Text>
          반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다.
        </Text>
        <BlogImg bgImg='2' /> 
        <Text>
        반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다. 반응형 웹 사이트 이미지 글입니다.
        </Text>
      </BoxContainer>
    </AriticleLeftContainer>
  )
}

export default AriticleLeft;