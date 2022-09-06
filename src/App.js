
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftSection from './components/LeftSection';
import CenterSection from './components/CenterSection';
import RightSection from './components/RightSection';

const MainContainer = styled.main`
  width:100%;
  display: flex;
  justify-content:center;
`;
const FlexContainer = styled.div`
  display: flex;
  width:85%;
  @media screen and (max-width: 1220px) { // 테블릿
    width:100%;
  }
  @media screen and (max-width: 960px) { // 데스크탑
   flex-wrap:wrap;
  }
  @media screen and (max-width: 768px) { // 테블릿
    flex-direction:column;
  }
  @media screen and (max-width: 600px) { // 모바일
  }
`;


function Home(){
  return(
    <>
      <Header />
      <MainContainer>
        <FlexContainer>
        <LeftSection />
        <CenterSection />
        <RightSection />
        </FlexContainer>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home;