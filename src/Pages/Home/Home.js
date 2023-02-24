import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Home.css'
import { useLayoutEffect } from "react";
import React, { useState, useEffect } from 'react';
import { Slide } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import SmallCarrousel from '../../Components/HomeComponents/SmallCarrousel';
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