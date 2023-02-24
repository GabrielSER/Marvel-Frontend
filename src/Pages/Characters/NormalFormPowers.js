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
import Powercard from './Powercard';

function NormalFormPowers(props) {

    const [name, setName] = useState("");
    const [powers, setpowers] = useState([]);
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
                setpowers(res.data.powers)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchForms(props.id);
    }, []);
    if (loading) return <div class="loadingring">Loading
        <span></span>
    </div>;
    if (error) return <p>An error occurred: {error.message}</p>;

    else return (
        <div className="d-flex justify-content-center align-items-center p-5">
            <div className="row py-4">

                <Title>
                    {(powers.length != 0) && <h1 id="aboutUs-WhoAreWe">
                        <FormattedMessage id="Powers" /> <h1>as {name}</h1>

                    </h1>}
                </Title>
                {powers.map((power) => (
                    <div className="col py-2">
                        <Powercard id={power} />
                    </div>

                ))}
            </div>
        </div>
    );
}

export default NormalFormPowers;