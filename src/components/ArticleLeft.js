import styled from "styled-components";
import { BoxContainer, BoxTitle, Title } from "../css/commonCss";
import {BsChevronDoubleRight} from 'react-icons/bs'
import { motion } from "framer-motion";
import {AiFillPlusCircle} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'

export const AriticleLeftContainer = styled.div`
  border:1px solid rgba(0,0,0,0.2);
  border-top:0;
  height:100%;
  /* display: flex; */
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
    
  }
};

const NoticeHeader = styled.div`
  display: flex;
  justify-content:space-between;
  color:rgba(0,0,0,0.4);
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
  max-width:242px;
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
    </AriticleLeftContainer>
  )
}

export default AriticleLeft;