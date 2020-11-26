import React, { Component } from "react";
import styled from "styled-components";
import { CreatePost } from "../CreatePost/CreatePost";
import compose from "../images/compose.png";

const Container = styled.div`
  width: 552px;
  background-color: white;
  border: 1px solid lightgray;
  height: 100px;
  display: flex;
  position: relative;
  justify-content: center;
  border-radius: 10px;
  // padding:10px;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  & .svg-icons {
    color: gray;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  & .svg-icons:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
const Button = styled.button`
  width: 500px;
  min-height: 4.8rem;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  background-color: white;
  // position:absolute;
  color: #b3b3b3;
  border-radius: 35px;
  outline: none;
  margin: 4 0;
  padding: 10 8 10 16;

  border: 1px solid lightgray;
  &:hover {
    background-color: #e6e6e6;
  }
`;

export class PostButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(e) {
    const { modal } = this.state;
    // console.log(e.target)
    this.setState({
      modal: !modal,
    });
  }
  render() {
    const { modal } = this.state;
    return (
      <Container>
        <Button onClick={this.handleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
          </svg>
          <span style={{ marginLeft: 5 }}> Start a Post</span>
        </Button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "500px",
          }}
        >
          <div className="svg-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#70b5f9"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <span style={{ fontSize: "14px", paddingLeft: 8 }}>Photo</span>
          </div>
          <div className="svg-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#e7a33e"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <span style={{ fontSize: "14px", paddingLeft: 8 }}>Video</span>
          </div>
          <div className="svg-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#a0b4b7"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
            </svg>
            <span style={{ fontSize: "14px", paddingLeft: 8 }}>Event</span>
          </div>
          <div className="svg-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="#7fc15e"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <span style={{ fontSize: "14px", paddingLeft: 8 }}>
              Write Article
            </span>
          </div>
        </div>
        {modal ? <CreatePost handleModal={this.handleModal} /> : ""}
      </Container>
    );
  }
}
