import React, { Component } from 'react'
import profile from './images/harsh.jfif'
import styled from 'styled-components'

const Pic = styled.div`
    border-radius:100%;

`

export class ProfilePic extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const  {width} = this.props
        return (
            <Pic>
                <img width={width} src={profile} alt="" style={{borderRadius:"100%"}}/>
                {/* {profile} */}
            </Pic>
        )
    }
}
