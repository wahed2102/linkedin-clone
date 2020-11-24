import React from "react";
import styled from "styled-components";

const Navigation = styled.div`
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    width: 84.75%;
    padding: 10px 7.5% 10px 7.5%;
`;

const RightSection = styled.div`
    height: 40px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
`;

const JoinButtons = styled.div`
    color: #707070;
    cursor: pointer;
    font-weight: 600;
    margin-right: 10px;
    padding: 10px;

    &:hover {
        background-color: #e6e6e4;
        color: black;
        border-radius: 5px;
    }
`;

const Seperator = styled.div`
    color: #d4d4e4;
    margin-right: 10px;
`;

const SignInButton = styled.div`
    color: #2f73c3;
    font-weight: 600;
    cursor: pointer;
    padding: 7px 20px;
    border: 1.5px solid #2f73c3;
    border-radius: 20px;

    &:hover {
        background-color: #eaf4fe;
        border: 2px solid #2f73c3;
    }
`;

const Banner = styled.div`
    padding: 16px 7.5%;
    font-size: 20px;
    line-height: 1.4;
    font-weight: 400;
    color: #000000;
    background-color: #e9e5df;
`;

const WelcomeTag = styled.h1`
    width: 80%;
    padding: 0 0 30px 11.5%;
    color: #2977c9;
    font-size: 55px;
    font-weight: 450;
    line-height: 60px;
`;

const FlexDiv = styled.div`
    display: flex;
`;

const Box = styled.div`
    display: flex;
    width: 360px;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    border: 0.5px solid #d8d8d8;
    border-radius: 7px;
    justify-content: space-between;
    margin: 14px 0 14px 11.5%;
    padding: 16px;
    cursor: pointer;

    &:hover {
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.19);
    }
`;

const SearchJobs = styled.div`
    height: 450px;
    margin-top: -146px;
    padding: 200px 0 0 7.5%;
    background-color: #faf9f7;
`;

const Heading2 = styled.div`
    width: 400px;
    font-size: 50px;
    font-weight: 450;
    line-height: 55px;
`;

const Jobs = styled.div`
    color: #5d5d5c;
    font-size: 22px;
    font-weight: 500;
    cursor: pointer;
    padding: 7px 20px;
    margin: 8px 8px 8px 0;
    border-radius: 20px;
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
                    <img src = "https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" alt = "Linkedin Logo" height = "80px"/>
                </div>
                <RightSection>
                    <JoinButtons>Join with resume</JoinButtons>
                    <Seperator>|</Seperator>
                    <JoinButtons>Join now</JoinButtons>
                    <SignInButton>Sign in</SignInButton>
                </RightSection>
            </Navigation>
            
            <Banner>
                <div style = {{cursor: "pointer", width: "590px"}}>
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
                        <img src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz" alt="Community" height = "680px" style = {{marginLeft : "-200px", paddingTop : "30px", zIndex : "2", position : "relative"}}/>
                    </div>
                </FlexDiv>

                <FlexDiv>
                    <SearchJobs style = {{width: "25%"}}>
                        <Heading2>
                            Find open jobs and internships
                        </Heading2>
                    </SearchJobs>
                    <SearchJobs style = {{width: "75%"}}>
                        <div style = {{color : "#656564", fontWeight : "500", paddingBottom : "15px"}}>
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

                        <div style = {{color : "#656564", fontWeight : "500", paddingTop : "15px", cursor : "pointer", width: "130px"}}>
                            Show More <b> ⌵ </b>
                        </div>
                    </SearchJobs>
                </FlexDiv>
            </div>
        </div>
    )
}