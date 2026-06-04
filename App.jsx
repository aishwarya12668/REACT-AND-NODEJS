import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//here i imported Hello.jsx in App.jsx
import Hello from './Components/Hello'
import Hello2 from './Components/Hello2'
import Hello21 from './Components/Hello21'
import Hello22 from './Components/Hello22'
import Hello23 from './Components/Hello23'
import Hello3 from './Components/Hello3'
import Hello4 from './Components/Hello4'
import Fruits from './Components/Fruits'
import HelloClass from './Components/HelloClass'
import StateComp from './Components/StateComp'
import ConditionalComponent from './Components/ConditionalComponent'
import Welcome from './Components/Welcome'
import Code from './Components/Code'
import Counter from './Components/Counter'
import Form from './Components/Form'
function App() {
 const person={
  name:"Ramya",
  Message:"Hi",
  SeatNumbers:[1,2,4]
 }

  return (
    <>
       <Hello/>
       <Hello/>
       <Hello2/>
      <Hello21 name="aishwarya" message="vaidyamath"/>
      <Hello22 name="aishwarya" message="vaidyamath"/>
      <Hello23 name="aishwarya" message="vaidyamath"/>
     <Hello3/>
      <Hello4 person={person}/>
      <Fruits/>
      <HelloClass/>
      <StateComp/>
      //imported function name
      <ConditionalComponent/>
      <Counter/>
      <Form/>
    </>
  )
}

export default App
