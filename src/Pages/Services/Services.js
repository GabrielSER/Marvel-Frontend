import React, { useLayoutEffect } from 'react'
import "./Services.css"
import { Slide } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import ServicesList from "./ServicesList"
import ServiceDescription from "./ServiceDescription"

function Services() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })


    const Title = withReveal(styled.p`
  `, <Slide left duration={1000} delay={200} />);
    const Texto = withReveal(styled.p`S
  `, <Slide right duration={1000} delay={200} />);
    const Mucho = withReveal(styled.p`
`, <Slide right duration={1000} delay={300} />);
    const Imagen = withReveal(styled.p`
`, <Slide left duration={1000} delay={300} />);
    const ImagenM = withReveal(styled.p`
`, <Slide left duration={1000} delay={200} />);
    return (
        <div>
            <div id='Products' className='background'>
                <ServiceDescription></ServiceDescription>
                <div>
                    <ServicesList></ServicesList>
                </div>
            </div>
        </div>
    )
}

export default Services;
