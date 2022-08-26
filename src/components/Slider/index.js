import React, { useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import clamp from 'lodash/clamp'
import range from 'lodash/range'
import img1 from '../../img/light02_s.jpg'
import img2 from '../../img/light03_s.jpg'
import img3 from '../../img/light04_s.jpg'
import styled from 'styled-components';
import uuid from 'react-uuid';
import Slide from './Slide';
import Dots from './Dots';

const SliderContanier = styled(motion.div)`
  overflow-x: hidden;
  position: relative;
  width:100%;
  height:430px;
`;

const SliderShape = styled(motion.div)`
  width: 100%;
  height: 250px;
  display: flex;
`;

const Slider = () => {
  const arr = [img1,img2,img3]
  const constraintsRef = useRef(null)
  const [active, setActive] = useState(0)
  const width = constraintsRef.current && constraintsRef.current.offsetWidth || 350

  const dragEndHandler = (event, info) => {
    const offset = info.offset.x
    if (Math.abs(offset) > 20) {
      const direction = offset < 0 ? 1 : -1
      setActive(active => clamp(active + direction, 0, arr.length - 1))
    }
    console.log(offset)
  }

  return (
    <>
      <SliderContanier  ref={constraintsRef}>
        <SliderShape
          onDragEnd={dragEndHandler}
          drag="x"
          dragSnapToOrigin ={true}
          animate={{
            x: -1 * active * width
          }}
        >
          {
          arr.map(v => <Slide key={uuid()} bgImg={v} /> )
          }
        </SliderShape>
        <Dots
        count={arr.length} 
        active={active} 
        />
      </SliderContanier>
    </>
  )
}

export default Slider