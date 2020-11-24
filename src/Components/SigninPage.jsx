import React from "react"
import styled from "styled-components"
import styles from "./SigninPage.module.css"

export class SigninPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            text:"Show"
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(e){
        e.preventDefault();
console.log(e.target.textContent)
if(e.target.textContent==="Show") this.setState({text:"Hide"})
else this.setState({text:"Show"})
    }
    render() {
        const {text}=this.state
        return (
           
               <div className={styles.outer}>
                   
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="" />

                    

                        <div style={{fontSize:"30px"}} >Welcome Back</div>
                        <div className={styles.light}>Don't miss your next opportunity. Sign in to stay updated on your professional world.</div>
                        <div> <input class="inputbox" placeholder="Email or Phone" /></div>
                        <div> <form><input class="inputbox" style={{width:"100px",border:"none", lineHeight : "25px"}}type="password" placeholder="Password" /><button className={styles.showbtn} onClick={(e)=>this.handleClick(e)}>{text}</button></form></div>
                        <button class="btn">Signin</button>
                        <div className={`${styles.small}`}>forgot password?</div>
                        <div className={styles.small}> <div style ={{color:"black"}}>New to Linkedin?</div> join now</div>
                  
                </div>



           
        )
    }
}