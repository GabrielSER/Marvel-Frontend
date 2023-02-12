import "./CombatMain.css";
import React, { useLayoutEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { Carousel } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';

function CombatInfo() {

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
                        <img className="image-zoom3" src="/Assets/Photos/AboutUs/Banner2.png" alt="Banner artisan" />
                    </div>
                </div>
                <div className="aboutUs-banner row d-lg-none d-xl-none">
                    <div className="col-12 aboutUs-banner-col">
                        <img className="image-zoomsmallxd" src="/Assets/Photos/AboutUs/Banner2.png" alt="Banner artisan" />
                        <div id="aboutUs-banner-small">
                        </div>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 text-center">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe ">
                                <FormattedMessage id="Statistics" />
                            </h3>
                        </Title>
                        <Title>
                            <div className="aboutUs-behindITTI row d-none d-lg-block">
                                <img className="tableimage2small" src="/Assets/Photos/AboutUs/statsbig.png" />
                            </div>
                            <div className="aboutUs-behindITTI row d-lg-none d-xl-none">
                                <img className="tableimage2small" src="/Assets/Photos/AboutUs/smallstats.png" />
                            </div>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 text-center">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe ">
                                <FormattedMessage id="Damage" />
                            </h3>
                        </Title>
                        <Title>
                            <div className="aboutUs-behindITTI row d-none d-lg-block">
                                <img className="tableimage2small" src="/Assets/Photos/AboutUs/damage.png" />
                            </div>
                            <div className="aboutUs-behindITTI row d-lg-none d-xl-none">
                                <img className="tableimage2small" src="/Assets/Photos/AboutUs/damage.png" />
                            </div>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">

                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Attack" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/fight.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <p><FormattedMessage id="Attack1" /></p>
                        </Title>
                        <div className="">
                            <Title>
                                <img id="tableimagesmall" src="/Assets/Photos/AboutUs/attacktable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <Title>
                            <p><FormattedMessage id="Attack2" /></p>
                        </Title>
                        <Title>
                            <p><FormattedMessage id="Attack3" /></p>
                        </Title>
                        <Title>
                            <p><FormattedMessage id="Attack4" /></p>
                        </Title>
                        <Title>
                            <p><FormattedMessage id="Attack5" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Ranged" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <div className="d-none d-lg-block">
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                            </div>
                            <p><FormattedMessage id="RangedDesc" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/ranged.png" alt="ITTI Team #2" />
                            </Title>
                        </div>

                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="throwsmall" src="/Assets/Photos/AboutUs/ranged.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Combos" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/combo.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <p><FormattedMessage id="CombosDesc" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Dodge" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="DodgeDesc" /></p>
                        </Title>
                    </div>
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Guard" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="GuardDesc" /></p>
                        </Title>
                    </div>
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Opportunity" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="OpportunityDesc" /></p>
                        </Title>
                    </div>

                    <div className="aboutUs-behindITTI row">
                        <Title>
                            <img id="throwsmall" src="/Assets/Photos/AboutUs/dodge.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Disengage" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="DisengageDesc" /></p>
                        </Title>
                    </div>
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Revive" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="ReviveDesc" /></p>
                        </Title>
                    </div>
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Dash" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="DashDesc" /></p>
                        </Title>
                    </div>
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe text-center">
                                <FormattedMessage id="Help" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="HelpDesc" /></p>
                        </Title>
                    </div>
                    <div className="aboutUs-behindITTI row">
                        <Title>
                            <img id="throwsmall" src="/Assets/Photos/AboutUs/help.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Radial" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="RadialDesc" /></p>
                        </Title>
                    </div>
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Telekinetic" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="TelekineticDesc" /></p>
                        </Title>
                    </div>
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Psychic" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12  text-center">
                        <Title>
                            <p className="text-center"><FormattedMessage id="PsychicDesc" /></p>
                        </Title>
                    </div>

                    <div className="aboutUs-behindITTI row">
                        <Title>
                            <img id="throwsmall" src="/Assets/Photos/AboutUs/psychic.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>

                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Level" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/level.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center d-none d-lg-block">
                        <Title>
                            <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                            <p><FormattedMessage id="LevelDesc" /></p>
                        </Title>
                    </div>
                    <div className="d-lg-none d-xl-none">
                        <Title>
                            <p><FormattedMessage id="LevelDesc" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Critical" />
                            </h3>
                        </Title>
                    </div>
                    <Title>
                        <p><FormattedMessage id="CriticalDesc" /></p>
                    </Title>

                    <div className="d-lg-none d-xl-none">
                        <Title>
                            <img id="throwsmall" src="/Assets/Photos/AboutUs/criticaltable.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="aboutUs-behindITTI row">
                        <div className="text-center aboutUs-team2-col d-none d-lg-block">
                            <Title>
                                <img id="crush5" src="/Assets/Photos/AboutUs/criticaltable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Fail" />
                            </h3>
                        </Title>
                    </div>
                    <Title>
                        <p><FormattedMessage id="FailDesc" /></p>
                    </Title>

                    <div className="d-lg-none d-xl-none">
                        <Title>
                            <img id="throwsmall" src="/Assets/Photos/AboutUs/failure.png" alt="ITTI Team #2" />
                        </Title>
                        <Title>
                            <img id="throwsmall" src="/Assets/Photos/AboutUs/fail.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="aboutUs-behindITTI row">
                        <div className="text-center aboutUs-team2-col d-none d-lg-block">
                            <Title>
                                <img id="crush5" src="/Assets/Photos/AboutUs/failure.png" alt="ITTI Team #2" />
                            </Title>
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/fail.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12">
                        <Title>
                            <h3 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Powers" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/power.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <p><FormattedMessage id="Powers1" /></p>
                        </Title>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="flytablesmall" src="/Assets/Photos/AboutUs/powersmall.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="flytable" src="/Assets/Photos/AboutUs/powertable.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <Title>
                            <p><FormattedMessage id="Powers2" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <p><FormattedMessage id="Powers3" /></p>
                        </Title>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="flytablesmall" src="/Assets/Photos/AboutUs/powerexamplesmall.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="crush" src="/Assets/Photos/AboutUs/powerexample.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-lg-none d-xl-none">
                            <Title>
                                <img id="flytablesmall" src="/Assets/Photos/AboutUs/powersdesc.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="d-none d-lg-block">
                            <Title>
                                <img id="crush" src="/Assets/Photos/AboutUs/powersdescbig.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/powersimagesmall.png" alt="ITTI Team #2" />
                            </Title>
                        </div>

                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/powersimage.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/powermeter.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <div className="d-none d-lg-block">
                            <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                        </div>
                        <Title>
                            <p><FormattedMessage id="Powers4" /></p>
                        </Title>
                        <Title>
                            <p><FormattedMessage id="Powers5" /></p>
                        </Title>
                        <div className="row d-lg-none d-xl-none">
                            <Title>
                                <img id="crush" src="/Assets/Photos/AboutUs/powermeter.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
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
                        <Title>
                            <p><FormattedMessage id="PopularityDesc" /></p>
                        </Title>
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
                        <Title>
                            <p><FormattedMessage id="ReputationDesc" /></p>
                        </Title>
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
                        <Title>
                            <p><FormattedMessage id="PublicImageDesc" /></p>
                        </Title>
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
                        <Title>
                            <p><FormattedMessage id="IdentityDesc" /></p>
                        </Title>
                    </div>
                </div>
            </div >

        </div >

    )
}

export default CombatInfo