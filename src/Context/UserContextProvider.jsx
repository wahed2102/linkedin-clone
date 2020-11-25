import React, { Component, createContext } from 'react'
import axios from 'axios'

export const UserContext = createContext()
export class UserContextProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            isAuth :false,
            users:[],
            posts:[],
            error:false,
            isAuth:false,
        }
        this.handleLogout= this.handleLogout.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:8000/users')
        .then(res=>(
            this.setState({
                users:res.data
            })
        ))


        axios.get('http://localhost:8000/posts')
        .then(res=>(
            this.setState({
                posts:res.data
            })
        ))
    }

    authenticate=({email,password})=>{

        const {users} = this.state

        const user = users?.find(item=>(item.email===email && item.password === password))
        // console.log(user)
        if(user)
        {
            this.setState({
                error:false,
                isAuth:true,
                cur_user:user,
                cur_uid:user.id
            })
        }
        else{
            this.setState({
                error:true,
                isAuth:false
            })
        }
    }

    createPost=({user_id,img,post,create_time})=>{
        axios.post('http://localhost:8000/posts',{
            user_id,
            post,
            create_time,
            img
        })
        .then(res=>alert("Post Success"))
        .catch(res=>console.log(res,"errr"))
    }
    
    handleLogout(){
        this.setState({
            isAuth:false
        })
    }

    render() {
        const {authenticate,createPost,handleLogout} = this 
        const value ={authenticate,handleLogout,createPost,...this.state}
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
