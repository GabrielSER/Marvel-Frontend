import "./AboutUs.css";
import React, { useLayoutEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { Carousel } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';

function AboutInfo() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
    const Title = withReveal(styled.p`
  `, <Fade up duration={1000} delay={200} />);

    return (
        <div id="AboutUs">
            <div className="container-fluid">
                <div className="aboutUs-banner row d-none d-lg-block">
                    <div className="col-12 aboutUs-banner-col">
                        <img className="image-zoom3" src="/Assets/Photos/AboutUs/Banner.png" alt="Banner artisan" />
                    </div>
                </div>
                <div className="aboutUs-banner row d-lg-none d-xl-none">
                    <div className="col-12 aboutUs-banner-col">
                        <img className="image-zoomsmallxd" src="/Assets/Photos/AboutUs/Team2.png" alt="Banner artisan" />
                        <div id="aboutUs-banner-small">
                        </div>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Common" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="Victoria" /></p>

                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="team2imagesmall" src="/Assets/Photos/AboutUs/teamsmall.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <p><FormattedMessage id="Victoria2" /></p>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="team2image" src="/Assets/Photos/AboutUs/Team.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Lifting" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="team3image" src="/Assets/Photos/AboutUs/lift.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="LiftingDesc" /></p>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="tableimage" src="/Assets/Photos/AboutUs/lifttable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="tableimagesmall" src="/Assets/Photos/AboutUs/lifttablesmall.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Throw" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="ThrowDesc" /></p>

                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="tableimage2" src="/Assets/Photos/AboutUs/throwtable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="tableimage2small" src="/Assets/Photos/AboutUs/throwtablesmall.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/throwsmall.png" alt="ITTI Team #2" />
                            </Title>
                        </div>

                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="throwimage" src="/Assets/Photos/AboutUs/throw.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Crush" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/crush.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="CrushDesc" /></p>
                        <div>
                            <Title>
                                <img id="crushtable" src="/Assets/Photos/AboutUs/crushtable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Traffic" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="TrafficDesc" /></p>

                        <div>
                            <Title>
                                <img id="crushtable" src="/Assets/Photos/AboutUs/traffictable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>

                        <p><FormattedMessage id="TrafficDesc2" /></p>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/crash.png" alt="ITTI Team #2" />
                            </Title>
                        </div>

                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/crash.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Jump" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/jump.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="Jump1" /></p>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="jumptablesmall" src="/Assets/Photos/AboutUs/jump1.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="jumptable" src="/Assets/Photos/AboutUs/jump1.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <p><FormattedMessage id="Jump2" /></p>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="jumptablesmall" src="/Assets/Photos/AboutUs/jump2.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="jumptable" src="/Assets/Photos/AboutUs/jump2.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="text-center">
                        <p><FormattedMessage id="Jump3" /></p>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="jumptablesmall" src="/Assets/Photos/AboutUs/jump3.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="jumptable" src="/Assets/Photos/AboutUs/jump3.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="text-center">
                        <p><FormattedMessage id="Jump4" /></p>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Break" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="BreakDesc" /></p>

                        <div>
                            <Title>
                                <img id="crushtable" src="/Assets/Photos/AboutUs/breaktable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/break.png" alt="ITTI Team #2" />
                            </Title>
                        </div>

                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/break.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Flying" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/flying.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="Fly1" /></p>
                        <p><FormattedMessage id="Fly2" /></p>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="flytablesmall" src="/Assets/Photos/AboutUs/flytable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="flytable" src="/Assets/Photos/AboutUs/flytable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <p><FormattedMessage id="Fly3" /></p>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="SpeedFlight" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="SpeedFlightDesc" /></p>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="flytablesmall" src="/Assets/Photos/AboutUs/speedtable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="flytable" src="/Assets/Photos/AboutUs/speedtable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/speedfly.png" alt="ITTI Team #2" />
                            </Title>
                        </div>

                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/speedfly.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Custom" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/custom.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="CustomDesc" /></p>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Popularity" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="PopularityDesc" /></p>
                    <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="crushtable" src="/Assets/Photos/AboutUs/populartable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/popular.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/popular.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="crushtable" src="/Assets/Photos/AboutUs/populartable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Reputation" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/reputation.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="ReputationDesc" /></p>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="PublicImage" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="PublicImageDesc" /></p>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="flytablesmall" src="/Assets/Photos/AboutUs/publictable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="flytable" src="/Assets/Photos/AboutUs/publictable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/public.png" alt="ITTI Team #2" />
                            </Title>
                        </div>

                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/public.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Identity" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/identity.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <p><FormattedMessage id="IdentityDesc" /></p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AboutInfo