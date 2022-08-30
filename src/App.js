
import styled from 'styled-components';
import AriticleLeft from './components/ArticleLeft';
import AriticleRight from './components/ArticleRight';
import Header from './components/Header';
import MainSection from './components/MainSection';
import MainTitle from './components/MainTitle';

const MainContainer = styled.div`
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
      <MainTitle />
      <MainContainer>
        <FlexContainer>
        <AriticleLeft />
        <MainSection />
        <AriticleRight />
        </FlexContainer>
      </MainContainer>
    </>
  )
}

export default Home;