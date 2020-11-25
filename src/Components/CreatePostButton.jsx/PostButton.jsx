import React, { Component } from 'react'
import styled from 'styled-components'
import { CreatePost } from '../CreatePost/CreatePost'
import compose from '../images/compose.png'

const Container = styled.div`
    width:99vw;
    background-color:white;
    border:1px solid red;
    height:100px;
    display:flex;
    position:relative;
    justify-content:center;    
    // padding :1rem;

`
const Button = styled.button`
    width:95vw;
    height:2rem;
    background-color:white;
    position:absolute;
    color:#b3b3b3;
    border-radius:10px;
    outline:none;
    margin:1rem;
    
    border:1px solid #b3b3b3;
    &:hover {
        background-color:#e6e6e6
    }
`



export class PostButton extends Component {
    constructor(props){
        super(props)
        this.state={
            modal:false
        }
        this.handleModal=this.handleModal.bind(this)
    }

    handleModal(e){
        const {modal} = this.state
        // console.log(e.target)
        this.setState({
            modal:!modal
        })
    }
    render() {
        const {modal} = this.state
        return (
            <Container>
                <Button onClick ={this.handleModal}>
                    Start a Post
                </Button>

                {
                    modal?(<CreatePost handleModal={this.handleModal} />):""
                }
            </Container>
        )
    }
}
