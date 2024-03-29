import React from 'react';
import { FormattedMessage } from "react-intl";
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Powercard from './Powercard';

function ArmorDetail(props) {

    const [name, setName] = useState("");
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
    const [powers, setpowers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    let params = useParams();

    const Title = withReveal(styled.p`
  `, <Fade up duration={1000} delay={200} />);

    useEffect(() => {
        async function fetchArmor(id) {
            setLoading(true);
            try {
                const res = await axios.request(`http://localhost:5000/api/forms/${id}`)
                setName(res.data.name)
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
                setpowers(res.data.powers)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchArmor(props.id);
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred: {error.message}</p>;

    else return (
        <React.Fragment>

            <Title>
                <div className="container d-flex justify-content-center ">
                    <h1> {name} </h1>
                </div>
            </Title>
            <div id="AboutUs">
                <div className="container-fluid">
                    <div className="aboutUs-behindITTI row">

                        <div className="col-12 col-lg-6 text-center">

                            <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                                <Title>
                                    <img id="crushnew" src={image} alt="ITTI Team #2" />
                                </Title>
                            </div>
                            <Title>
                                <h1 id="aboutUs-WhoAreWe">
                                    <FormattedMessage id="Stats" />
                                </h1>
                            </Title>
                            <div className='row'>
                                <div className='col'>
                                    <p><b>Strength:</b> {strength}</p>
                                </div>
                                {name !== "Bleeding Edge Armor" && <div className='col'>
                                    <p><b>HP:</b> {hp}</p>
                                </div>}
                                {name == "Bleeding Edge Armor" && <div className='col'>
                                    <p><b>Armor NP:</b> {hp}</p>
                                </div>}
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
                        </div>
                        <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                            <Fade right>
                                <img id="crushnew" src={image} alt="ITTI Team #2" />
                            </Fade>
                        </div>
                    </div>
                    <div className="aboutUs-behindITTI row">
                        <div className="col-lg-6 text-center aboutUs-team2-col">
                            <Title>
                                <h1 id="aboutUs-WhoAreWe">
                                    <FormattedMessage id="Skills" />
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
                                <p><b>Flight:</b> {flight} </p>
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

                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            <Title>
                                <h1 id="aboutUs-WhoAreWe">
                                    <FormattedMessage id="Abilities" />
                                </h1>
                            </Title>
                            {abilities.map((ability) => (
                                <p><b>{ability.split(":")[0]}</b>: {ability.split(":")[1]}</p>
                            ))}
                            {weaknesses.length > 0 && <div>
                                <Title>
                                    <h1 id="aboutUs-WhoAreWe">
                                        <FormattedMessage id="Weaknesses" />
                                    </h1>
                                </Title>
                                {weaknesses.map((weakness) => (
                                    <p><b>{weakness.split(":")[0]}</b>: {weakness.split(":")[1]}</p>
                                ))}
                            </div>}
                        </div>

                    </div>

                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="row py-4">

                            <Title>
                                {(powers.length != 0) && <div>
                                    <h1 id="aboutUs-WhoAreWe">
                                        {(name !== ("Modular Armor"||"Armor 616")) &&
                                            <FormattedMessage id="Powers" />}
                                    </h1>
                                    <h1 id="aboutUs-WhoAreWe">
                                        {(name == "Modular Armor" || name == "Armor 616") &&
                                            <FormattedMessage id="Modules" />}
                                    </h1>
                                </div>}
                            </Title>
                            {powers.map((power) => (
                                <div className="col-md-3 py-2">
                                    <Powercard id={power} />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment >
    );
}

export default ArmorDetail;