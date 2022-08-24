
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
const Did = styled.div`
  display: grid;
  grid-template-columns:2fr 6fr 2fr;
  width:85%;
  @media screen and (max-width: 1220px) { // 테블릿
    width:100%;
  }
  @media screen and (max-width: 960px) { // 데스크탑
    grid-template-columns:3fr 7fr;
    grid-template-rows:8fr 2fr;
  }
  @media screen and (max-width: 768px) { // 테블릿
    display: flex;
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
        <Did>
        <AriticleLeft />
        <MainSection />
        <AriticleRight />
        </Did>
      </MainContainer>
    </>
  )
}

export default Home;