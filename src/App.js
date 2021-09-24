import React, { useState, useEffect } from "react";

import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Homepage from "./components/homepage/Homepage";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import Awards from "./components/resume/awards/Awards";
import Education from "./components/resume/education/Education";
import Experience from "./components/resume/experience/Experience";
import Interests from "./components/resume/interests/Interests";
import Publications from "./components/resume/publications/Publications";
import Projects from "./components/resume/projects/Projects";
import Skills from "./components/resume/skills/Skills";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);
    return (
        <main>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/awards"><Awards/></Route>
                    <Route path="/education"><Education/></Route>
                    <Route path="/experience"><Experience/></Route>
                    <Route path="/interests"><Interests/></Route>
                    <Route path="/projects"><Projects/></Route>
                    <Route path="/publications"><Publications/></Route>
                    <Route path="/skills"><Skills/></Route>
                    <Route path="/about"><About/></Route>
                    <Route path="/contact"><Contact/></Route>
                    <Route path="/"><Homepage/></Route>
                </Switch>
                <Footer />
            </Router>
        </main>
  );
}

export default App;
