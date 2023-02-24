import React, { useLayoutEffect } from 'react';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import "./card.css";

function AlternateFormImage(props) {

    const [name, setName] = useState("");
    const [image, setimage] = useState("");
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
                setimage(res.data.image)
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
           <img id="crushnew" src={image} alt="ITTI Team #2" />
        </div>
    );
}

export default AlternateFormImage;