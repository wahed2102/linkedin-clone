import React, { Component } from 'react'
import profile from './images/harsh.jfif'
import styled from 'styled-components'
import photo from "../images/wahed.jpg";

const Pic = styled.div`
    border-radius:100%;

`

export class ProfilePic extends Component {
    render() {
        return (
            <Pic>
                <img width="44" src={photo} alt="" style={{borderRadius:"100%"}}/>
                {/* {profile} */}
            </Pic>
        )
    }
}
