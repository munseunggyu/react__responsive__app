import { motion } from "framer-motion";
import uuid from "react-uuid";
import styled from "styled-components";
import range from 'lodash/range'

const Dot_container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  bottom: -140px;
`;

const Dot = styled(motion.div)`
  width: 10px;
  height: 10px;
  background-color: ${props => props.theme.titleColor};
  border-radius: 50%;
  opacity: 0.8;
  &:not(:last-child){
   margin-right: 10px;
  }
`;

const Dots = ({ count, active }) => (
  <Dot_container>
    {range(count).map(i => (
      <Dot
        key={uuid()}
        initial={false}
        animate={{
          scale: active === i ? 1.5 : 1,
          opacity: active === i ? 1 : 0.5,
        }}
      />
    ))}
  </Dot_container>
)

export default Dots