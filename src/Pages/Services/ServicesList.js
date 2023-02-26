import React, { useState } from 'react'
import "./Services.css"
import { FormattedMessage } from "react-intl";
import { Slide } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';

function ServicesList() {

    const [load1, setLoad1] = useState(false);
    const [load2, setLoad2] = useState(false);
    const [load3, setLoad3] = useState(false);
    const [load4, setLoad4] = useState(false);
    const [load5, setLoad5] = useState(false);
    const [load6, setLoad6] = useState(false);
    const [load7, setLoad7] = useState(false);


    const onLoad1 = () => {
        setLoad1(true)
    };

    const onLoad2 = () => {
        setLoad2(true)
    };

    const onLoad3 = () => {
        setLoad3(true)
    };

    const onLoad4 = () => {
        setLoad4(true)
    };

    const onLoad5 = () => {
        setLoad5(true)
    };

    const onLoad6 = () => {
        setLoad6(true)
    };

    const onLoad7 = () => {
        setLoad7(true)
    };

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
            <Title>
                <div id="Banner">
                    <div id="banner-right">
                        <Imagen>
                            <img id="banner-image" src="/Assets/Photos/Products/foto1.png" onLoad={onLoad1} alt="Banner Photo ITTI" />
                        </Imagen>
                    </div>
                    {
                        load1 &&
                        <div id="banner-left">
                            <div id="banner-left-text">
                                <Imagen>
                                    <p className="banner-left-subtitle"><FormattedMessage id="Lymphatic" /> </p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="LymphaticDescription1" /></p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><span><FormattedMessage id="LymphaticDescription2" /></span><span><FormattedMessage id="LymphaticDescription25" /></span></p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="LymphaticDescription3" /></p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="LymphaticDescription4" /></p>
                                </Imagen>
                            </div>
                        </div>
                    }
                </div>
            </Title>
            <Texto>
                <div id="Banner">
                    <div id="banner-right1">
                        <Mucho>
                            <img id="banner-image" src="/Assets/Photos/Products/foto3.png" onLoad={onLoad2} alt="Banner Photo ITTI" />
                        </Mucho>
                    </div>
                    {load2 &&
                        <div id="banner-left1">
                            <div id="banner-left-text">
                                <Mucho>
                                    <p className="banner-left-subtitle"><FormattedMessage id="Face" /> </p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Face1" /></p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Face2" /></p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Face3" /></p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Face4" /></p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Face5" /></p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Face6" /></p>
                                </Mucho>
                            </div>
                        </div>
                    }
                </div>
            </Texto>
            <Title>
                <div id="Banner">
                    <div id="banner-right">
                        <Imagen>
                            <img id="banner-image" src="/Assets/Photos/Products/foto4.png" onLoad={onLoad3} alt="Banner Photo ITTI" />
                        </Imagen>
                    </div>
                    {load3 &&
                        <div id="banner-left">
                            <div id="banner-left-text">
                                <Imagen>
                                    <p className="banner-left-subtitle"><FormattedMessage id="Body" /> </p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="Body1" /></p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="Body2" /></p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="Body3" /></p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="Body4" /></p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="Body5" /></p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="Body6" /></p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="Body7" /></p>
                                </Imagen>
                            </div>
                        </div>
                    }
                </div>
            </Title>
            <Texto>
                <div id="Banner">
                    <div id="banner-right1">
                        <Mucho>
                            <img id="banner-image" src="/Assets/Photos/Products/foto2.png" onLoad={onLoad4} alt="Banner Photo ITTI" />
                        </Mucho>
                    </div>
                    {load4 &&
                        <div id="banner-left1">
                            <div id="banner-left-text">
                                <Mucho>
                                    <p className="banner-left-subtitle"><FormattedMessage id="Laserm" /> </p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Laser1" /><FormattedMessage id="Laser15" /></p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Laser2" /></p>
                                </Mucho>
                            </div>
                        </div>
                    }
                </div>
            </Texto>
            <Title>
                <div id="Banner">
                    <div id="banner-right">
                        <Imagen>
                            <img id="banner-image" src="/Assets/Photos/HomePage/photoBanner.jpg" onLoad={onLoad5} alt="Banner Photo ITTI" />
                        </Imagen>
                    </div>
                    {load5 &&
                        <div id="banner-left">
                            <div id="banner-left-text">
                                <Imagen>
                                    <p className="banner-left-subtitle"><FormattedMessage id="Hyperbaric" /> </p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="Hyperbaric1" /><FormattedMessage id="Hyperbaric15" /></p>
                                </Imagen>
                            </div>
                        </div>
                    }
                </div>
            </Title>
            <Texto>
                <div id="Banner">
                    <div id="banner-right1">
                        <Mucho>
                            <img id="banner-image" src="/Assets/Photos/Products/foto5.png" onLoad={onLoad6} alt="Banner Photo ITTI" />
                        </Mucho>
                    </div>
                    {load6 &&
                        <div id="banner-left1">
                            <div id="banner-left-text">
                                <Mucho>
                                    <p className="banner-left-subtitle"><FormattedMessage id="Eyebrows" /> </p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Eyebrows1" /><FormattedMessage id="Eyebrows15" /><FormattedMessage id="Eyebrows155" /></p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Eyebrows2" /><FormattedMessage id="Eyebrows25" /><FormattedMessage id="Eyebrows255" /></p>
                                </Mucho>
                                <Mucho>
                                    <p className="banner-left-description"><FormattedMessage id="Eyebrows3" /></p>
                                </Mucho>
                            </div>
                        </div>
                    }
                </div>
            </Texto>
            <Title>
                <div id="Banner">
                    <div id="banner-right">
                        <Imagen>
                            <img id="banner-image" src="/Assets/Photos/Products/foto6.jpg" onLoad={onLoad7} alt="Banner Photo ITTI" />
                        </Imagen>
                    </div>
                    {load7 &&
                        <div id="banner-left">
                            <div id="banner-left-text">
                                <Imagen>
                                    <p className="banner-left-subtitle"><FormattedMessage id="Filler" /> </p>
                                </Imagen>
                                <Imagen>
                                    <p className="banner-left-description"><FormattedMessage id="Filler2" /></p>
                                </Imagen>
                            </div>
                        </div>
                    }
                </div>
            </Title>
        </div>
    )
}

export default ServicesList;
