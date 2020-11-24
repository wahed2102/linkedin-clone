import React from "react";
import styled from "styled-components";
import LinkedIn from "../images/LinkedIn.png";

const FooterStyled = styled.ul`
  // max-width: 112.8rem;
  height: 5rem;
  margin: 0 15.5rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  color: #666666;
`;

const FooterStyledDiv = styled.li`
  font-family: Roboto, sans-serif;
  padding: 0.8rem;
  list-style: none;
`;

const FooterA = styled.a`
  text-decoration: none;
  color: #666666;

  :hover {
    color: #0073b1;
  }
`;

const Footer = () => {
  const arr = [
    "© 2020",
    "About",
    "Accessibility",
    "User Agreement",
    "Privacy Policy",
    "Cookie Policy",
    "Copyright Policy",
    "Brand Policy",
    "Guest Controls",
    "Community Guidelines",
    "Language ⌵",
  ];

  return (
    <div style = {{ borderTop: "0.1rem solid rgba(0, 0, 0, 0.15)"}}>
      <FooterStyled>
        <FooterStyledDiv>
          <img src={LinkedIn} style={{ width: 56 }} />
        </FooterStyledDiv>
        {arr.map((item) => {
          return (
            <FooterStyledDiv>
              <FooterA href="#">{item}</FooterA>
            </FooterStyledDiv>
          );
        })}
      </FooterStyled>
    </div>
  );
};

export default Footer;
