import React, { Component, createContext } from 'react'
import axios from 'axios'

export const UserContext = createContext()
export class UserContextProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            isAuth :false,
            users:[],
            posts:[]

        }
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

        users?.map(item=>{
            if(item.email===email && item.password === password)
            {
                alert(item.email)
            }

        })

    }

    createPost=({user_id,post_img,post,create_time})=>{
        axios.post('http://localhost:8000/posts',{
            user_id,
            post,
            create_time,
            post_img
        })
        .then(res=>console.log(res.data))
        .catch(res=>console.log(res,"errr"))
    }

    render() {
        const {authenticate,createPost} = this 
        const value ={authenticate,createPost,...this.state}
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
