import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from './Card'

const Modal = styled.div`
    height:100vh;
    width:100vw;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    z-index:999;
    // display:none;
`


export  class CreatePost extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {handleModal} = this.props
        return (
            <Modal >
                <Card  handleModal={handleModal} />
            </Modal>
        )
    }
}
