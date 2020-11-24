import React, { Component } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../Context/UserContextProvider'
import { ProfilePic } from '../ProfilePic'

const Container = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    background-color:white;
    width:40%;
    transform:translate(-50%,-50%);
    z-index:1002;
    border-radius:15px;
    opacity:1;
    
`
const Header = styled.div`
    border-bottom:1px solid gray;
    font-size:20px;
    display:block;
    padding:1.6rem 2.4rem;
    line-height:1.5;
    font-weight:400;
    color:rgba(0,0,0,.9);
    font-style:normal;

`
const Body = styled.div`
    display:flex;
    flex-direction:column;
    max-height: calc(100vh - (94px +64px +64px));
`
const InfoBox = styled.div`

    // align-items:flex-end;
    flex-shrink:0;
    padding:12px 24px;
    display :flex
`
const TextArea = styled.textarea`
    margin:0px 10px;
    padding:10px;
    outline:none;
    border:none
`

const Footer = styled.div`\
    display:flex;
    flex-direction:row-reverse;
    padding:1rem 2rem
`
const Button = styled.button`
    padding:10px 20px;
    border-radius:20px;
    color:white;
    cursor:pointer;
    outline:none;
    border:none;    
    ${props=>props.disabled?`background-color:#bfbfbf;`:`background-color:#004182;`}

`
export  class Card extends Component {

    constructor(props){
        super(props)
        this.state={
            post:"",
            user_id:1,
            post_img:null
        }
    }

handleChnage=(e)=>{
    const {name,value} = e.target
    this.setState({
        [name]:value
    })
}
handlePost=()=>{
    const {post,post_img,user_id} =  this.state
    const {createPost} = this.context
    const event = new Date;
    const create_time = event.toLocaleTimeString('en-US') 
    createPost({user_id,post_img,post,create_time})

}

    render() {
        const {post} = this.state
        return (
            <Container>
                <Header >
                    Create a post
                </Header>
                <Body>
                    <InfoBox>
                        <ProfilePic />
                        <div style={{marginLeft:"14px",lineHeight:"1.5",fontSize:"1rem",fontWeight:600}} >
                            <div>Harsh</div>
                            
                        </div>
                    </InfoBox>
                    <TextArea name="post" value={post} rows="5" cols="50" placeholder="What do you want to talk about?" onChange={(e)=>this.handleChnage(e)} />
                </Body>
                <Footer>
                    {/* {console.log(text==="")} */}
                    <Button onClick={()=>this.handlePost()}  disabled={post.length===0?true:false} >POST</Button>
                </Footer>
                
            </Container>
        )
    }
}

Card.contextType = UserContext