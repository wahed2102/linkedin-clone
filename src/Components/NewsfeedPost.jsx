import React, { Component } from 'react';
import { DisplayPost } from "./DisplayPost";
import axios from "axios";
import { UserContext } from '../Context/UserContextProvider';

export class NewsfeedPost extends Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount () {
        const {getPost} = this.context
        getPost()
    }

    render() {
        const {posts} = this.context;
        // console.log(posts);
        if(posts){
            return (
                <div style = {{borderRadius : "1rem"}}>
                    {
                        posts?.map((item) => {
                            return (
                                <DisplayPost
                                    key = {item.id}
                                    id = {item.id}
                                    name = {item.name}
                                    title = {item.title}
                                    profile_pic = {item.profile_pic}
                                    date = {item.date}
                                    likes = {item.likes}
                                    comments_count = {item.comments_count}
                                    data = {item.data}
                                    image= {item.img}
                                />
                            )
                        })
                    }
                </div>
            )
        }
        else {
            <h2>Error Loading Feed</h2>
        }
    }
}

NewsfeedPost.contextType = UserContext