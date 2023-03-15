import React from 'react'
import { FormattedMessage } from 'react-intl';
import "./Hair.css";
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import { Slide } from 'react-reveal';


function Hair() {
    const Title = withReveal(styled.h1`
    font-size: 5rem;
    padding-top: 1em;
    font-family: radicalis;
    text-align: center;
    align-items: center;
    color: #1E90FF;
    text-shadow: 2px 2px black;

  `, <Slide top duration={1000} delay={150} />);
    const PhoneN = withReveal(styled.h1`
  font-size: 5rem;
  text-align: center;
  font-family: Helvetica;
  align-items: center;
  color: white;
  text-shadow: 2px 2px black;

`, <Slide left duration={1000} delay={150} />);
    const Since = withReveal(styled.h1`
font-size: 2rem;
text-align: center;
font-family: Helvetica;
align-items: center;
color: white;
text-shadow: 2px 2px black;

`, <Slide bottom duration={1000} delay={150} />);
    return (
        <div className="image-zoom2">
            <Title >
                <p><FormattedMessage id="Rejuvenate" /></p>
            </Title>
            <PhoneN >
                <p><FormattedMessage id="Laser" /></p>
            </PhoneN>
            <Since >
                <p>VICTORIA HEAVENLY SPA</p>
                <img src="/Assets/Photos/Login/USA.PNG"></img>
                <img src="/Assets/Photos/Login/COLOMBIA.PNG"></img>
            </Since>
        </div >


    );

}

export default Hair