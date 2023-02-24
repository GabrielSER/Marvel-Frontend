import React from 'react'
import "./Lymphatic.css";
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import { Slide } from 'react-reveal';


function Lymphatic() {
    const Title = withReveal(styled.h1`
    font-size: 5rem;
    padding-top: 1em;
    font-family: radicalis;
    text-align: center;
    align-items: center;
    color: #1E90FF;
    text-shadow: 2px 2px black;

  `, <Slide top duration={1000} delay={150}/>);
    const PhoneN = withReveal(styled.h1`
  font-size: 5rem;
  text-align: center;
  font-family: comic;
  align-items: center;
  color: white;
  text-shadow: 2px 2px black;

`, <Slide left duration={1000} delay={150}/>);
    const Since = withReveal(styled.h1`
font-size: 2rem;
text-align: center;
font-family: Helvetica;
align-items: center;
color: white;
text-shadow: 2px 2px black;

`, <Slide bottom duration={1000} delay={150}/>);
    return (
        <div className="image-zoom">
            <Title >
                <p> </p>
            </Title>
            <Title >
                <p> </p>
            </Title>
            <PhoneN >
                <p> Explore Iconic Worlds and Locations </p>
            </PhoneN>
            <Since >
            <p> </p>
            </Since>
        </div >

    );

}

export default Lymphatic