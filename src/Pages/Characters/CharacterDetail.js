import React, { useLayoutEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { Carousel } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "./CharacterCard";
import { Fade, Slide } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./card.css";
import NormalForm from './NormalFormStats';
import NormalFormAbilities from './NormalFormAbilities';
import NormalFormSkills from './NormalFormSkills';
import NormalFormStats from './NormalFormStats';
import IronManArmors from './IronManArmors';
import AlternateFormImage from './AlternateFormImage';
import Tooltip from '../../Components/Tooltip/Tooltip';
import Powercard from './Powercard';

function CharacterDetail() {

    const [name, setName] = useState("");
    const [alterego, setAlter] = useState("");
    const [description, setDesc] = useState("");
    const [logo, setLogo] = useState("");
    const [image, setImage] = useState("");
    const [strength, setStrength] = useState(0);
    const [intelligence, setintelligence] = useState(0);
    const [durability, setdurability] = useState(0);
    const [agility, setagility] = useState(0);
    const [wisdom, setwisdom] = useState(0);
    const [charisma, setcharisma] = useState(0);
    const [perception, setperception] = useState(0);
    const [hp, sethp] = useState(0);
    const [power, setpower] = useState(0);
    const [defense, setdefense] = useState(0);
    const [melee, setmelee] = useState(0);
    const [energyprojection, setenergyprojection] = useState(0);
    const [speed, setspeed] = useState(0);
    const [luck, setluck] = useState(0);
    const [acrobatics, setacrobatics] = useState(0);
    const [accuracy, setaccuracy] = useState(0);
    const [athletics, setathletics] = useState(0);
    const [aerialPiloting, setaerialPiloting] = useState(0);
    const [bikePiloting, setbikePiloting] = useState(0);
    const [heavyEquipmentPiloting, setheavyEquipmentPiloting] = useState(0);
    const [lockpicking, setlockpicking] = useState(0);
    const [meleeWeapons, setmeleeWeapons] = useState(0);
    const [motorVehiclePiloting, setmotorVehiclePiloting] = useState(0);
    const [pickpocket, setpickpocket] = useState(0);
    const [rangedWeapons, setrangedWeapons] = useState(0);
    const [stealth, setstealth] = useState(0);
    const [throwst, setthrowst] = useState(0);
    const [underwater, setunderwater] = useState(0);
    const [waterPiloting, setwaterPiloting] = useState(0);
    const [animalHandling, setanimalHandling] = useState(0);
    const [arcana, setarcana] = useState(0);
    const [deception, setdeception] = useState(0);
    const [espionage, setespionage] = useState(0);
    const [etiquette, setetiquette] = useState(0);
    const [explosives, setexplosives] = useState(0);
    const [firstAid, setfirstAid] = useState(0);
    const [firearms, setfirearms] = useState(0);
    const [electronicsKnowledge, setelectronicsKnowledge] = useState(0);
    const [historyKnowledge, sethistoryKnowledge] = useState(0);
    const [intimidation, setintimidation] = useState(0);
    const [intuition, setintuition] = useState(0);
    const [investigation, setinvestigation] = useState(0);
    const [marksman, setmarksman] = useState(0);
    const [mechanic, setmechanic] = useState(0);
    const [medicine, setmedicine] = useState(0);
    const [naturalSciencesKnowledge, setnaturalSciencesKnowledge] = useState(0);
    const [persuasion, setpersuasion] = useState(0);
    const [religion, setreligion] = useState(0);
    const [softwareKnowledge, setsoftwareKnowledge] = useState(0);
    const [survivalist, setsurvivalist] = useState(0);
    const [tracking, settracking] = useState(0);
    const [willpower, setwillpower] = useState(0);
    const [bodyStretching, setbodyStretching] = useState(0);
    const [enviromentalAwareness, setenviromentalAwareness] = useState(0);
    const [flight, setflight] = useState(0);
    const [magic, setmagic] = useState(0);
    const [chiControl, setchiControl] = useState(0);
    const [magnetism, setmagnetism] = useState(0);
    const [telepathy, settelepathy] = useState(0);
    const [pyrokinesis, setpyrokinesis] = useState(0);
    const [electrokinesis, setelectrokinesis] = useState(0);
    const [cryokinesis, setcryokinesis] = useState(0);
    const [gravitokinesis, setgravitokinesis] = useState(0);
    const [hydrokinesis, sethydrokinesis] = useState(0);
    const [aerokinesis, setaerokinesis] = useState(0);
    const [seismokinesis, setseismokinesis] = useState(0);
    const [terrakinesis, setterrakinesis] = useState(0);
    const [thermokinesis, setthermokinesis] = useState(0);
    const [powerCosmic, setpowerCosmic] = useState(0);
    const [spiritualAffinity, setspiritualAffinity] = useState(0);
    const [weatherControl, setweatherControl] = useState(0);
    const [wallCrawling, setwallCrawling] = useState(0);
    const [special1, setspecial1] = useState(0);
    const [special2, setspecial2] = useState(0);
    const [special3, setspecial3] = useState(0);
    const [special4, setspecial4] = useState(0);
    const [abilities, setabilities] = useState([]);
    const [weaknesses, setweaknesses] = useState([]);
    const [type, settype] = useState("");
    const [powers, setpowers] = useState([]);
    const [alt, setalt] = useState("");
    const [alternate, setAlternate] = useState(false);
    const [forms, setforms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        alt === "alt" ? setAlternate(true) : setAlternate(false);
    }, [alt]);

    const handleClickScroll = (alter) => {
        setAlternate(alter)
        const element = document.getElementById('AboutUs');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    let params = useParams();

    const Title = withReveal(styled.p`
  `, <Fade right duration={1000} delay={200} />);

    const Title2 = withReveal(styled.p`
  `, <Fade up duration={1000} delay={200} />);

    useEffect(() => {
        async function fetchChars() {
            setLoading(true);
            try {
                const res = await axios.request(`http://localhost:5000/api/characters/${params._id}`)
                setName(res.data.name)
                setAlter(res.data.alterego)
                setDesc(res.data.description)
                setLogo(res.data.logo)
                setImage(res.data.image)
                setStrength(res.data.stats.strength)
                setintelligence(res.data.stats.intelligence)
                setdurability(res.data.stats.durability)
                setagility(res.data.stats.agility)
                setwisdom(res.data.stats.wisdom)
                setcharisma(res.data.stats.charisma)
                setperception(res.data.stats.perception)
                sethp(res.data.stats.hp)
                setpower(res.data.stats.power)
                setdefense(res.data.stats.defense)
                setmelee(res.data.stats.melee)
                setenergyprojection(res.data.stats.energyprojection)
                setspeed(res.data.stats.speed)
                setluck(res.data.stats.luck)
                setacrobatics(res.data.skills.acrobatics)
                setaccuracy(res.data.skills.accuracy)
                setathletics(res.data.skills.athletics)
                setaerialPiloting(res.data.skills.aerialPiloting)
                setbikePiloting(res.data.skills.bikePiloting)
                setheavyEquipmentPiloting(res.data.skills.heavyEquipmentPiloting)
                setlockpicking(res.data.skills.lockpicking)
                setmeleeWeapons(res.data.skills.meleeWeapons)
                setmotorVehiclePiloting(res.data.skills.motorVehiclePiloting)
                setpickpocket(res.data.skills.pickpocket)
                setrangedWeapons(res.data.skills.rangedWeapons)
                setstealth(res.data.skills.stealth)
                setthrowst(res.data.skills.throw)
                setunderwater(res.data.skills.underwater)
                setwaterPiloting(res.data.skills.waterPiloting)
                setanimalHandling(res.data.skills.animalHandling)
                setarcana(res.data.skills.arcana)
                setdeception(res.data.skills.deception)
                setespionage(res.data.skills.espionage)
                setetiquette(res.data.skills.etiquette)
                setexplosives(res.data.skills.explosives)
                setfirstAid(res.data.skills.firstAid)
                setfirearms(res.data.skills.firearms)
                setelectronicsKnowledge(res.data.skills.electronicsKnowledge)
                sethistoryKnowledge(res.data.skills.historyKnowledge)
                setintimidation(res.data.skills.intimidation)
                setintuition(res.data.skills.intuition)
                setinvestigation(res.data.skills.investigation)
                setmarksman(res.data.skills.marksman)
                setmechanic(res.data.skills.mechanic)
                setmedicine(res.data.skills.medicine)
                setnaturalSciencesKnowledge(res.data.skills.naturalSciencesKnowledge)
                setpersuasion(res.data.skills.persuasion)
                setreligion(res.data.skills.religion)
                setsoftwareKnowledge(res.data.skills.softwareKnowledge)
                setsurvivalist(res.data.skills.survivalist)
                settracking(res.data.skills.tracking)
                setwillpower(res.data.specialSkills.willpower)
                setbodyStretching(res.data.specialSkills.bodyStretching)
                setenviromentalAwareness(res.data.specialSkills.enviromentalAwareness)
                setflight(res.data.specialSkills.flight)
                setmagic(res.data.specialSkills.magic)
                setchiControl(res.data.specialSkills.chiControl)
                setmagnetism(res.data.specialSkills.magnetism)
                settelepathy(res.data.specialSkills.telepathy)
                setpyrokinesis(res.data.specialSkills.pyrokinesis)
                setelectrokinesis(res.data.specialSkills.electrokinesis)
                setcryokinesis(res.data.specialSkills.cryokinesis)
                setgravitokinesis(res.data.specialSkills.gravitokinesis)
                sethydrokinesis(res.data.specialSkills.hydrokinesis)
                setaerokinesis(res.data.specialSkills.aerokinesis)
                setseismokinesis(res.data.specialSkills.seismokinesis)
                setterrakinesis(res.data.specialSkills.terrakinesis)
                setthermokinesis(res.data.specialSkills.thermokinesis)
                setpowerCosmic(res.data.specialSkills.powerCosmic)
                setspiritualAffinity(res.data.specialSkills.spiritualAffinity)
                setweatherControl(res.data.specialSkills.weatherControl)
                setwallCrawling(res.data.specialSkills.wallCrawling)
                setspecial1(res.data.specialSkills.special1)
                setspecial2(res.data.specialSkills.special2)
                setspecial3(res.data.specialSkills.special3)
                setspecial4(res.data.specialSkills.special4)
                setabilities(res.data.abilities)
                setweaknesses(res.data.weaknesses)
                settype(res.data.type)
                setpowers(res.data.powers)
                console.log(res.data.powers)
                setforms(res.data.forms)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchChars();
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred: {error.message}</p>;

    else return (
        <React.Fragment>
            <Navbar />
            <Title2>
                <div className="container d-flex justify-content-center ">
                    <img class="img-fluid" src={logo} alt="Banner artisan" />
                </div>
            </Title2>
            <div id="AboutUs">
                <div className="container-fluid">
                    <div className="aboutUs-behindITTI row">

                        <div className="col-12 col-lg-6 text-center">

                            <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                                <Title2>
                                    {!alternate && <img id="crushnew" src={image} alt="ITTI Team #2" />}
                                </Title2>
                            </div>
                            <p><b>Real Name:</b> {alterego}</p>
                            <p>{description}</p>
                            {!alternate &&
                                <div>
                                    <Title>
                                        <h1 id="aboutUs-WhoAreWe">
                                            <FormattedMessage id="Stats" />{
                                                (forms.length != 0 && name !== "Iron Man" && name !== "Moon Knight") && <h1> as {name}</h1>
                                            }
                                        </h1>
                                    </Title>

                                    <div className='row'>
                                        <div className='col'>
                                            <p><b>Strength:</b> {strength}</p>
                                        </div>
                                        <div className='col'>
                                            <p><b>HP:</b> {hp}</p>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <p><b>Intelligence:</b> {intelligence}</p>
                                        </div>
                                        <div className='col'>
                                            <p><b>Power:</b> {power}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <p><b>Durability:</b> {durability}</p>
                                        </div>
                                        <div className='col'>
                                            <p><b>Defense:</b> {defense}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <p><b>Agility:</b> {agility}</p>
                                        </div>
                                        <div className='col'>
                                            <p><b>Melee:</b> {melee}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <p><b>Wisdom:</b> {wisdom}</p>
                                        </div>
                                        <div className='col'>
                                            <p><b>Energy Projection:</b> {energyprojection}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <p><b>Charisma:</b> {charisma}</p>
                                        </div>
                                        <div className='col'>
                                            <p><b>Speed:</b> {speed}</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <p><b>Perception:</b> {perception}</p>
                                        </div>
                                        <div className='col'>
                                            <p><b>Luck:</b> {luck}</p>
                                        </div>
                                    </div>
                                </div>}
                            <div></div>
                            {alternate && <div>
                                <NormalFormStats id={forms[1]} />
                            </div>}
                            {(forms.length !== 0 && name !== "Moon Knight") && <NormalFormStats id={forms[0]} />}
                        </div>
                        {!alternate && <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                            <Fade right>
                                <img id="crushnew" src={image} alt="ITTI Team #2" />
                            </Fade>
                        </div>}
                        {alternate && <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                            <AlternateFormImage id={forms[1]} />
                        </div>}
                    </div>
                    <div className="aboutUs-behindITTI row">
                        <div className="col-lg-6 text-center aboutUs-team2-col">
                            {!alternate && <div>
                                <Title>
                                    <h1 id="aboutUs-WhoAreWe">
                                        Skills{(forms.length != 0 && name !== "Iron Man" && name !== "War Machine" && name !== "Moon Knight") && <h1> as {name}</h1>}
                                        {name == "Moon Knight" && <h1 id="aboutUs-WhoAreWe">
                                            as {alterego}</h1>
                                        }
                                    </h1>
                                </Title>
                                {acrobatics != 0 && <div className='col'>
                                    <p><b>Acrobatics:</b> {acrobatics}</p>
                                </div>}
                                {accuracy != 0 && <div className='col'>
                                    <p><b>Accuracy:</b> {accuracy}</p>
                                </div>}
                                {athletics != 0 && <div className='col'>
                                    <p><b>Athletics:</b> {athletics}</p>
                                </div>}
                                {aerialPiloting != 0 && <div className='col'>
                                    <p><b>Aerial Piloting:</b> {aerialPiloting}</p>
                                </div>}
                                {bikePiloting != 0 && <div className='col'>
                                    <p><b>Bike Piloting:</b> {bikePiloting}</p>
                                </div>}
                                {heavyEquipmentPiloting != 0 && <div className='col'>
                                    <p><b>Heavy Equipment Piloting :</b> {heavyEquipmentPiloting}</p>
                                </div>}
                                {lockpicking != 0 && <div className='col'>
                                    <p><b>Lockpicking:</b> {lockpicking}</p>
                                </div>}
                                {meleeWeapons != 0 && <div className='col'>
                                    <p><b>Melee Weapons:</b> {meleeWeapons}</p>
                                </div>}
                                {motorVehiclePiloting != 0 && <div className='col'>
                                    <p><b>Motor Vehicle Piloting:</b> {motorVehiclePiloting}</p>
                                </div>}
                                {pickpocket != 0 && <div className='col'>
                                    <p><b>Pickpocket:</b> {pickpocket}</p>
                                </div>}
                                {rangedWeapons != 0 && <div className='col'>
                                    <p><b>Ranged Weapons:</b> {rangedWeapons}</p>
                                </div>}
                                {stealth != 0 && <div className='col'>
                                    <p><b>Stealth:</b> {stealth}</p>
                                </div>}
                                {throwst != 0 && <div className='col'>
                                    <p><b>Throw:</b> {throwst}</p>
                                </div>}
                                {underwater != 0 && <div className='col'>
                                    <p><b>Underwater:</b> {underwater}</p>
                                </div>}
                                {waterPiloting != 0 && <div className='col'>
                                    <p><b>Water Piloting:</b> {waterPiloting}</p>
                                </div>}
                                {animalHandling != 0 && <div className='col'>
                                    <p><b>Animal Handling:</b> {animalHandling}</p>
                                </div>}
                                {arcana != 0 && <div className='col'>
                                    <p><b>Arcana:</b> {arcana}</p>
                                </div>}
                                {deception != 0 && <div className='col'>
                                    <p><b>Deception:</b> {deception}</p>
                                </div>}
                                {espionage != 0 && <div className='col'>
                                    <p><b>Espionage:</b> {espionage}</p>
                                </div>}
                                {etiquette != 0 && <div className='col'>
                                    <p><b>Etiquette:</b> {etiquette}</p>
                                </div>}
                                {explosives != 0 && <div className='col'>
                                    <p><b>Explosives:</b> {explosives}</p>
                                </div>}
                                {firstAid != 0 && <div className='col'>
                                    <p><b>First Aid:</b> {firstAid}</p>
                                </div>}
                                {firearms != 0 && <div className='col'>
                                    <p><b>Firearms:</b> {firearms}</p>
                                </div>}
                                {electronicsKnowledge != 0 && <div className='col'>
                                    <p><b>Electronics Knowledge:</b> {electronicsKnowledge}</p>
                                </div>}
                                {historyKnowledge != 0 && <div className='col'>
                                    <p><b>History Knowledge:</b> {historyKnowledge}</p>
                                </div>}
                                {intimidation != 0 && <div className='col'>
                                    <p><b>Intimidation:</b> {intimidation}</p>
                                </div>}
                                {intuition != 0 && <div className='col'>
                                    <p><b>Intuition:</b> {intuition}</p>
                                </div>}
                                {investigation != 0 && <div className='col'>
                                    <p><b>Investigation:</b> {investigation}</p>
                                </div>}
                                {marksman != 0 && <div className='col'>
                                    <p><b>Marksman:</b> {marksman}</p>
                                </div>}
                                {medicine != 0 && <div className='col'>
                                    <p><b>Medicine:</b> {medicine}</p>
                                </div>}
                                {mechanic != 0 && <div className='col'>
                                    <p><b>Mechanic:</b> {mechanic}</p>
                                </div>}
                                {naturalSciencesKnowledge != 0 && <div className='col'>
                                    <p><b>Natural Sciences Knowledge:</b> {naturalSciencesKnowledge}</p>
                                </div>}
                                {persuasion != 0 && <div className='col'>
                                    <p><b>Persuasion:</b> {persuasion}</p>
                                </div>}
                                {religion != 0 && <div className='col'>
                                    <p><b>Religion:</b> {religion}</p>
                                </div>}
                                {softwareKnowledge != 0 && <div className='col'>
                                    <p><b>Software Knowledge:</b> {softwareKnowledge}</p>
                                </div>}
                                {survivalist != 0 && <div className='col'>
                                    <p><b>Survivalist:</b> {survivalist}</p>
                                </div>}
                                {tracking != 0 && <div className='col'>
                                    <p><b>Tracking:</b> {tracking}</p>
                                </div>}
                                {willpower != 0 && <div className='col'>
                                    <p><b>Willpower:</b> {willpower}</p>
                                </div>}
                                {bodyStretching != 0 && <div className='col'>
                                    <p><b>Body Stretching:</b> {bodyStretching}</p>
                                </div>}
                                {enviromentalAwareness != 0 && <div className='col'>
                                    <p><b>Enviromental Awareness:</b> {enviromentalAwareness}</p>
                                </div>}
                                {flight != 0 && <div className='col'>
                                    <p><b>Flight:</b> {flight} {name == "War Machine" && "(only with War Machine Armor)"
                                    }</p>
                                </div>}
                                {magic != 0 && <div className='col'>
                                    <p><b>Magic:</b> {magic}</p>
                                </div>}
                                {chiControl != 0 && <div className='col'>
                                    <p><b>Chi Control:</b> {chiControl}</p>
                                </div>}
                                {magnetism != 0 && <div className='col'>
                                    <p><b>Magnetism:</b> {magnetism}</p>
                                </div>}
                                {telepathy != 0 && <div className='col'>
                                    <p><b>Telepathy:</b> {telepathy}</p>
                                </div>}
                                {pyrokinesis != 0 && <div className='col'>
                                    <p><b>Pyrokinesis:</b> {pyrokinesis}</p>
                                </div>}
                                {electrokinesis != 0 && <div className='col'>
                                    <p><b>Electrokinesis:</b> {electrokinesis}</p>
                                </div>}
                                {cryokinesis != 0 && <div className='col'>
                                    <p><b>Cryokinesis:</b> {cryokinesis}</p>
                                </div>}
                                {gravitokinesis != 0 && <div className='col'>
                                    <p><b>Gravitokinesis:</b> {gravitokinesis}</p>
                                </div>}
                                {hydrokinesis != 0 && <div className='col'>
                                    <p><b>Hydrokinesis:</b> {hydrokinesis}</p>
                                </div>}
                                {aerokinesis != 0 && <div className='col'>
                                    <p><b>Aerokinesis:</b> {aerokinesis}</p>
                                </div>}
                                {seismokinesis != 0 && <div className='col'>
                                    <p><b>Seismokinsis:</b> {seismokinesis}</p>
                                </div>}
                                {terrakinesis != 0 && <div className='col'>
                                    <p><b>Terrakinesis:</b> {terrakinesis}</p>
                                </div>}
                                {thermokinesis != 0 && <div className='col'>
                                    <p><b>Thermokinesis:</b> {thermokinesis}</p>
                                </div>}
                                {powerCosmic != 0 && <div className='col'>
                                    <p><b>Power Cosmic:</b> {powerCosmic}</p>
                                </div>}
                                {spiritualAffinity != 0 && <div className='col'>
                                    <p><b>Spiritual Affinity:</b> {spiritualAffinity}</p>
                                </div>}
                                {weatherControl != 0 && <div className='col'>
                                    <p><b>Weather Control:</b> {weatherControl}</p>
                                </div>}
                                {wallCrawling != 0 && <div className='col'>
                                    <p><b>Wall Crawling:</b> {wallCrawling}</p>
                                </div>
                                }
                                {special1 != 0 && <div className='col'>
                                    <p><b>Radiation:</b> {special1}</p>
                                </div>}
                                {special2 != 0 && <div className='col'>
                                    <p><b>Phasing:</b> {special2}</p>
                                </div>}
                                {special3 != 0 && <div className='col'>
                                    <p><b>Chlorokinesis:</b> {special3}</p>
                                </div>}

                            </div>}

                            {alternate && <div>
                                <NormalFormSkills id={forms[1]} />
                            </div>}

                            {(forms.length > 0 && name != "Moon Knight") && <NormalFormSkills id={forms[0]} />}

                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            {!alternate && <div>
                                <Title>
                                    <h1 id="aboutUs-WhoAreWe">
                                        <FormattedMessage id="Abilities" />{
                                            (forms.length != 0 && name !== "Iron Man" && name !== "War Machine" && name !== "Moon Knight") &&
                                            <h1> as {name}</h1>
                                        }
                                    </h1>
                                </Title>
                                {abilities.map((ability) => (
                                    <p><b>{ability.split(":")[0]}</b>: {ability.split(":")[1]}</p>
                                ))}
                                {weaknesses.length > 0 && <div>
                                    <Title>
                                        <h1 id="aboutUs-WhoAreWe">
                                            <FormattedMessage id="Weaknesses" />{
                                                (forms.length != 0 && name !== "Iron Man" && name !== "War Machine" && name !== "Moon Knight") &&
                                                <h1> as {name}</h1>
                                            }
                                        </h1>
                                    </Title>
                                    {weaknesses.map((weakness) => (
                                        <p><b>{weakness.split(":")[0]}</b>: {weakness.split(":")[1]}</p>
                                    ))}
                                </div>
                                }
                            </div>}

                            {alternate && <div>
                                <NormalFormAbilities id={forms[1]} />
                            </div>}
                            {forms.length > 0 && <NormalFormAbilities id={forms[0]} />}
                        </div>

                    </div>

                    {name == "Moon Knight" &&
                        <div className='aboutUs-behindITTI row'>
                            <div className='col-12 col-lg-6'>
                                <NormalFormSkills id={forms[0]} />
                            </div>
                            <div className='col-12 col-lg-6'>
                                <NormalFormSkills id={forms[1]} />
                            </div>

                        </div>}



                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="row py-4">

                            <Title>
                                {(powers.length != 0) && <h1 id="aboutUs-WhoAreWe">
                                    <FormattedMessage id="Powers" />

                                </h1>}
                            </Title>
                            {powers.map((power) => (
                                <div className="col-md-3 py-2">
                                    <Powercard id={power} />
                                </div>

                            ))}
                        </div>
                    </div>
                    {name == "Iron Man" && <IronManArmors></IronManArmors>}
                    {!alternate && <div>
                        {(name == "Venom" || name == "Agent Venom") &&
                            <div className="d-flex justify-content-center">
                                <button className='button' onClick={() => handleClickScroll("alt")}>
                                    {name == "Venom" && <p>Change to Anti-Venom</p>}
                                    {name == "Agent Venom" && <p>Change to Venom</p>}</button>
                            </div>}
                    </div>}
                    {alternate && <div>
                        {(name == "Venom" || name == "Agent Venom") &&
                            <div className="d-flex justify-content-center">
                                <button className='button' onClick={() => handleClickScroll("")}>
                                    {name == "Venom" && <p>Change to Venom</p>}
                                    {name == "Agent Venom" && <p>Change to Anti-Venom</p>}
                                </button>
                            </div>}
                    </div>}
                </div>
            </div>
            <Footer />
        </React.Fragment >
    );
}

export default CharacterDetail;