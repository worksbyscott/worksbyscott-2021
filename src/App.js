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
import Prism from './pages/projects/prism'

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
  { title: "Prism Library", path: '/prism', Component: Prism },
  { title: "Let's connect", path: '/contact', Component: Contact },
];

//Constants

const INTRODUCTION_TIMEOUT = 2500;

const App = () => {

  const [introduction, setIntroduction] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntroduction(true);
    }, INTRODUCTION_TIMEOUT);
  })

  return (
    <div className="app">
      <AnimatePresence exitBeforeEnter >
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
                  <Route key={"noMatch"} component={Home} />
                </Switch>
              </AnimatePresence>
            )} />
          </div>
        ) : (
          <Introduction key="intro-component" />
        )}
      </AnimatePresence>
    </div>


  );

}

export default App;