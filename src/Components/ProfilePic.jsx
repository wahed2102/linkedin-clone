import React, { Component } from 'react'
import profile from './images/harsh.jfif'
import styled from 'styled-components'
import photo from "../images/wahed.jpg";
import { UserContext } from '../Context/UserContextProvider';

const Pic = styled.div`
    border-radius:100%;

`

export class ProfilePic extends Component {
    render() {
        const {cur_user} = this.context

        return (
            <Pic>
                <img width="44" src={cur_user.profile_img} alt="" style={{borderRadius:"100%"}}/>
                {/* {profile} */}
            </Pic>
        )
    }
}
ProfilePic.contextType = UserContext
