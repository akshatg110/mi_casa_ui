import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/animated-on3step.css";
import "./styles/main.scss";

import Preloader from "./components/Preloader";
import NavigationMenu from "./components/Nav";
import ScrollToTopBtn from './components/ScrollToTop';
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/works";
import News from "./pages/News";
import Contact from "./pages/Contact";


function App() {
  const [loading, setLoading] = useState(true);
  const [navBackground, setNavBack] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <NavigationMenu
            firstTime={loading}
            hasBackground={navBackground}
            setBackground={state => setNavBack(state)}
          />
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Project" exact component={Work} />
          <Route path="/Services" exact component={News} />
          <Route path="/Testimonial" exact component={Contact} />
          
        <ScrollToTopBtn />  
        </div>
      )}
    </Router>
  );
}

export default App;