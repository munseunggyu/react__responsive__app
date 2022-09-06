import styled from "styled-components"


const FooterContainer = styled.footer`
  padding:30px;
  text-align:center;
  font-size:14px;
`;
const FooterUl = styled.ul`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
`;

const FooterLi = styled.li`
  padding-right:7px;
  border-right:1px solid rgba(0,0,0,0.2);
  margin-right:7px;
  cursor: pointer;
  &:last-child{
    border:0;
    padding:0;
    margin:0;
  }
`;

const CopyRight = styled.p`
  margin-top:20px;
  letter-spacing:0;
`;
function Footer(){
  const footerText = ['사이트 도움말','사이트 이용약관','사이트 운영원칙','개인정보취급방침','책임의 한계와 법적고지','게시중단요청서비스','고객센터']
  return(
    <FooterContainer>
      <FooterUl>
        {
          footerText.map((text,index) => 
            <FooterLi key={index}> {text} </FooterLi>
          )
        }
      </FooterUl>
      <CopyRight>
        Copyright &copy; webstoryboy All Rights Reserved.
      </CopyRight>
    </FooterContainer>
  )
}

export default Footer