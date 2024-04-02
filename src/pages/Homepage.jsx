import React, { useEffect, Suspense } from "react";
import Hero from "../components/Hero";

// import About from "../components/About";
// import Break from "../components/Break";
// import Tracks from "../components/Tracks";
// import Features from "../components/Features";
// import Action from "../components/Action";
// import Questions from "../components/Questions";
// import Others from "../components/Others";

const About = React.lazy(() => import("../components/About"))
const Colors = React.lazy(() => import("../components/Colors"))
const Tracks = React.lazy(() => import("../components/Tracks"))
const Features = React.lazy(() => import("../components/Features"))
const Action = React.lazy(() => import("../components/Action"))
const Rules = React.lazy(() => import("../components/Rules"))
const Questions = React.lazy(() => import("../components/Questions"))
const Colors2 = React.lazy(() => import("../components/Colors2"))
const Others = React.lazy(() => import("../components/Others"))

const Homepage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <>
      <Hero />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Colors />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Tracks />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Features />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Action />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Rules />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Questions />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Colors2 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Others />
      </Suspense> */}
      {/* <Contact /> */}
    </>
  )
}

export default Homepage