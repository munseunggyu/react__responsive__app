import styled from "styled-components";
import { BoxContainer, BoxTitle, Title } from "../css/commonCss";
import {BsChevronDoubleRight} from 'react-icons/bs'
import { motion } from "framer-motion";

export const AriticleLeftContainer = styled.div`
  border:1px solid rgba(0,0,0,0.2);
  border-top:0;
  height:100%;
  width:100%;
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
}

function AriticleLeft(){
  let text = ['CAFE','TUTORIAL','WEBSITE','REFERENCE','CSS3','HTML5']
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
      
    </AriticleLeftContainer>
  )
}

export default AriticleLeft;