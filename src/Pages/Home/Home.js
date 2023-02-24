import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/HomeComponents/Banner'
import Footer from '../../Components/Footer/Footer'
import './Home.css'
import { useLayoutEffect } from "react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carrousel from '../../Components/HomeComponents/Carrousel'
import { Slide } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import CarrouselTel from '../../Components/HomeComponents/CarrouselTel'
import MiniSocial from '../../Components/HomeComponents/MiniSocial';
import SmallCarrousel from '../../Components/HomeComponents/SmallCarrousel';
import ServicesList from '../Services/ServicesList';
import AboutInfo from '../AboutUs/AboutInfo';
import GoogleReviews from './ImageEffects';
import GoogleReviewsImage from './GoogleReviewsImage';
import GoogleReviewsImageSmall from './GoogleReviewsImageSmall';
import ImageEffects from './ImageEffects';

function Home() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    })

    const Title = withReveal(styled.p`
    `, <Slide left duration={1000} delay={150} />);

    const [reviews, setReviews] = useState([]);
    const [finalreviews, setFinalReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);



    return (
        <React.Fragment>
            <Navbar />
            <div id='Home'>
                <div className=''>
                    <SmallCarrousel />
                </div>


            </div>
            <Footer />

        </React.Fragment>

    )
}


export default Home;