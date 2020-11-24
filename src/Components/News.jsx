import React from "react"
import styled from "styled-components"
const Wrapper=styled.div`
 border:1px solid grey;
 padding:5px;
 margin:5px;
 display:block
`
const List=styled.ul`
font-size: 1.4rem;
    line-height: 1.42857;
    padding-right: 16px!important;
    margin-top:4px!important;
    font-weight:600
   
`
const Small=styled.small`

    font-weight:400;
    padding:10px

`
const Li=styled.li`
&hover{
    background-color:blue
}
`
export class News extends React.Component{
    constructor(props){
        super(props)
        
}

render(){
    return(
     <Wrapper>
         <List>
       <ul>

           <Li>Elon Musk is world's second richest<br/>
               <Small>ass.asdad</Small>
           </Li>
           <li>Elon Musk is world's second richest<br/>
               <Small>.asdad</Small></li>
               <li>Elon Musk is world's second richest<br/>
               <Small>.asdad</Small></li>
       </ul>
       </List>
     </Wrapper>
    )
}
}