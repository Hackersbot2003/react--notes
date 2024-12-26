import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

//app.jsx is a type of a function so lets declare a function here itself
function MyApp(){
    return(
        <div>
            <h1>custom app</h1>
        </div>
    )
}
//myapp wala data jo hai wo tree structure jaisa ki reactElement me hai usseme convert hoga

const reactElement ={                   //react sees  dat in form of tree

    type:"a" ,                           //it shows type of element
    props:{
        href:"https://google.com",
        target:"_blank_"
    },
    Children:"click me to visit google"
}
//to agar me issko directly render karu to wo hoga


const anotherElement =(
    <a href="https://google.com" target="_blank_">visit google</a>
)

const anotherUser ="chai aur react"

//this is used
const reactElement1 = React.createElement(
    "a" ,                       //tag
    {href:"https://google.com",target:"_blank_"},     //properties attributes
    "click here google jayega"  ,             //jo show karna hai text or expression
    anotherUser                     //write evaluated expression
)

createRoot(document.getElementById('root')).render(
  
    //<MyApp />
    //MyApp()        optimisation problem

    //<reactElement/>           //object jo aa raha hai uske syntax hi sahi nahi hai
    //ReactElement     
    
    //anotherElement         //it works
    reactElement1

    //<App/>

 
)
