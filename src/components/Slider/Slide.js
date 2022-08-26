import styled from "styled-components";
import img1 from '../../img/light02_s.jpg'
import img2 from '../../img/light03_s.jpg'
import img3 from '../../img/light04_s.jpg'

const Slidec = styled.div`
min-width: 100%;
height: 375px;
background-position:center;
  background-size : cover;
`;
const Slide = ({ bgImg }) => (
  <Slidec
  style={{ backgroundImage: `url(${bgImg})` }}
/>
)

export default Slide
