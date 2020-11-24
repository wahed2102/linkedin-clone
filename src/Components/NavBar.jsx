import React from 'react';
import styled from "styled-components";
import LinkedinSmallLogo from "../images/linkedinSmallLogo.png";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const LeftSection = styled.div`
    height: 4rem;
    width: 30rem;
    margin: 1rem 12rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        height: 3.8rem;
        width: 28rem;
        margin-left: 1rem;
        border: 0;
        backgroundColor: #eef3f8;

        &:active {
            border: 0;
            width: 40rem;
        }
    }
`;

const RightSection = styled.div`
    height: 5rem;
    margin: 1rem 11rem 0 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.2rem;
`;

const Catergory = styled.div`
    color: #676767;
    width: 8.6rem;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover {
        color: black;
    }

    &:active {
        border-bottom: 0.2rem solid black;
    }

    img {
        height: 2.7rem;
    }
`;

const PremiumUnderline = styled.div`
    width: 12rem;
    color: #d59c07;
    padding: 1rem;
    cursor: pointer;
    text-align: center;

    &:hover{
        text-decoration: underline;
    }
`;

export const NavBar = () => {
    return (
        <Wrapper>
            <LeftSection>
                <div>
                    <img src = {LinkedinSmallLogo} alt = "Linkedin Logo" height = "35" style = {{cursor : "pointer"}}/>
                </div>
                <input placeholder = "Search"
                    style = {{backgroundColor: "#eef3f8"}}
                />
            </LeftSection>

            <RightSection>
                <Catergory>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjM5LjQzNHB4IiBoZWlnaHQ9IjM5LjQzNHB4IiB2aWV3Qm94PSIwIDAgMzkuNDM0IDM5LjQzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzkuNDM0IDM5LjQzNDsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTM5LjQzNCwyMC43MThjMCwxLjEwNC0wLjg5NiwyLTIsMmMtMC4wMDUsMC0wLjAxMiwwLTAuMDIxLDBoLTMuNzA2djAuMjQ5YzAsMC4yMDYtMC4wNCwwLjM5OS0wLjA5OSwwLjU4N3Y5LjgwMQ0KCQljMCwxLjEwNC0wLjg5NiwyLTIsMmgtNi41NjdjLTEuMTA0LDAtMi0wLjg5Ni0yLTJ2LTUuNjM4YzAtMS44MzgtMS40OTYtMy4zMzMtMy4zMzMtMy4zMzNjLTEuODM4LDAtMy4zMzQsMS40OTUtMy4zMzQsMy4zMzN2NS42MzgNCgkJYzAsMS4xMDQtMC44OTYsMi0yLDJINy44MDZjLTEuMTA0LDAtMi0wLjg5Ni0yLTJWMjIuNzE4SDIuMDAxYy0wLjg0NCwwLTEuNTk4LTAuNTI4LTEuODgzLTEuMzIyDQoJCWMtMC4yODQtMC43OTUtMC4wNDMtMS42ODIsMC42MDctMi4yMkwxOC40MzIsNC41MzhjMC43NC0wLjYxMSwxLjgwOC0wLjYxMSwyLjU0OCwwbDUuNDc3LDQuNTI2VjguOTY2YzAtMS4xMDQsMC44OTYtMiwyLTJoMy4yNQ0KCQljMS4xMDQsMCwyLDAuODk2LDIsMnY2LjA5MWw0LjgxNywzLjk4M0MzOS4wNzEsMTkuMzk4LDM5LjQzNCwyMC4wMTYsMzkuNDM0LDIwLjcxOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="Home"/>
                    Home
                </Catergory>
                <Catergory>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDM4LjA5LDI3My4zMmgtMzkuNTk2YzQuMDM2LDExLjA1LDYuMjQxLDIyLjk3NSw2LjI0MSwzNS40MDR2MTQ5LjY1YzAsNS4xODItMC45MDIsMTAuMTU2LTIuNTQzLDE0Ljc4Mmg2NS40NjENCgkJCWMyNC40NTMsMCw0NC4zNDYtMTkuODk0LDQ0LjM0Ni00NC4zNDZ2LTgxLjU4MUM1MTIsMzA2LjQ3Niw0NzguODQ0LDI3My4zMiw0MzguMDksMjczLjMyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTA3LjI2NSwzMDguNzI1YzAtMTIuNDMsMi4yMDUtMjQuMzU0LDYuMjQxLTM1LjQwNEg3My45MWMtNDAuNzU0LDAtNzMuOTEsMzMuMTU2LTczLjkxLDczLjkxdjgxLjU4MQ0KCQkJYzAsMjQuNDUyLDE5Ljg5Myw0NC4zNDYsNDQuMzQ2LDQ0LjM0Nmg2NS40NjJjLTEuNjQxLTQuNjI4LTIuNTQzLTkuNjAxLTIuNTQzLTE0Ljc4M1YzMDguNzI1eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzAxLjI2MSwyMzQuODE1aC05MC41MjJjLTQwLjc1NCwwLTczLjkxLDMzLjE1Ni03My45MSw3My45MXYxNDkuNjVjMCw4LjE2Myw2LjYxOCwxNC43ODIsMTQuNzgyLDE0Ljc4MmgyMDguNzc4DQoJCQljOC4xNjQsMCwxNC43ODItNi42MTgsMTQuNzgyLTE0Ljc4MnYtMTQ5LjY1QzM3NS4xNzEsMjY3Ljk3MSwzNDIuMDE1LDIzNC44MTUsMzAxLjI2MSwyMzQuODE1eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDM4Ljg0Yy00OS4wMTIsMC04OC44ODYsMzkuODc0LTg4Ljg4Niw4OC44ODdjMCwzMy4yNDUsMTguMzQ5LDYyLjI4LDQ1LjQ0Nyw3Ny41MjQNCgkJCWMxMi44NTMsNy4yMywyNy42NzEsMTEuMzYyLDQzLjQzOSwxMS4zNjJjMTUuNzY4LDAsMzAuNTg2LTQuMTMyLDQzLjQzOS0xMS4zNjJjMjcuMDk5LTE1LjI0NCw0NS40NDctNDQuMjgsNDUuNDQ3LTc3LjUyNA0KCQkJQzM0NC44ODYsNzguNzE1LDMwNS4wMTIsMzguODQsMjU2LDM4Ljg0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNOTkuOTE4LDEyMS42ODljLTM2LjY1NSwwLTY2LjQ3NSwyOS44Mi02Ni40NzUsNjYuNDc1YzAsMzYuNjU1LDI5LjgyLDY2LjQ3NSw2Ni40NzUsNjYuNDc1DQoJCQljOS4yOTgsMCwxOC4xNTItMS45MjYsMjYuMTk1LTUuMzg4YzEzLjkwNi01Ljk4NywyNS4zNzItMTYuNTg1LDMyLjQ2Ny0yOS44NmM0Ljk4LTkuMzE3LDcuODEzLTE5Ljk0Niw3LjgxMy0zMS4yMjcNCgkJCUMxNjYuMzkzLDE1MS41MSwxMzYuNTczLDEyMS42ODksOTkuOTE4LDEyMS42ODl6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MTIuMDgyLDEyMS42ODljLTM2LjY1NSwwLTY2LjQ3NSwyOS44Mi02Ni40NzUsNjYuNDc1YzAsMTEuMjgyLDIuODMzLDIxLjkxMSw3LjgxMywzMS4yMjcNCgkJCWM3LjA5NSwxMy4yNzYsMTguNTYxLDIzLjg3NCwzMi40NjcsMjkuODZjOC4wNDMsMy40NjIsMTYuODk3LDUuMzg4LDI2LjE5NSw1LjM4OGMzNi42NTUsMCw2Ni40NzUtMjkuODIsNjYuNDc1LTY2LjQ3NQ0KCQkJQzQ3OC41NTcsMTUxLjUwOSw0NDguNzM3LDEyMS42ODksNDEyLjA4MiwxMjEuNjg5eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="My Network"/>
                    My Network
                </Catergory>
                <Catergory>
                    <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iYm9sZCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjQgMjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE1IDYuNWMtLjU1MiAwLTEtLjQ0OC0xLTF2LTEuNWgtNHYxLjVjMCAuNTUyLS40NDggMS0xIDFzLTEtLjQ0OC0xLTF2LTEuNWMwLTEuMTAzLjg5Ny0yIDItMmg0YzEuMTAzIDAgMiAuODk3IDIgMnYxLjVjMCAuNTUyLS40NDggMS0xIDF6Ii8+PHBhdGggZD0ibTEyLjcxIDE1LjM4Yy0uMTguMDctLjQ0LjEyLS43MS4xMnMtLjUzLS4wNS0uNzctLjE0bC0xMS4yMy0zLjc0djcuNjNjMCAxLjUyIDEuMjMgMi43NSAyLjc1IDIuNzVoMTguNWMxLjUyIDAgMi43NS0xLjIzIDIuNzUtMi43NXYtNy42M3oiLz48cGF0aCBkPSJtMjQgNy43NXYyLjI5bC0xMS43NiAzLjkyYy0uMDguMDMtLjE2LjA0LS4yNC4wNHMtLjE2LS4wMS0uMjQtLjA0bC0xMS43Ni0zLjkydi0yLjI5YzAtMS41MiAxLjIzLTIuNzUgMi43NS0yLjc1aDE4LjVjMS41MiAwIDIuNzUgMS4yMyAyLjc1IDIuNzV6Ii8+PC9zdmc+" alt="Jobs"/>
                    Jobs
                </Catergory>
                <Catergory>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjMwMi4xNjdweCIgaGVpZ2h0PSIzMDIuMTY3cHgiIHZpZXdCb3g9IjAgMCAzMDIuMTY3IDMwMi4xNjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMi4xNjcgMzAyLjE2NzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTI2MS4xNTUsMjQuMDA0SDQxLjAwN0MxOC4zOSwyNC4wMDQsMCw0Mi40MDIsMCw2NS4wMTd2MTI5LjA5MmMwLDIyLjYxMywxOC4zOSw0MS4wMTIsNDEuMDA3LDQxLjAxMmgxNjYuMTdsMzQuNTg4LDQwLjg2OQ0KCQljMS4xODMsMS40MDUsMi45MTgsMi4xNzQsNC42OTUsMi4xNzRjMC43MDksMCwxLjQxOC0wLjEzMywyLjExNC0wLjM4NWMyLjQyNi0wLjg4OSw0LjAzNS0zLjE5NCw0LjAzNS01Ljc2NFYyMzUuMTJoOC41NTENCgkJYzIyLjYxNCwwLDQxLjAwNy0xOC4zOTgsNDEuMDA3LTQxLjAxMlY2NS4wMTdDMzAyLjE2Miw0Mi40MDIsMjgzLjc3NSwyNC4wMDQsMjYxLjE1NSwyNC4wMDR6IE0xMDMuNzUxLDE0NS43MzMNCgkJYy03Ljk0NCwwLTE0LjM4NC02LjQzOC0xNC4zODQtMTQuMzc2YzAtNy45NSw2LjQ0LTE0LjM4NywxNC4zODQtMTQuMzg3YzcuOTM4LDAsMTQuMzgxLDYuNDM3LDE0LjM4MSwxNC4zODcNCgkJQzExOC4xMzIsMTM5LjI5NiwxMTEuNjg5LDE0NS43MzMsMTAzLjc1MSwxNDUuNzMzeiBNMTUxLjA3OCwxNDUuNzMzYy03Ljk0NCwwLTE0LjM4MS02LjQzOC0xNC4zODEtMTQuMzc2DQoJCWMwLTcuOTUsNi40MzctMTQuMzg3LDE0LjM4MS0xNC4zODdjNy45MzgsMCwxNC4zNzksNi40MzcsMTQuMzc5LDE0LjM4N0MxNjUuNDU3LDEzOS4yOTYsMTU5LjAxNiwxNDUuNzMzLDE1MS4wNzgsMTQ1LjczM3oNCgkJIE0yMDEuMzY1LDE0NS43MzNjLTcuOTQ0LDAtMTQuMzg4LTYuNDM4LTE0LjM4OC0xNC4zNzZjMC03Ljk1LDYuNDQzLTE0LjM4NywxNC4zODgtMTQuMzg3YzcuOTM4LDAsMTQuMzgyLDYuNDM3LDE0LjM4MiwxNC4zODcNCgkJQzIxNS43NDcsMTM5LjI5NiwyMDkuMzAzLDE0NS43MzMsMjAxLjM2NSwxNDUuNzMzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt="Messaging"/>
                    Messaging
                </Catergory>
                <Catergory>
                    <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTQyMSAzNjJ2LTEzN2MwLTc4LjI2Ny01NS41MTgtMTQ2LjI2NS0xMzEuNzc3LTE2MS42NDYtMjAuMjczLTQuNDUzLTQ2LjQzNi00LjM5NS02Ni4xODItLjA1OS03Ni41MjMgMTUuNDQtMTMyLjA0MSA4My40MzgtMTMyLjA0MSAxNjEuNzA1djEzN3oiLz48cGF0aCBkPSJtNDIzLjc2MyAzOTJoLTMzNS41MjZjLTYuMjEzIDE3LjQyMi0yMi43MDcgMzAtNDIuMjM3IDMwdjMwaDQyMHYtMzBjLTE5LjUzIDAtMzYuMDI0LTEyLjU3OC00Mi4yMzctMzB6Ii8+PC9nPjxwYXRoIGQ9Im0yMTcuMDk0IDMzLjg4MmMxMS4zMzgtMi40NzYgMjQuOTMyLTMuODUzIDM4Ljg0OC0zLjg1MyAxNC4wMDQgMCAyNy43NDQgMS4zOTIgMzkuNzI3IDQuMDI4IDEuNDU5LjI5NSAyLjc3Mi45MjMgNC4yMTkgMS4yNDktNC40NTQtMjAuMTYtMjIuNDA4LTM1LjMwNi00My44ODgtMzUuMzA2LTIxLjQ5OCAwLTM5LjQ3IDE1LjE3NC00My45MDMgMzUuMzU5IDEuNzEtLjM5MyAzLjI2OC0xLjEyNyA0Ljk5Ny0xLjQ3N3oiLz48cGF0aCBkPSJtMjEzLjc2MyA0ODJjNi4yMTMgMTcuNDIyIDIyLjcwNyAzMCA0Mi4yMzcgMzBzMzYuMDI0LTEyLjU3OCA0Mi4yMzctMzB6Ii8+PC9nPjwvc3ZnPg==" alt="Notifications"/>
                    Notifications
                </Catergory>
                <Catergory>
                    <img src="" alt="Me"/>
                    Me ▼
                </Catergory>
                <Catergory>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzQxLjMzMyAzNDEuMzMzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNDEuMzMzIDM0MS4zMzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjEyOCIgeT0iMTI4IiB3aWR0aD0iODUuMzMzIiBoZWlnaHQ9Ijg1LjMzMyIvPg0KCQkJPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijg1LjMzMyIgaGVpZ2h0PSI4NS4zMzMiLz4NCgkJCTxyZWN0IHg9IjEyOCIgeT0iMjU2IiB3aWR0aD0iODUuMzMzIiBoZWlnaHQ9Ijg1LjMzMyIvPg0KCQkJPHJlY3QgeD0iMCIgeT0iMTI4IiB3aWR0aD0iODUuMzMzIiBoZWlnaHQ9Ijg1LjMzMyIvPg0KCQkJPHJlY3QgeD0iMCIgeT0iMjU2IiB3aWR0aD0iODUuMzMzIiBoZWlnaHQ9Ijg1LjMzMyIvPg0KCQkJPHJlY3QgeD0iMjU2IiB5PSIwIiB3aWR0aD0iODUuMzMzIiBoZWlnaHQ9Ijg1LjMzMyIvPg0KCQkJPHJlY3QgeD0iMTI4IiB5PSIwIiB3aWR0aD0iODUuMzMzIiBoZWlnaHQ9Ijg1LjMzMyIvPg0KCQkJPHJlY3QgeD0iMjU2IiB5PSIxMjgiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+DQoJCQk8cmVjdCB4PSIyNTYiIHk9IjI1NiIgd2lkdGg9Ijg1LjMzMyIgaGVpZ2h0PSI4NS4zMzMiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" alt="Work"/>
                    Work ▼
                </Catergory>
                <PremiumUnderline>
                    Try Premium Free <br/> for 1 Month
                </PremiumUnderline>
            </RightSection>
        </Wrapper>
    )
}
