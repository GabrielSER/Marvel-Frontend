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
                                <FormattedMessage id="Status" />
                            </h3>
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Bleeding" />
                            </h1><p><FormattedMessage id="BleedingD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/bleeding.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/bleeding.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/blind.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Blind" />
                            </h1><p><FormattedMessage id="BlindD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Burned" />
                            </h1><p><FormattedMessage id="BurnedD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/burned.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/burned.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/charmed.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Charmed" />
                            </h1><p><FormattedMessage id="CharmedD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Comatose" />
                            </h1><p><FormattedMessage id="ComatoseD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/coma.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/coma.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/confused.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Confused" />
                            </h1><p><FormattedMessage id="ConfusedD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Concentrated" />
                            </h1><p><FormattedMessage id="ConcentratedD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/concentrated.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/concentrated.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/deaf.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Deafened" />
                            </h1><p><FormattedMessage id="DeafenedD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Drugged" />
                            </h1><p><FormattedMessage id="DruggedD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/drugged.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/drugged.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/drunk.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <div className="d-none d-lg-block">
                                    <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                                </div>
                                <FormattedMessage id="Drunk" />
                            </h1><p><FormattedMessage id="DrunkD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <div className="d-none d-lg-block">
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                            </div>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Frightened" />
                            </h1><p><FormattedMessage id="FrightenedD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/fright.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/fright.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/frozen.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Frozen" />
                            </h1><p><FormattedMessage id="FrozenD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Irradiated" />
                            </h1><p><FormattedMessage id="IrradiatedD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/irradianted.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/irradianted.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/grappled.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <div className="d-none d-lg-block">
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                            </div>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Grappled" />
                            </h1><p><FormattedMessage id="GrappledD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Prone" />
                            </h1><p><FormattedMessage id="ProneD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/prone.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/prone.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/invisible.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Invisible" />
                            </h1><p><FormattedMessage id="InvisibleD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <div className="d-none d-lg-block">
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                            </div>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Paralyzed" />
                            </h1><p><FormattedMessage id="ParalyzedD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/paralyzed.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/paralyzed.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/petrified.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Petrified" />
                            </h1><p><FormattedMessage id="PetrifiedD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Possessed" />
                            </h1><p><FormattedMessage id="PossessedD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/possessed.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/possessed.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/poison.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Poisoned" />
                            </h1><p><FormattedMessage id="PoisonedD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Purple" />
                            </h1><p><FormattedMessage id="PurpleD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/purple.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/purple.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/sleeping.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <div className="d-none d-lg-block">
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                            </div>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Sleeping" />
                            </h1><p><FormattedMessage id="SleepingD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <div className="d-none d-lg-block">
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                            </div>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Soaked" />
                            </h1><p><FormattedMessage id="SoakedD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/soaked.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/soaked.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/stunned.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <div className="d-none d-lg-block">
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                            </div>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Stunned" />
                            </h1><p><FormattedMessage id="StunnedD" /></p>
                        </Title>
                    </div>
                </div>
                <div className="aboutUs-behindITTI row">
                    <div className="col-12 col-lg-6 text-center">
                        <Title>
                            <div className="d-none d-lg-block">
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/space.png" alt="ITTI Team #2" />
                            </div>
                            <h1 id="aboutUs-WhoAreWe">
                                <FormattedMessage id="Telepath" />
                            </h1><p><FormattedMessage id="TelepathD" /></p>
                        </Title>
                        <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                            <Title>
                                <img id="throwsmall" src="/Assets/Photos/AboutUs/telepathic.png" alt="ITTI Team #2" />
                            </Title>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                        <Title>
                            <img id="crush" src="/Assets/Photos/AboutUs/telepathic.png" alt="ITTI Team #2" />
                        </Title>
                    </div>
                </div>
            </div >

        </div >

    )
}

export default CombatInfo