import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LinkedIn from "../images/LinkedIn.png";
import Footer from "./Footer";

const Navigation = styled.div`
    display: flex;
    height: 7rem;
    justify-content: space-between;
    width: 134.7rem;
    padding: 1.5rem 10rem;
`;

const RightSection = styled.div`
    height: 4rem;
    width: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
`;

const JoinButtons = styled.div`
    color: #707070;
    cursor: pointer;
    font-weight: 600;
    margin-right: 1rem;
    padding: 1rem;

    &:hover {
        background-color: #e6e6e4;
        color: black;
        border-radius: 0.5rem;
    }
`;

const Seperator = styled.div`
    color: #d4d4e4;
    margin-right: 1rem;
`;

const SignInButton = styled.div`
    color: #2f73c3;
    font-weight: 600;
    cursor: pointer;
    padding: 0.7rem 2rem;
    border: 0.15rem solid #2f73c3;
    border-radius: 2rem;

    &:hover {
        background-color: #eaf4fe;
        border: 0.2rem solid #2f73c3;
    }
`;

const Banner = styled.div`
    padding: 1.6rem 10rem;
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 400;
    color: #000000;
    background-color: #e9e5df;
`;

const WelcomeTag = styled.h1`
    width: 80rem;
    color: #2977c9;
    font-size: 5.5rem;
    font-weight: 450;
    padding: 4rem 0 3rem 10rem;
    margin-bottom: 2rem;
    line-height: 6rem;
`;

const FlexDiv = styled.div`
    display: flex;
`;

const Box = styled.div`
    display: flex;
    width: 40rem;
    height: 6rem;
    font-size: 1.8rem;
    line-height: 3rem;
    border: 0.05rem solid #d8d8d8;
    border-radius: 0.7rem;
    justify-content: space-between;
    margin: 2rem 0 2rem 10rem;
    padding: 1.6rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.19);
    }
`;

const SearchJobs = styled.div`
    height: 55rem;
    margin-top: -13.6rem;
    padding: 18rem 0 15rem 10rem;
    background-color: #faf9f7;
`;

const Heading2 = styled.div`
    width: 40rem;
    font-size: 5rem;
    font-weight: 450;
    line-height: 5.5rem;
`;

const Jobs = styled.div`
    color: #5d5d5c;
    font-size: 2.2rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.7rem 2rem;
    margin: 0.8rem 0.8rem 0.8rem 0;
    border-radius: 2rem;
    background-color: #e6e6e4;
    z-index: 1;

    &:hover {
        background-color: #bcb8b1;
        color: black;
    }
`;

export const LandingPage = () => {
    return (
        <div>
            <Navigation>
                <div>
                    <img src = {LinkedIn} alt = "Linkedin Logo" height = "38" style = {{cursor : "pointer"}}/>
                </div>
                <RightSection>
                    <JoinButtons>Join with resume</JoinButtons>
                    <Seperator>|</Seperator>
                    <JoinButtons>Join now</JoinButtons>
                    <NavLink to = "/signin" style = {{textDecoration : "none"}}>
                        <SignInButton>Sign in</SignInButton>
                    </NavLink>
                </RightSection>
            </Navigation>
            
            <Banner>
                <div style = {{cursor: "pointer", width: "59rem"}}>
                    Help and resources during the COVID-19 outbreak. <u>Learn More</u> ❯
                </div>
            </Banner>

            <div>
                <FlexDiv>
                    <div>
                        <WelcomeTag>Welcome to your professional community</WelcomeTag>
                        <Box>
                            <div>
                                Search for a job
                            </div>
                            <div style = {{color : "#a9a9a9"}}>
                                ❯
                            </div>
                        </Box>
                        <Box>
                            <div>
                                Find a person you know
                            </div>
                            <div style = {{color : "#a9a9a9"}}>
                                ❯
                            </div>
                        </Box>                    
                        <Box>
                            <div>
                                Learn a new skill
                            </div>
                            <div style = {{color : "#a9a9a9"}}>
                                ❯
                            </div>
                        </Box>
                    </div>
                    <div>
                        <img src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz" alt="Community" height = "680" style = {{marginLeft : "-10rem", paddingTop : "4rem", zIndex : "2", position : "relative"}}/>
                    </div>
                </FlexDiv>

                <FlexDiv>
                    <SearchJobs style = {{width: "50rem"}}>
                        <Heading2>
                            Find open jobs and internships
                        </Heading2>
                    </SearchJobs>
                    <SearchJobs style = {{width: "85rem"}}>
                        <div style = {{color : "#656564", fontWeight : "500", paddingBottom : "1.5rem", fontSize : "1.5rem"}}>
                            SUGGESTED SEARCHES
                        </div>

                        <FlexDiv>
                            <Jobs>Engineering</Jobs>
                            <Jobs>Business Development</Jobs>
                            <Jobs>Finance</Jobs>
                        </FlexDiv>
                        <FlexDiv>
                            <Jobs>Administrative Assistant</Jobs>
                            <Jobs>Retail Associate</Jobs>
                        </FlexDiv>
                        <FlexDiv>
                            <Jobs>Customer Service</Jobs>
                            <Jobs>Operations</Jobs>
                            <Jobs>Information Technology</Jobs>
                        </FlexDiv>
                        <FlexDiv>
                            <Jobs>Marketing</Jobs>
                            <Jobs>Human Resource</Jobs>
                        </FlexDiv>

                        <div style = {{color : "#656564", fontWeight : "500", paddingTop : "1.5rem", cursor : "pointer", width: "13rem", fontSize : "1.5rem"}}>
                            Show More <b> ⌵ </b>
                        </div>
                    </SearchJobs>
                </FlexDiv>
            </div>
            <Footer></Footer>
        </div>
    )
}