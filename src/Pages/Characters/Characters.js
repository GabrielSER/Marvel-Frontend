import React, { useLayoutEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { Carousel } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Card from "./Card";
import { Slide } from 'react-reveal';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';




const cards = [
    {
        id: 1,
        title: "Fazt Web",
        image: "https://i.ibb.co/zfmgQP8/Spider-Man.png",
        logo: "https://i.ibb.co/c3sDqxw/Spider-Man.png",
    },
    {
        id: 2,
        title: "Fazt Blog",
        image: "https://i.ibb.co/9cfwbQ2/Daredevil.jpg",
        logo: "https://i.ibb.co/Yy8LSjC/Daredevil.png",
    },
    {
        id: 3,
        title: "Fazt Youtube",
        image: "https://i.ibb.co/tc4KP8t/Thor.jpg",
        logo: "https://i.ibb.co/54hWJLW/Thor.png",
    },
    {
        id: 4,
        title: "Fazt Youtube",
        image: "https://i.ibb.co/tc4KP8t/Thor.jpg",
        logo: "https://i.ibb.co/54hWJLW/Thor.png",
    },
    {
        id: 4,
        title: "Fazt Youtube",
        image: "https://i.ibb.co/tc4KP8t/Thor.jpg",
        logo: "https://i.ibb.co/54hWJLW/Thor.png",
    },
    {
        id: 4,
        title: "Fazt Youtube",
        image: "https://i.ibb.co/tc4KP8t/Thor.jpg",
        logo: "https://i.ibb.co/54hWJLW/Thor.png",
    },
    {
        id: 4,
        title: "Fazt Youtube",
        image: "https://i.ibb.co/tc4KP8t/Thor.jpg",
        logo: "https://i.ibb.co/54hWJLW/Thor.png",
    },
    {
        id: 4,
        title: "Fazt Youtube",
        image: "https://i.ibb.co/tc4KP8t/Thor.jpg",
        logo: "https://i.ibb.co/54hWJLW/Thor.png",
    },
    {
        id: 4,
        title: "Fazt Youtube",
        image: "https://i.ibb.co/tc4KP8t/Thor.jpg",
        logo: "https://i.ibb.co/54hWJLW/Thor.png",
    },
];

function Characters() {

    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchChars() {
            setLoading(true);
            try {
                const res = await axios.request('http://localhost:5000/api/characters')
                setChars(res.data.data);
                console.log(res);
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
            <div className="aboutUs-banner row">
                <div className="col-12 aboutUs-banner-col d-none d-lg-block">
                    <img className="image-zoom3" src="/Assets/Photos/AboutUs/bannercharacters.png" alt="Banner artisan" />
                </div>
            </div>
            <div className="aboutUs-banner row d-lg-none d-xl-none">
                <div className="col-12 aboutUs-banner-col">
                    <img className="image-zoomsmallxd" src="/Assets/Photos/AboutUs/bannercharacters.png" alt="Banner artisan" />
                    <div id="aboutUs-banner-small">
                    </div>
                </div>
            </div>
            <div className="container d-flex">
                <div className="row py-4">
                    {chars.map((chars) => (
                        <div className="d-flex justify-content-center col-md-4 col-sm-2 py-3" key={chars.id}>
                            <Card imageSource={chars.image} logo={chars.logo} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Characters;