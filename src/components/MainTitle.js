import styled from "styled-components";

const MainTitleContainer = styled.div`
  width:100%;
  height:70px;
  background-color:#E9F7FD;
  display: flex;
  align-items:center;
  justify-content:center;
  h3{
    color:${props => props.theme.titleColor};
    font-size:40px;
    font-family: 'Nanum Pen Script', cursive;
  }
`;

function MainTitle(){
  return(
    <MainTitleContainer>
      <h3>
        "나는 개발자다!"
      </h3>
    </MainTitleContainer>
  )
}

export default MainTitle;