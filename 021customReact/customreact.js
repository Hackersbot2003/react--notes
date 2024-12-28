 
function customRender(reactElement,cointainer){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute("href",reactElement.props.href)
    domElement.setAttribute("target",reactElement.props.target)

    cointainer.appendChild(domElement )
    */
   //here we have to specify for each and every attribute
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML= reactElement.Children
   for (const prop in reactElement.props) {
    //when someone specify children in props
    if (prop === "Childre") continue;
    domElement.setAttribute(prop,reactElement.props[prop])       //konsa element set karna hai kya karna hai
   }
   cointainer.appendChild(domElement)
}



const reactElement ={                   //react sees  dat in form of tree

    type:"a" ,                           //it shows type of element
    props:{
        href:"https://google.com",
        target:"_blank_"
    },
    Children:"click me to visit google"
}

const mainCointainer =document.querySelector("#root")

customRender(reactElement,mainCointainer)            //kya inject karu aur kaha par inject karu