import { motion } from 'framer-motion';
import styled from 'styled-components';
import headerImg from '../img/header_bg.jpg';
import {AiFillFacebook, AiFillGithub, AiFillHtml5, AiOutlineTwitter} from 'react-icons/ai'
import MainTitle from './MainTitle';

const HeaderBg = styled.header`
  width:100%;
  
  background-size : cover;
  background-position : center;
  display: flex;
  flex-direction:column;
  @media screen and (max-width: 600px) { // 모바일
    height:40px;
  }
`;
const HeaderContainer = styled.div`
    margin:0 auto;
    /* padding:10px 100px; */
  width:80%;
  padding-bottom:40px;
  /* display: flex;
  
  flex-direction:column;
  align-items:center; */
  @media screen and (max-width: 600px) { // 모바일
    width:90%;
    }
`

const HeaderLink = styled.div`
  display: flex;
  width:100%;
  justify-content:flex-end;
  margin-top:10px;
  button{
    color:white;
    outline:none;
    border:0;
    background-color:inherit;
  }
`;

const HeaderTitleContainer = styled(motion.div)`
  margin-top:66px;
  color:white;
  display: flex;
  flex-direction:column;
  align-items:center;
  position: relative;
  h2{
    display: flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
    background-color:#54B0D7;
    width:485px;
    height:58px;
   
  }
  p{
    display: flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    top:46px;
    z-index:2;
    font-size:15px;
    padding:15px 20px;
    background-color:#4A9ABF;
  }
  @media screen and (max-width: 600px) { // 모바일
    display: none;
    }
`;

const HeaderIconsWrapper = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  background-color:inherit;
  margin-top:77px;
  @media screen and (max-width: 600px) { // 모바일
    display: none;
  }
`;
const HeaderIconContainer = styled(motion.div)`
  border-radius:50%;
  width:60px;
  height:60px;
  color:white;
  background-color:#3192BF;
  display: flex;
  align-items:center;
  justify-content:center;
  margin-right:7px;
  position:relative;
 
`;
const Ballon = styled(motion.p)`
  /* opacity:0; */
  position: absolute;
  height: 20px;
  top:-33px;
  background: #2498D1;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items:center;
  justify-content:center;
  padding: 12px 8px;
  font-size:12px;
  &::after{
    border-top: 7px solid #2498D1;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    bottom:-7px;
  }
`;
  const glowVariants = {
    initial: {
      opacity:0,
      top:-40
    },
    hover: {
      opacity:1,
      top:-30
    }
  }

function Header(){
  return(
    <HeaderBg style={{backgroundImage:`url(${headerImg})`}}>
      <HeaderContainer>
        <HeaderLink>
          <button>Blog</button>
          <button>Facebook</button>
          <button>Webstandard</button>
        </HeaderLink>
        <HeaderTitleContainer
        >
          <motion.h2
            whileHover = {{
              backgroundColor:'#2784B1'
            }}
          >
            PROFESSIONAL WEB PUBLISHER
          </motion.h2>
          <p>
            MUNSEUNGGYU.CO.KR
          </p>
        </HeaderTitleContainer>
        <HeaderIconsWrapper>

          <HeaderIconContainer
           initial='initial'
           whileHover='hover'
          >
            <AiFillHtml5 size='38' />
            <Ballon variants={glowVariants}>HTML5</Ballon>
          </HeaderIconContainer>

          <HeaderIconContainer
           initial='initial'
           whileHover='hover'
          >
            <AiFillGithub size='38' />
            <Ballon  variants={glowVariants} >Github</Ballon>
          </HeaderIconContainer>
          <HeaderIconContainer
           initial='initial'
           whileHover='hover'>
            <AiFillFacebook size='38' />
            <Ballon variants={glowVariants}>Facebook</Ballon>
          </HeaderIconContainer>
          <HeaderIconContainer
            initial='initial'
            whileHover='hover'>
            <AiOutlineTwitter size='38' />
            <Ballon variants={glowVariants}>twitter</Ballon>
          </HeaderIconContainer>
        </HeaderIconsWrapper>
      </HeaderContainer>
      <MainTitle />
    </HeaderBg>
  )
}

export default Header;