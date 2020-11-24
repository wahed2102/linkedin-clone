import React from "react";
import styled from "styled-components";
import LinkedIn from "../images/LinkedIn.png";

const FooterStyled = styled.ul`
  // max-width: 1128px;
  height: 50px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  color: #666666;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
`;

const FooterStyledDiv = styled.li`
  font-family: Roboto, sans-serif;
  font-size: 1.2rem;
  // font-weight: 600;
  padding: 8px;
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
    "Language",
  ];

  return (
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
  );
};

export default Footer;
