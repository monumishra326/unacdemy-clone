
import React, { useState } from "react";
import styled from "styled-components";
import HomeBlock3 from "./HomeBlock";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./Home.css";
import { Overlay } from "../Login/Overlay";
import { useDispatch } from "react-redux";
import { showSide } from "../../store/action";
import { useSelector } from "react-redux";

function Home() {
  const ref = React.useRef(null);


const {show} =useSelector((state)=>({show:state.show}))
const dispatch = useDispatch()

  const handleLogin=()=>{
    dispatch(showSide(!show))
    console.log(show);
    // setShow(!show)
  }

  

  React.useEffect(() => {
    ref.current.continuousStart();
    setTimeout(() => ref.current.complete(), 500);
  }, []);

  return (
    // <BeforeHomePageStyled>
    <>
    {show?<Overlay />:show}
      <LoadingBar color="#08BD80" height="5px" ref={ref} />
      <div className="parent_head">
        <div className="header">
          <div className="navbar">
            <img
              style={{ cursor: "pointer", }}
              src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"
              alt="logo"
            />

            <button onClick={handleLogin} className="button">Login</button>
          </div>
          <div className="heading">
            <div className="head"style={{ marginLeft:"70px" }}>
              India’s largest
              <br />
              learning platform
            </div>
            <br />

            <div className="course">
              
                <Link to="/explore">
                  <button className="btn">Start Learning</button>
                  <div className="txt">Popular goals 

<span className="txt2">UPSC CSE - GS 
IIT JEE
NEET UG
CAT & Other MBA Ent...
Bank Exams
GATE & ESE </span></div>
                </Link>
              </div>
              
            <br />
            <br />
            <br />
            <div className="block3">
              {block3adetails.map((el) => {
                return <HomeBlock3 {...el} />;
              })}
            </div>
            <br />
            <br />
            <br />
            <div className="block4">
              <div className="block41">
                <div className="block411">
                  Get the learning
                  <br /> app
                </div>
                <div className="block412">
                  Download lessons and learn anytime,
                  <br /> anywhere with the Unacademy app
                </div>
                <div className="block413">
                  <a href="https://apps.apple.com/in/app/unacademy-learning-app/id1342565069?referrer%3Dutm_source%253DFooter%2526utm_medium%253DWebApp%2526utm_campaign%253DFooter%2526">
                    <img
                      src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=1920"
                      alt="playstore"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.unacademyapp&referrer=utm_source%3DFooter%26utm_medium%3DWebApp%26utm_campaign%3DFooter%26">
                    <img
                      src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=1920"
                      alt="playstore"
                    />
                  </a>
                </div>
              </div>
              <div className="block42">
                <img
                  src="https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&w=640"
                  alt="mobile"
                />
              </div>
            </div>
            <div className="block5">
                        <h1>Start learning with</h1>
                        <h1>Unacademy</h1>
                        <p className="txt3">Get unlimited access to structured</p><p className="txt3">courses & doubt clearing sessions</p>
                        <Link to="/explore">
                  <button className="btn1">Start Learning</button>
                 
                  </Link>

                    </div>
                  <div className="block6">
                  <img
              style={{ cursor: "pointer", }}
              src="https://raw.githubusercontent.com/danish4git/UNACADEMY-CLONE/master/src/images/pp.png"
              alt="logo"
            />
                  </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

const block3adetails = [
  {
    id: "b31",
    title: "Daily live classes",
    image:
      "https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&w=384",
    discription:
      "Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on",
  },
  {
    id: "b32",
    title: "Practice and revise",
    image:
      "https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&w=384",
    discription:
      "Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision",
  },
  {
    id: "b33",
    title: "Learn anytime, anywhere",
    image:
      "https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&w=384",
    discription:
      "One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices Get the learning",
  },
];
export default Home;
