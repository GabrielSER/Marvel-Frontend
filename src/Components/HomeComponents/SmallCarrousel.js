import React from 'react'
import { FormattedMessage } from 'react-intl';
import "./Carrousel.css";
import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';
import CarrouselImage from './CarrouselImage';
import Lymphatic from './Lymphatic';
import Hair from './Hair';
import SocialBanner from './SocialBanner';
import withReveal from 'react-reveal/withReveal';
import CarrouselTel from './CarrouselTel';
import MiniSocial from './MiniSocial';
import MiniExplore from './MiniExplore';

function SmallCarrousel() {
    const width = '390px', height = '322px';
    const Container = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 1em;
  width: 100%;
  height: ${height};
`;
const Arrow = styled.div`
text-shadow: 1px 1px 1px #fff;
z-index: 100;
line-height: ${height};
text-align: center;
position: absolute;
top: 0;
width: 10%;
opacity: .25
font-size: 3em;
cursor: pointer;
user-select: none;
${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
  const CarouselUI = ({ position, handleClick, children }) => (
      <Container style={{ overflow: 'hidden' }}>
          {children}
          <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
          <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
      </Container>
  );
  const Carousel = makeCarousel(CarouselUI);

  const Title = withReveal(styled.p`
`, <Slide left duration={1000} delay={200} />);


  return (
      <div>
          <Carousel defaultWait={5000} duration={100} style={{ overflow: 'hidden' }} >
              <Slide right>
                  <CarrouselTel />
              </Slide>
              <Slide right>
                  <MiniSocial />
              </Slide>
              <Slide right>
                  <MiniExplore />
              </Slide>
          </Carousel>
      </div>


  );

}

export default SmallCarrousel
