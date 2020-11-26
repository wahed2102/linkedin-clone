import React, { Component } from 'react';
import { DisplayPost } from "./DisplayPost";
import axios from "axios";

export class NewsfeedPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts : []
        }
    }

    componentDidMount () {
        axios.get("http://localhost:8000/posts")
        .then((res) => {
            this.setState({
                posts: res.data
            })
        })
        .catch((err) => err)
    }

    render() {
        const {posts} = this.state;
        console.log(posts);
        if(posts){
            return (
                <div>
                    {
                        posts.map((item) => {
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