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

function NormalFormSkills(props) {

    const [name, setName] = useState("");
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
    const [character, setcharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    let params = useParams();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })
    const Title = withReveal(styled.p`
  `, <Fade up duration={1000} delay={200} />);

    useEffect(() => {
        async function fetchForms(id) {
            setLoading(true);
            try {
                const res = await axios.request(`http://localhost:5000/api/forms/${id}`)
                setName(res.data.name)
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
                setcharacter(res.data.character)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchForms(props.id);
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occurred: {error.message}</p>;

    else return (
        <div>
            {(character !== "63e9898229200b181d2f6f32" && character !== "63e9cbfcdc29df185633ef32") && <div>
                <Title>
                    <h1 id="aboutUs-WhoAreWe">
                        <FormattedMessage id="Skills" /> As {name}
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
                        <p><b>Flight:</b> {flight}</p>
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
        </div>
    );
}

export default NormalFormSkills;