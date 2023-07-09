import React from 'react'
import { FormattedMessage } from 'react-intl';
import "./Banner.css";
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import { Slide } from 'react-reveal';
import { Fade, Nav } from 'react-bootstrap';

function Banner() {

    const Title = withReveal(styled.p`
  `, <Slide left duration={1000} delay={200} />);
    return (

        <div id="Banner">

            <div id="banner-right" className='d-none d-lg-block'>
                <Title>
                    <img id="banner-image" src="/Assets/Photos/Login/main.png" alt="Banner Photo ITTI" />
                </Title>
                <Title>
                    <div id="banner-white-extrusion" />
                </Title>
            </div>
            <div id="banner-left">
                <div id="banner-left-text">
                    <Title>
                        <p className="banner-left-firstRow"><FormattedMessage id="At" /> Victoria Heavenly Spa</p>
                    </Title>
                    <Title>
                        <h3 className="banner-left-subtitle"><FormattedMessage id="BannerSlogan" /></h3>
                    </Title>
                    <Title>
                        <p className="banner-left-description"><FormattedMessage id="BannerDescription" /></p>
                    </Title>
                    <Title>
                        <div id="banner-left-text" className='p-2'>
                        </div>

                        <img className='d-lg-none d-xl-none' src="/Assets/Photos/Login/USA.PNG"></img>
                        <img className='d-lg-none d-xl-none' src="/Assets/Photos/Login/COLOMBIA.PNG"></img>
                    </Title>

                    <Title>
                        <Nav.Link className="navbarBootstrap-item d-lg-none d-xl-none"
                            href="/signup">
                            <button
                                className="btn btn-primary text-uppercase">
                                <FormattedMessage id="SignUp" />
                            </button>
                        </Nav.Link>
                    </Title>

                </div>
            </div>
        </div>
    )
}

export default Banner
