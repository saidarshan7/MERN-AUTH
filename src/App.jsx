import React,{ memo, useState,Fragment } from 'react'

import './App.css'

function App() {



return <>
 <CardWrapper  innerComponent ={<TextComponent/>} />
 <CardWrapper  innerComponent ={<View/>} />

 

</>

}
export default App

function TextComponent() {
  return <div>
    Hello There
  </div>
}

function View() {
  return <div>
    hello There22
  </div>
}


function CardWrapper({innerComponent}) {
return <div style={{border:"2px solid white" ,padding:"20px"}}>
  {innerComponent }


</div>
}
 
// const [todos, setTodods] = useState([{
//   id:1,
//   title:"go to gym",
//   description:"got to gym today"
// },
// {
//   id:2,
//   title:"go to room",
//   description:"got to bed today"
// },
// {
//   id:3,
//   title:"go to ground",
//   description:"play something today"
// }

// ])

// function addTodo() {
//   setTodods([...todos,{
//     id:counter++,
//     title:Math.round(),
//     description:Math.random()
//   }])
// }


// return(
//   <>
//   <button>Add todo</button>
//   <div>{todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description} />)}</div>
//   </>
// )


// function Todo({title , description}) {
//   return(
//     <>
//     <h1>{title}</h1>
//     <h3>{description}</h3>
//     </>
//   )
// }

//   return (
//     <Fragment>  
//     <Header title="Saidarshan"  /> 
//     <Header title="Saidarshan1"  /> 
//     <Header title="Saidarshan2"  /> 
//     <Header title="Saidarshan3"  /> 
//     <Header title="Saidarshan4"  /> 
//     <Header title="Saidarshan4  />
   
//     </Fragment>
//   )
// }


// // function HeaderwithButton(){
// //   const [title, setCount] = useState(0)
// //   return (<>
// //        <Header title={title} /> 
    
// //     <button onClick={() => setCount("MY Name is " + Math.random())}>Change The Number</button>


// //   </>)
// // }

// const Header = memo(({title})=>{
//   return (
//     <>
//     <div>{title}</div>
    
//     </>)
  
// })

// // function Header({title}) {  //object destructuring 
// //   return (
// //     <>
// //     <div>{title}</div>
    
// //     </>
// //   )
// // }









//  <reactLogo.fragment></reactLogo.fragment>
//any time react actually updaetes the dom then we call it re-rendering
//specially in mobile app or games in react rerendering whole thing is not good thing

//why rerender happens
   // a state variable that is being used inside a component changes
   //a parent component re-render triggers all children re-rendering
   //Here Setitle  is rerendering App component
   //define state varibale inside lowest common anncestor if it is used in its children

   //how we rerender necessery things
   //1.Pushing Down The State
   //2.Memo lets you skip re-rendering a component when its props are unchanged