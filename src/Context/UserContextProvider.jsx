import React, { Component, createContext } from "react";
import axios from "axios";
export const UserContext = createContext();
export class UserContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      comments:[],
      error: false,
      isAuth: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.getUsers=this.getUsers.bind(this)
    this.getPost=this.getPost.bind(this)
    this.getComments=this.getComments.bind(this)
  }

  getPost(){
        axios.get("http://localhost:8000/posts").then((res) =>
        this.setState({
          posts: res.data,
        })
      );
  }

  getComments(){
        axios.get("http://localhost:8000/comments").then((res) =>
        this.setState({
          comments: res.data,
        })
      );
  }

  getUsers(){
        axios.get("http://localhost:8000/users").then((res) =>
        this.setState({
          users: res.data.reverse(),
        })
      );
  }

  componentDidMount() {
      this.getPost()
      this.getComments()
      this.getUsers()
  }
  authenticate = ({ email, password }) => {
    // console.log(email, password);
    const { users } = this.state;
    const user = users?.find(
      (item) => item.email === email && item.password === password
    );
    // console.log(user)
    if (user) {
      this.setState({
        error: false,
        isAuth: true,
        cur_user: user,
        cur_uid: user.id,
      });
    } else {
      this.setState({
        error: true,
        isAuth: false,
      });
    }
  };
  createPost = ({ cur_uid, img, post, create_time }) => {

    const {cur_user} = this.state

    axios
      .post("http://localhost:8000/posts", {
        user_id:cur_uid,
        data:post,
        create_time,
        img,
        date: "1mo",
        likes: 227,
        profile_pic:cur_user.profile_img,
        comments_count: 5,
        name:cur_user.first_name+" "+cur_user.last_name,
        title:"CEO of ExamPro, AWS Community Hero and #100DaysOfCloud Core-Team",


      })
      .then((res) => this.getPost())
      .catch((res) => console.log(res, "errr"));

      
  };


  handleLogout() {
    this.setState({
      isAuth: false,
    });
  }
  render() {
    const { authenticate, createPost, handleLogout, getComments,getPost,getUsers } = this;
    const value = { authenticate, handleLogout, createPost, getComments,getPost,getUsers,...this.state };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}


// json-server --watch db.json --port 8000