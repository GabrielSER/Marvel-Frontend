import "./CombatMain.css";
import React, {useLayoutEffect} from 'react';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import withReveal from 'react-reveal/withReveal';
import CombatInfo from "./CombatInfo";

function CombatMain() {

    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    })
    const Title = withReveal(styled.p`
  `, <Fade up duration={1000} delay={200} />);

  return (
      <React.Fragment>
          <Navbar/>
          <CombatInfo></CombatInfo>
          <Footer/>
      </React.Fragment>

  )
}

export default CombatMain