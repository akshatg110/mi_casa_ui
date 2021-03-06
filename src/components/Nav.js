import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import {
  Wrapper,
  Container,
  Body,
  Page,
  LinkTag,
  SocialContainer,
  Overlaybg
} from "../styles/Navigation.styles";
import { withRouter } from "react-router";
import NavButton from "./NavButton";

const NavigationMenu = ({ history, hasBackground, setBackground }) => {
  const [isOn, setState] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [linking, setLink] = useState("");

  useEffect(() => {
    !!linking &&
      setTimeout(() => {
        switch (linking) {
          case "home":
            history.push("/");
            setState(false);
            setLink("");
            break;
          case "about":
            history.push("/about");
            setState(false);
            setLink("");
            break;
          case "project":
            history.push("/project");
            setState(false);
            setLink("");
            break;
          case "testimonial":
            history.push("/testimonial");
            setState(false);
            setLink("");
            break;
          // case "contact":
          //   history.push("/contact");
          //   setState(false);
          //   setLink("");
          //   break;
          default:
            setLink("");
        }
        setBackground(false);
        window.scrollTo(0, 0);
      }, 0);
  }, [linking, history, setBackground]);

  useEffect(() => {
    shouldAnimate &&
      !isOn &&
      setTimeout(() => {
        setShouldAnimate(false);
      }, 0);
  }, [shouldAnimate, isOn]);

  const closeHandler = () => {
    setShouldAnimate(true);
    setState(!isOn);
  };

  const setLinkHandler = text => {
    setShouldAnimate(true);
    setLink(text);
  };

  useEffect(() => {
    const header = document.getElementById("header");
    const totop = document.getElementById("scroll-to-top")
    const scrollCallBack = window.addEventListener("scroll", () => {
    // if (window.pageYOffset > sticky + 0) {
    header.classList.add("sticky");
    totop.classList.add("show");
    // }
    // else {
    //   header.classList.remove("sticky");
    //   totop.classList.remove("show");
    // } 
    });
    header.classList.add("sticky");
    totop.classList.add("show");
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
    }, []);
  
  return (
    <header>
      <div id="header"></div>
      <div className="logo">
        <Link to="/" style={{ textDecoration: 'none' }}>
          {/* <img src="./img/nesh2.png" className="img-fluid" alt="#" /> */}
          <h1 style={{fontSize: 40,fontFamily: "Cochin",fontWeight: "bold",color:'black'}}>
            Mi Casa
          </h1>
        </Link>
        {/* <span className="callus">Call Us: (+91) 8012345678</span> */}
      </div>
      <Wrapper open={isOn} shouldAnimate={shouldAnimate}>
        <Overlaybg
          open={isOn}
          shouldAnimate={shouldAnimate}
          onClick={closeHandler}
        />
        <Container
          open={isOn}
          onClick={closeHandler}
          hasBackground={hasBackground}
        >
          <NavButton open={isOn} />
        </Container>
        <Body className="midwrpr" open={isOn} shouldAnimate={shouldAnimate}>
          <div className="conPage">
            <Page
              className="mainBtn"
              variant="home"
              onClick={() => setLinkHandler("home")}
            >
              <LinkTag>Home</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="about"
              onClick={() => setLinkHandler("about")}
            >
              <LinkTag>About</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="project"
              onClick={() => setLinkHandler("project")}
            >
              <LinkTag>Projects</LinkTag>
            </Page>
            <Page
              className="mainBtn"
              variant="testimonial"
              onClick={() => setLinkHandler("testimonial")}
            >
              <LinkTag>Testimonial</LinkTag>
            </Page>
            {/* <Page
              className="mainBtn"
              variant="contact"
              onClick={() => setLinkHandler("contact")}
            >
              <LinkTag>Contact</LinkTag>
            </Page> */}
          </div>

          <div className="info">
            <span>(+234) 801234567</span>
            <span className="link">support@micasa.com</span>
            <span>Gurgaon, Haryana</span>
          </div>
        </Body>
        <SocialContainer className="soc-icon" open={isOn}>
          <span>Follow us:</span>
          <span className="socicon">
            <i className="fa fa-facebook-f"></i>
          </span>
          <span className="socicon">
            <i className="fa fa-linkedin"></i>
          </span>
          <span className="socicon">
            <i className="fa fa-twitter"></i>
          </span>
          <span className="socicon">
            <i className="fa  fa-instagram"></i>
          </span>
        </SocialContainer>
      </Wrapper>
    </header>
  );
};

export default withRouter(NavigationMenu);
