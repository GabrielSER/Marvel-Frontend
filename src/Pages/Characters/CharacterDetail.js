import React from 'react';
import { FormattedMessage } from "react-intl";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./card.css";
import NormalFormAbilities from './NormalFormAbilities';
import NormalFormSkills from './NormalFormSkills';
import NormalFormStats from './NormalFormStats';
import IronManArmors from './IronManArmors';
import AlternateFormImage from './AlternateFormImage';
import Powercard from './Powercard';
import NormalFormPowers from './NormalFormPowers';
import { useCharacters } from '../../Contexts/CharactersContext';

const propertyMappings = {
    "aerialPiloting": "Aerial Piloting",
    "energyprojection": "Energy Projection",
    "motorVehiclePiloting": "Motor Vehicle PilotinNg",
    "heavyEquipmentPiloting": "Heavy Equipment Piloting",
    "bikePiloting": "Bike Piloting",
    "meleeWeapons": "Melee Weapons",
    "throwst": "Throw",
    "waterPiloting": "Water Piloting",
    "rangedWeapons": "Ranged Weapons",
    "animalHandling": "Animal Handling",
    "electronicsKnowledge": "Electronics Knowledge",
    "historyKnowledge": "History Knowledge",
    "naturalSciencesKnowledge": "Natural Sciences Knowledge",
    "softwareKnowledge": "Software Knowledge",
    "firstAid": "First Aid",
    "enviromentalAwareness": "Enviromental Awareness",
    "spiritualAffinity": "Spiritual Affinity",
    "chiControl": "Chi Control",
    "weatherControl": "Weather Control",
    "wallCrawling": "Wall Crawling",
    "bodyStretching": "Body Stretching",
    "special1": "Radiation",
    "special2": "Phasing",
    "special3": "Chlorokinesis",
}

const CharacterProperty = (props) => {

    const { name, value } = props

    return (
        <p><b>{name}:</b> {value}</p>
    )
}

const Stat = (props) =>
    <div className='col'>
        <CharacterProperty {...props} />
    </div>

const Skill = (props) => {
    if (props.value == 0) return null

    return (
        <div className='col'>
            <CharacterProperty {...props} />
        </div>
    )
}


const renderProperties = (section, component) =>
    Object.keys(section)
        .map(key => {
            const props = {
                name: propertyMappings[key] ?? key,
                value: section[key]
            }
            props.name = props.name.charAt(0).toUpperCase() + props.name.slice(1)
            return component(props)
        })
        .filter(element => element != null)

const toPairs = (array) => {
    const pairs = []
    for (let i = 0; i < array.length; i += 2) {
        pairs.push([array[i], array[i + 1]])
    }
    return pairs
}


const CharacterDetail = () => {

    const params = useParams()
    const { characters } = useCharacters()
    const [character, setCharacter] = useState()

    useEffect(() => {
        const id = params._id
        const character = characters.get(id)
        setCharacter(character)
        if (!character) {
            console.error(`Character not found ${id}`)
        }
    }, [params._id, characters])

    const [alt, setalt] = useState("");
    const [alternate, setAlternate] = useState(false);
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

    const Title = withReveal(styled.p`
  `, <Fade right duration={1000} delay={200} />);

    const Title2 = withReveal(styled.p`
  `, <Fade up duration={1000} delay={200} />);

    if (loading || !character) return <div id="AboutUs">
        <div className="container-fluid">
            <div className="aboutUs-behindITTI row">
                <div class="loadingring">Loading
                    <span></span>
                </div>
            </div>
        </div>
    </div>;
    if (error) return <p>An error occurred: {error.message}</p>;

    else return (
        <>
            <Title2>
                <div className="container d-flex justify-content-center ">
                    <img class="img-fluid" src={character.logo} alt="Banner artisan" />
                </div>
            </Title2>
            <div id="AboutUs">
                <div className="container-fluid">
                    <div className="aboutUs-behindITTI row">

                        <div className="col-12 col-lg-6 text-center">

                            <div className="col-lg-6 aboutUs-team2-col d-lg-none d-xl-none">
                                <Title2>
                                    {!alternate && <img id="crushnew" src={character.image} alt="ITTI Team #2" />}
                                </Title2>
                            </div>
                            <p><b>Real Name:</b> {character.alterego}</p>
                            <p>{character.description}</p>
                            {
                                !alternate &&
                                <div>
                                    <Title>
                                        <h1 id="aboutUs-WhoAreWe">
                                            <FormattedMessage id="Stats" />{
                                                (character.forms.length != 0 && character.name !== "Iron Man" && character.name !== "Moon Knight") && <h1> as {character.name}</h1>
                                            }
                                        </h1>
                                    </Title>
                                    {
                                        toPairs(renderProperties(character.stats, Stat))
                                            .map(pair =>
                                                <div className='row'>
                                                    {pair[0]}
                                                    {pair[1]}
                                                </div>
                                            )
                                    }
                                </div>
                            }
                            {alternate && <div>
                                <NormalFormStats id={character.forms[1]} />
                            </div>}
                            {(character.forms.length !== 0 && character.name !== "Moon Knight") && <NormalFormStats id={character.forms[0]} />}
                        </div>
                        {!alternate && <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                            <Fade right>
                                <img id="crushnew" src={character.image} alt="ITTI Team #2" />
                            </Fade>
                        </div>}
                        {alternate && <div className="col-lg-6 text-center aboutUs-team2-col d-none d-lg-block">
                            <AlternateFormImage id={character.forms[1]} />
                        </div>}
                    </div>
                    <div className="aboutUs-behindITTI row">
                        <div className="col-lg-6 text-center aboutUs-team2-col">
                            {!alternate && <div>
                                <Title>
                                    <h1 id="aboutUs-WhoAreWe">
                                        Skills{(character.forms.length != 0 && character.name !== "Iron Man" && character.name !== "War Machine" && character.name !== "Moon Knight") && <h1> as {character.name}</h1>}
                                        {character.name == "Moon Knight" && <h1 id="aboutUs-WhoAreWe">
                                            as {character.alterego}</h1>
                                        }
                                    </h1>
                                </Title>
                                {renderProperties(character.skills, Skill)}
                                {renderProperties(character.specialSkills, Skill)}
                            </div>}

                            {alternate && <div>
                                <NormalFormSkills id={character.forms[1]} />
                            </div>}

                            {(character.forms.length > 0 && character.name != "Moon Knight") && <NormalFormSkills id={character.forms[0]} />}

                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            {!alternate && <div>
                                <Title>
                                    <h1 id="aboutUs-WhoAreWe">
                                        <FormattedMessage id="Abilities" />{
                                            (character.forms.length != 0 && character.name !== "Iron Man" && character.name !== "War Machine" && character.name !== "Moon Knight") &&
                                            <h1> as {character.name}</h1>
                                        }
                                    </h1>
                                </Title>
                                {character.abilities.map((ability) => (
                                    <p><b>{ability.split(":")[0]}</b>: {ability.split(":")[1]}</p>
                                ))}
                                {character.weaknesses.length > 0 && <div>
                                    <Title>
                                        <h1 id="aboutUs-WhoAreWe">
                                            <FormattedMessage id="Weaknesses" />{
                                                (character.forms.length != 0 && character.name !== "Iron Man" && character.name !== "War Machine" && character.name !== "Moon Knight") &&
                                                <h1> as {character.name}</h1>
                                            }
                                        </h1>
                                    </Title>
                                    {character.weaknesses.map((weakness) => (
                                        <p><b>{weakness.split(":")[0]}</b>: {weakness.split(":")[1]}</p>
                                    ))}
                                </div>
                                }
                            </div>}

                            {alternate && <div>
                                <NormalFormAbilities id={character.forms[1]} />
                            </div>}
                            {character.forms.length > 0 && <NormalFormAbilities id={character.forms[0]} />}
                        </div>

                    </div>

                    {character.name == "Moon Knight" &&
                        <div className='aboutUs-behindITTI row'>
                            <div className='col-12 col-lg-6'>
                                <NormalFormSkills id={character.forms[0]} />
                            </div>
                            <div className='col-12 col-lg-6'>
                                <NormalFormSkills id={character.forms[1]} />
                            </div>

                        </div>}
                    {(character.forms.length > 0 && character.name != "Iron Man") && <NormalFormPowers id={character.forms[0]} />}

                    <div className="d-flex justify-content-center align-items-center p-5">
                        <div className="row py-4">

                            <Title>
                                {(character.powers.length != 0) && <h1 id="aboutUs-WhoAreWe">
                                    <FormattedMessage id="Powers" />  {(character.forms.length != 0 && character.name !== "Iron Man" && character.name !== "War Machine" && character.name !== "Moon Knight") &&
                                        <h1>as {character.name}</h1>}
                                </h1>}
                            </Title>
                            {character.powers.map((power) => (
                                <div className="col py-2">
                                    <Powercard id={power} />
                                </div>

                            ))}
                        </div>
                    </div>


                    {character.name == "Iron Man" && <IronManArmors></IronManArmors>}
                    {!alternate && <div>
                        {(character.name == "Venom" || character.name == "Agent Venom") &&
                            <div className="d-flex justify-content-center">
                                <button className='button' onClick={() => handleClickScroll("alt")}>
                                    {character.name == "Venom" && <p>Change to Anti-Venom</p>}
                                    {character.name == "Agent Venom" && <p>Change to Venom</p>}</button>
                            </div>}
                    </div>}
                    {alternate && <div>
                        {(character.name == "Venom" || character.name == "Agent Venom") &&
                            <div className="d-flex justify-content-center">
                                <button className='button' onClick={() => handleClickScroll("")}>
                                    {character.name == "Venom" && <p>Change to Venom</p>}
                                    {character.name == "Agent Venom" && <p>Change to Anti-Venom</p>}
                                </button>
                            </div>}
                    </div>}
                </div>
            </div>
        </>
    );
}

export default CharacterDetail;