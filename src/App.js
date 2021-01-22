import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useWindowSize from "./hooks/useWindowSize";

//Styles
import "./styles/App.scss";

//Componenets Pages

import Home from './pages/home';
import Cipher from './pages/projects/cipher';
import Cella from './pages/projects/cella';
import Echo from './pages/projects/echo';
import About from './pages/about';
import Contact from './pages/contact';

//Componenets

import Introduction from './components/introduction';
import Navigation from './components/navigation'

//Routing array

const routes = [
  { title: "Scott Templeton Portfolio", path: '/', Component: Home },
  { title: "Encoded Messenger", path: '/cipher', Component: Cipher },
  { title: "Online Community Radio Station", path: '/cella', Component: Cella },
  { title: "Concept Branding", path: '/echo', Component: Echo },
  { title: "About me", path: '/about', Component: About },
  { title: "Let's connect", path: '/contact', Component: Contact },
];

//Constants

const INTRODUCTION_TIMEOUT = 2500;

const App = () => {

  const [introduction, setIntroduction] = useState(false);
  const [initial, setInitial] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
    setTimeout(() => {
      setIntroduction(true);
    }, INTRODUCTION_TIMEOUT);
  })

  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
      }px`;
  };


  const skewScrolling = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        <AnimatePresence exitBeforeEnter>
          {introduction ? (
            <div className="main">
              <Route render={({ location }) => (
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    {routes.map(({ path, Component }) => (
                      <Route
                        exact
                        path={path}
                        key={path}
                        render={() => <Component key={path + "Comp"} intro={introduction} />} />
                    ))}
                  </Switch>
                </AnimatePresence>
              )} />
            </div>
          ) : (
              <Introduction key="intro-component" />
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
