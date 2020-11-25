
import React, { Component } from 'react'
import styled from 'styled-components'
import { ProfilePic } from '../ProfilePic'

const Container = styled.div`
    width:95vw;
    border:1px solid black;
    background-color:white;
    // display flex;
    padding:10px;
    border-radius:10px
`   
const Header = styled.div`
    display :flex
`
const Body = styled.div`

`

const Footer = styled.div`

`

const Comments = styled.div`

`

export class Feed extends Component {
    constructor(props){
        super(props)
        this.state={
            following_post:[]
        }
        this.viewPosts=this.viewPosts.bind(this)
    }

    viewPosts(){
        const {cur_uid,posts,following} = this.context
        const users = following
    }

    render() {
        return  (
            <Container>
                <Header>
                    <div> <ProfilePic width = "35" /></div>
                    <div style={{padding:"0px 5px"}}>
                        <div>Name</div>
                        <div 
                            style={{fontSize:"11px",
                                    overflow:"hidden",whiteSpace:"nowrap"
                                    ,textOverflow:"ellipsis",
                                    width:"220px"    
                                }}
                        >
                            Time DSD SDSDDDWWWW EWEWEWE WE WE EWEWE WEWEE  dfdffdffdf ererererere  erererere rererer errrerererer werwereererererererrer rerereerererererererrerer  T 444 4 4R4R4RQWWE2 EE 23E  234 2E
                        </div>
                        <div style={{fontSize:"11px"}}>tIME</div>
                    </div>
                </Header>
                <Body>
                    <div>text</div>
                    <div>Image</div>
                </Body>
                <Footer>
                    <button>Comment</button>
                </Footer>
                <Comments>
                    
                </Comments>

            </Container>
        )
    }
}

// Feed.contextType= 