import React, { Component } from 'react'
import styles from "./DisplayPost.module.css";
import { UserContext } from "../Context/UserContextProvider";
import axios from "axios";

export class DisplayPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addComments : "",
            comments : []
        }
    }
    
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState ({
            [name] : value
        })
    }

    handleKeyUp = (e,id) => {
        const {addComments} =  this.state;

        if(e.key === "Enter") {
            this.handleComment({id, addComments});
            this.setState ({
                addComments : ""
            })
        }
        console.log(id)
    }

    handleComment=({id, addComments}) =>{
        const {comments} = this.state;
        const {cur_uid} = this.context;
      console.log(addComments)
        axios.post("http://localhost:8000/comments", {
            post_id: id,
            addComments,
            user_id : cur_uid
        })
        .then((res) => {
            const payload = {
                post_id: id,
                addComments,
                user_id : cur_uid
            }
            this.setState ({
                comments: [...comments, payload]
            })
        })
        .catch((err) => console.log(err))
    }

    getallcomments = () => {
        const {comments} = this.state;
        axios.get("http://localhost:8000/comments")
            .then((res) => {
                this.setState({
                    comments : res.data,
                })
            })
    }

    componentDidUpdate(prevState) {
        if(prevState.comments !== this.state.comments) {
            this.getallcomments();
        }
    }

    render() {
        const {id, name, title, profile_pic, date, likes, comments_count, data} = this.props;
        const {addComments, comments} = this.state;
        return (
            <div className = {styles.Container}>
                <div className = {styles.PostContainer}>
                    <div className = {styles.FriendsDetails}>
                        <div>
                            <img src = {profile_pic} alt = {title} height = "50" style ={{cursor : "pointer", borderRadius : "100%"}} />
                        </div>
                        <div style = {{margin: "0 2rem 0 1rem", width : "35rem" ,cursor : "pointer", overflow : "hidden", whiteSpace : "nowrap", textOverflow : "ellipsis"}}>
                            <div>
                                <div style = {{float: "left", fontWeight: "700", paddingRight: "0.4rem"}}>{name} • </div> <div style={{float:"left"}}> 1st </div> <br/>
                            </div>
                            <div>
                                {title}
                            </div>
                            <div>
                                <div style = {{float: "left", paddingRight: "0.4rem"}}>{date} •</div> <div style = {{float: "left"}}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                </svg></div>
                            </div>
                        </div> 
                        <div className = {styles.FollowButton}>
                            + Follow
                        </div>
                    </div>
                    <div className = {styles.PostData}>
                        {data}
                    </div>
                    <div className = {styles.LikesCommentsDiv}>
                        <div className = {styles.Likes}>
                            <div>
                                <img src = "https://static-exp3.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt = "Like"/>
                            </div>
                            <div>
                                <img src = "https://static-exp3.licdn.com/sc/h/54ivsuv8nxk12frsw45evxn3r" alt = "Support"/>
                            </div>                    
                            <div>
                                <img src = "https://static-exp3.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt = "Celebrate"/>
                            </div>
                            <div style = {{paddingLeft : "0.5rem"}}>
                                {likes}
                            </div>
                        </div>
    
                        <div className = {styles.CommentsCount}>
                            {comments_count} Comments
                        </div>
                    </div>
                </div>
    
                <div className = {styles.FlexDisplay} style = {{marginBottom : "1rem"}}>
                    <div className = {styles.AllFunctionButtons}>
                        <div style = {{paddingRight : "0.4rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                            </svg>
                        </div>
                        <div>
                            Like
                        </div>
                    </div>
    
                    <div className = {styles.AllFunctionButtons}>
                        <div style = {{paddingRight : "0.4rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                            </svg>
                        </div>
                        <div>
                            Comment
                        </div>
                    </div>
    
                    <div className = {styles.AllFunctionButtons}>
                        <div style = {{paddingRight : "0.4rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                            </svg>
                        </div>
                        <div>
                            Share
                        </div>
                    </div>
    
                    <div className = {styles.AllFunctionButtons}>
                        <div style = {{paddingRight : "0.4rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                            </svg>
                        </div>
                        <div>
                            Send
                        </div>
                    </div>
                </div>
    
                <div className = {styles.FlexDisplay} style = {{padding : "1rem"}}>
                    <div>
                        <img height = "50" style ={{cursor : "pointer", borderRadius : "100%"}} src = "https://media-exp1.licdn.com/dms/image/C5103AQHqiEgs5aMnHw/profile-displayphoto-shrink_100_100/0/1573111449010?e=1611792000&v=beta&t=iDqt4khcMRxg2HtQyqdZmXVog4ha0Zos770CmOrk-gU" alt = "User Pic"/>
                    </div>
                    <div className = {styles.FlexDisplay}>
                        <input 
                            className = {styles.InputComment}
                            placeholder = "Add a Comment..."
                            value = {addComments}
                            name = "addComments"
                            onChange = {this.handleChange}
                            onKeyUp = {(e) => this.handleKeyUp(e, id)}
                        />
                        <div style = {{marginLeft : "-8rem"}} className = {styles.FlexDisplay}>
                            <div className = {styles.EmojiImageComment}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
                                </svg>
                            </div>
                            <div className = {styles.EmojiImageComment} style = {{marginRight: "2rem"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div style = {{width : "12rem", padding : "1rem", fontWeight : "500", fontSize : "1.3rem", cursor : "pointer", color : "#3a3939"}}>
                    Most Relevant ▼
                </div>

                <div className = {styles.FlexDisplay} style = {{padding : "1rem"}}>
                    <div style = {{paddingRight : "1rem"}}>
                        <img height = "50" style ={{cursor : "pointer", borderRadius : "100%"}} src="https://media-exp1.licdn.com/dms/image/C5103AQFsrHwL2EknRg/profile-displayphoto-shrink_100_100/0?e=1611792000&v=beta&t=YyQMnSt_Bzd-NknFQ7QaE28tpR40jtJpQwRcmFzqeUY" alt="Comment User Pic "/>
                    </div>
                    <div>
                        {
                            comments?.map((item) => {
                                if(item.post_id == id) {
                                    return (
                                        <div  className = {styles.Comment}>{item.addComments}</div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className = {styles.LoadMoreComments}>
                    Load more comments
                </div>
            </div>
        )
    }
}

DisplayPost.contextType = UserContext;