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

function NormalFormStats(props) {

    const [name, setName] = useState("");
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
        {character !== "63e9898229200b181d2f6f32" && <div>
            <Title>
                <h1 id="aboutUs-WhoAreWe">
                    <FormattedMessage id="Stats" /> As {name}
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
        </div>
    );
}

export default NormalFormStats;