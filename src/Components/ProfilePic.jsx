import React, { Component } from 'react'
import profile from './images/harsh.jfif'
import styled from 'styled-components'

const Pic = styled.div`
    border-radius:100%;

`

export class ProfilePic extends Component {
    render() {
        return (
            <Pic>
                <img width="44" src={profile} alt="" style={{borderRadius:"100%"}}/>
                {/* {profile} */}
            </Pic>
        )
    }
}
