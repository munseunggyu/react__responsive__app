import styled from "styled-components";

const MainTitleContainer = styled.h1`
  width:100%;
  padding:15px;
  background-color:#E9F7FD;
  text-align:center;
  color:${props => props.theme.titleColor};
  font-size:40px;
  font-family: 'Nanum Pen Script', cursive;
`;

function MainTitle(){
  return(
    <MainTitleContainer>
        "나는 개발자다!"
    </MainTitleContainer>
  )
}

export default MainTitle;