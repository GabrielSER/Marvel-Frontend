import React from 'react'
import { FormattedMessage } from 'react-intl';
import "./CarrouselTel.css";
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import { Slide } from 'react-reveal';


function CarrouselTel() {
    const Title = withReveal(styled.h1`
    font-size: 2rem;
    padding-top: 1em;
    font-family: radicalis;
    text-align: center;
    align-items: center;
    color: #1E90FF;
    text-shadow: 2px 2px black;

  `, <Slide top duration={1000} delay={150}/>);
    const PhoneN = withReveal(styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: comic;
  align-items: center;
  caret-color: transparent;
  color: white;
  text-shadow: 2px 2px black;

`, <Slide left duration={1000} delay={150}/>);

    return (
        <div className="image-small">
        <Title >
            <p> </p>
        </Title>
        <Title >
            <p> </p>
        </Title>
            <Title >
                <p> </p>
            </Title>
        <PhoneN >
            <p> Play as your favourite Marvel Characters </p>
        </PhoneN>
        <Title >
            <p> </p>
        </Title>
        </div >


    );

}

export default CarrouselTel