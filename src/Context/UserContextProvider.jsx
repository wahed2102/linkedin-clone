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
            cur_uid:null,
            cur_user:[],
            following:[]

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

        const verify =  users?.find(item=>item.email===email && item.password === password)
        console.log(verify)

        this.setState({
            cur_user:verify,
            cur_uid:verify.id,
            following:verify.following
        })
    

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
