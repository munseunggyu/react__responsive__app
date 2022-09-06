import styled from "styled-components";

export const BoxContainer  = styled.article`
  padding:14px;
  width:100%;
  border-bottom:1px solid rgba(0,0,0,0.2);
  &:last-child{
    border-bottom:0;
  }
`;
export const BoxTitle = styled.div`
  margin-top:7px;
  border-bottom:1px dashed rgba(0,0,0,0.15);
  margin-bottom:12px;
  h3{
    color:${props => props.theme.titleColor};
    font-size:22px;
    margin-bottom:8px;
  }
  p{
    color:${props => props.theme.pColor};
    font-size:14px;
    margin-bottom:15px;
  }
`;

