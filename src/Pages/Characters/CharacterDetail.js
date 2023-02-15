import React, { useLayoutEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { Carousel } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "./Card";
import { Fade } from 'react-reveal';
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
            <Title>
                <div className="container d-flex justify-content-center ">
                    <img class="img-fluid" src={logo} alt="Banner artisan" />
                </div>
            </Title>
            <div id="AboutUs">
                <div className="container-fluid">
                    <div className="aboutUs-behindITTI row">

                        <div className="col-12 col-lg-6 text-center">

                            <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                                <Title>
                                    {!alternate && <img id="crushnew" src={image} alt="ITTI Team #2" />}
                                </Title>
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
                                            <Title>
                                                <p><b>Strength:</b> {strength}</p>
                                            </Title>
                                        </div>
                                        <div className='col'>
                                            <Title>
                                                <p><b>HP:</b> {hp}</p>
                                            </Title>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Intelligence:</b> {intelligence}</p>
                                            </Title>
                                        </div>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Power:</b> {power}</p>
                                            </Title>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Durability:</b> {durability}</p>
                                            </Title>
                                        </div>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Defense:</b> {defense}</p>
                                            </Title>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Agility:</b> {agility}</p>
                                            </Title>
                                        </div>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Melee:</b> {melee}</p>
                                            </Title>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Wisdom:</b> {wisdom}</p>
                                            </Title>
                                        </div>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Energy Projection:</b> {energyprojection}</p>
                                            </Title>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Charisma:</b> {charisma}</p>
                                            </Title>
                                        </div>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Speed:</b> {speed}</p>
                                            </Title>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Perception:</b> {perception}</p>
                                            </Title>
                                        </div>
                                        <div className='col'>
                                            <Title>
                                                <p><b>Luck:</b> {luck}</p>
                                            </Title>
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
                                    <Title>
                                        <p><b>Acrobatics:</b> {acrobatics}</p>
                                    </Title>
                                </div>}
                                {accuracy != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Accuracy:</b> {accuracy}</p>
                                    </Title>
                                </div>}
                                {athletics != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Athletics:</b> {athletics}</p>
                                    </Title>
                                </div>}
                                {aerialPiloting != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Aerial Piloting:</b> {aerialPiloting}</p>
                                    </Title>
                                </div>}
                                {bikePiloting != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Bike Piloting:</b> {bikePiloting}</p>
                                    </Title>
                                </div>}
                                {heavyEquipmentPiloting != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Heavy Equipment Piloting :</b> {heavyEquipmentPiloting}</p>
                                    </Title>
                                </div>}
                                {lockpicking != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Lockpicking:</b> {lockpicking}</p>
                                    </Title>
                                </div>}
                                {meleeWeapons != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Melee Weapons:</b> {meleeWeapons}</p>
                                    </Title>
                                </div>}
                                {motorVehiclePiloting != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Motor Vehicle Piloting:</b> {motorVehiclePiloting}</p>
                                    </Title>
                                </div>}
                                {pickpocket != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Pickpocket:</b> {pickpocket}</p>
                                    </Title>
                                </div>}
                                {rangedWeapons != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Ranged Weapons:</b> {rangedWeapons}</p>
                                    </Title>
                                </div>}
                                {stealth != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Stealth:</b> {stealth}</p>
                                    </Title>
                                </div>}
                                {throwst != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Throw:</b> {throwst}</p>
                                    </Title>
                                </div>}
                                {underwater != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Underwater:</b> {underwater}</p>
                                    </Title>
                                </div>}
                                {waterPiloting != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Water Piloting:</b> {waterPiloting}</p>
                                    </Title>
                                </div>}
                                {animalHandling != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Animal Handling:</b> {animalHandling}</p>
                                    </Title>
                                </div>}
                                {arcana != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Arcana:</b> {arcana}</p>
                                    </Title>
                                </div>}
                                {deception != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Deception:</b> {deception}</p>
                                    </Title>
                                </div>}
                                {espionage != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Espionage:</b> {espionage}</p>
                                    </Title>
                                </div>}
                                {etiquette != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Etiquette:</b> {etiquette}</p>
                                    </Title>
                                </div>}
                                {explosives != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Explosives:</b> {explosives}</p>
                                    </Title>
                                </div>}
                                {firstAid != 0 && <div className='col'>
                                    <Title>
                                        <p><b>First Aid:</b> {firstAid}</p>
                                    </Title>
                                </div>}
                                {firearms != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Firearms:</b> {firearms}</p>
                                    </Title>
                                </div>}
                                {electronicsKnowledge != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Electronics Knowledge:</b> {electronicsKnowledge}</p>
                                    </Title>
                                </div>}
                                {historyKnowledge != 0 && <div className='col'>
                                    <Title>
                                        <p><b>History Knowledge:</b> {historyKnowledge}</p>
                                    </Title>
                                </div>}
                                {intimidation != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Intimidation:</b> {intimidation}</p>
                                    </Title>
                                </div>}
                                {intuition != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Intuition:</b> {intuition}</p>
                                    </Title>
                                </div>}
                                {investigation != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Investigation:</b> {investigation}</p>
                                    </Title>
                                </div>}
                                {marksman != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Marksman:</b> {marksman}</p>
                                    </Title>
                                </div>}
                                {medicine != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Medicine:</b> {medicine}</p>
                                    </Title>
                                </div>}
                                {mechanic != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Mechanic:</b> {mechanic}</p>
                                    </Title>
                                </div>}
                                {naturalSciencesKnowledge != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Natural Sciences Knowledge:</b> {naturalSciencesKnowledge}</p>
                                    </Title>
                                </div>}
                                {persuasion != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Persuasion:</b> {persuasion}</p>
                                    </Title>
                                </div>}
                                {religion != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Religion:</b> {religion}</p>
                                    </Title>
                                </div>}
                                {softwareKnowledge != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Software Knowledge:</b> {softwareKnowledge}</p>
                                    </Title>
                                </div>}
                                {survivalist != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Survivalist:</b> {survivalist}</p>
                                    </Title>
                                </div>}
                                {tracking != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Tracking:</b> {tracking}</p>
                                    </Title>
                                </div>}
                                {willpower != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Willpower:</b> {willpower}</p>
                                    </Title>
                                </div>}
                                {bodyStretching != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Body Stretching:</b> {bodyStretching}</p>
                                    </Title>
                                </div>}
                                {enviromentalAwareness != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Enviromental Awareness:</b> {enviromentalAwareness}</p>
                                    </Title>
                                </div>}
                                {flight != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Flight:</b> {flight} {name == "War Machine" && "(only with War Machine Armor)"
                                        }</p>
                                    </Title>
                                </div>}
                                {magic != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Magic:</b> {magic}</p>
                                    </Title>
                                </div>}
                                {chiControl != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Chi Control:</b> {chiControl}</p>
                                    </Title>
                                </div>}
                                {magnetism != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Magnetism:</b> {magnetism}</p>
                                    </Title>
                                </div>}
                                {telepathy != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Telepathy:</b> {telepathy}</p>
                                    </Title>
                                </div>}
                                {pyrokinesis != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Pyrokinesis:</b> {pyrokinesis}</p>
                                    </Title>
                                </div>}
                                {electrokinesis != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Electrokinesis:</b> {electrokinesis}</p>
                                    </Title>
                                </div>}
                                {cryokinesis != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Cryokinesis:</b> {cryokinesis}</p>
                                    </Title>
                                </div>}
                                {gravitokinesis != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Gravitokinesis:</b> {gravitokinesis}</p>
                                    </Title>
                                </div>}
                                {hydrokinesis != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Hydrokinesis:</b> {hydrokinesis}</p>
                                    </Title>
                                </div>}
                                {aerokinesis != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Aerokinesis:</b> {aerokinesis}</p>
                                    </Title>
                                </div>}
                                {seismokinesis != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Seismokinsis:</b> {seismokinesis}</p>
                                    </Title>
                                </div>}
                                {terrakinesis != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Terrakinesis:</b> {terrakinesis}</p>
                                    </Title>
                                </div>}
                                {thermokinesis != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Thermokinesis:</b> {thermokinesis}</p>
                                    </Title>
                                </div>}
                                {powerCosmic != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Power Cosmic:</b> {powerCosmic}</p>
                                    </Title>
                                </div>}
                                {spiritualAffinity != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Spiritual Affinity:</b> {spiritualAffinity}</p>
                                    </Title>
                                </div>}
                                {weatherControl != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Weather Control:</b> {weatherControl}</p>
                                    </Title>
                                </div>}
                                {wallCrawling != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Wall Crawling:</b> {wallCrawling}</p>
                                    </Title>
                                </div>
                                }
                                {special1 != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Radiation:</b> {special1}</p>
                                    </Title>
                                </div>}

                                {special2 != 0 && <div className='col'>
                                    <Title>
                                        <p><b>Phasing:</b> {special2}</p>
                                    </Title>
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