import React, { useLayoutEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { Carousel } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "./CharacterCard";
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./card.css";

function NormalFormAbilities(props) {

    const [name, setName] = useState("");
    const [abilities, setabilities] = useState([]);
    const [weaknesses, setweaknesses] = useState([]);
    const [character, setcharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);



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
                setabilities(res.data.abilities)
                setweaknesses(res.data.weaknesses)
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
                {abilities.length > 0 && <div>
                    <Title>
                        <h1 id="aboutUs-WhoAreWe">
                            <FormattedMessage id="Abilities" /> As {name}
                        </h1>
                    </Title>
                    {abilities.map((ability) => (
                        <p><b>{ability.split(":")[0]}</b>: {ability.split(":")[1]}</p>
                    ))}
                </div>}
                {weaknesses.length > 0 && <div>
                    <Title>
                        <h1 id="aboutUs-WhoAreWe">
                            <FormattedMessage id="Weaknesses" /> As {name}
                        </h1>
                    </Title>
                    {weaknesses.map((weakness) => (
                        <p><b>{weakness.split(":")[0]}</b>: {weakness.split(":")[1]}</p>
                    ))}
                </div>}
            </div>}
        </div>
    );
}

export default NormalFormAbilities;