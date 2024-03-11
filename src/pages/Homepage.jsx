import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Break from "../components/Break";
import Tracks from "../components/Tracks";
import Features from "../components/Features";
import Action from "../components/Action";
import Questions from "../components/Questions";
import Others from "../components/Others";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <>
    <Hero /> 
    <About />
    <Break />
    <Tracks />
    <Features />
    <Action />
    <Questions />
    <Others />
    <Contact />
    </>
  )
}

export default Homepage