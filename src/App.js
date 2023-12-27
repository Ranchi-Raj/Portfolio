import './App.css';
import dam from "./Assets/dam.jpg"
import dam_night from "./Assets/dam-night.jpg"
import mall from "./Assets/mall.jpg"
import React from 'react';
import bgDay from "./Assets/bg_D.jpg"
import bgNight from "./Assets/bg_day.jpg"

import html from "./Assets/html.png"
import css from "./Assets/css.png"
import js from "./Assets/js.png"
import java from "./Assets/java.png"
import c from "./Assets/C.png"
import python from "./Assets/python.png"


function NavBar(){
  
  return(
    <>    
        <div className='details'>
          <p className='navcontent'>INTRO</p>
          <p className='navcontent'>SKILLS</p>
          <p className='navcontent' href='#background'>BACKGROUND</p>
          <p className='navcontent'>CONTACT</p>
        </div>
    </>
  )
}

function Profile(){

  return(
    <>
     <div id='photos'>
      <img className='photo' src = {dam}/>
      <img className='photo' src = {dam_night}/>
      <img className='photo' src = {mall}/>
     </div>
    </>
  )
}

function Name(){
  return(
    <div className='name'>
     <p> I am Aditya Raj,</p>
     <p>A Programmer</p>
    </div>
  )
}

function Intro(props){

  return(
    <div>
    <img className="bg" src = {props.mode==="Light"? bgDay : bgNight}/> 
    </div>
  )
}

function Skills(){

  const starFull = <i class='bx bxs-star'></i>
  const Star = <i class='bx bx-star'></i>
  const halfStar = <i class='bx bxs-star-half' ></i>

  return(
    <div className='skills'>
      <h1>SKILLS :---</h1>
      <div className="images">
        <div className='sec'>
          <img id="html" className="image" src={html}/>
          <div className='rate' id="rate">
            <p>{starFull}</p>
            <p>{starFull}</p>
            <p>{starFull}</p>
            <p>{halfStar}</p>
            <p>{Star}</p>
          </div>  
        </div>
        <div className='sec'>
         <img className='image' src={css}/>
         <div className='rate'>
            <p>{starFull}</p>
            <p>{starFull}</p>
            <p>{starFull}</p>
            <p>{halfStar}</p>
            <p>{Star}</p>
          </div>  
        </div>
        <div className='sec'>
          <img className='image' src={js}/>
          <div className='rate'>
            <p>{starFull}</p>
            <p>{starFull}</p>
            <p>{halfStar}</p>
            <p>{Star}</p>
            <p>{Star}</p>
          </div>  
        </div>
        <div className='sec'>
          <img className='image' src={java}/>
          <div className='rate'>
            <p>{starFull}</p>
            <p>{starFull}</p>
            <p>{starFull}</p>
            <p>{starFull}</p>
            <p>{Star}</p>
          </div>  
        </div>
        <div className='sec'>
          <img className='image' src={c}/>
            <div className='rate'>
              <p>{starFull}</p>
              <p>{starFull}</p>
              <p>{Star}</p>
              <p>{Star}</p>
              <p>{Star}</p>
            </div>  
        </div>
      </div>
      <div className='sec'>
          <img className='image' id = "py" src={python}/>
            <div className='rate'>
              <p>{starFull}</p>
              <p>{starFull}</p>
              <p>{halfStar}</p>
              <p>{Star}</p>
              <p>{Star}</p>
            </div>  
        </div>
    </div>
  )
} 

function Background(){
  return(
    
  <div className='background' id='background'>
    <h1 id='h1'>BACKGROUND :--</h1>
    <p id='desc'>My name is Aditya Raj. I am Currently 1st year Student at Indian Institute of Technology
      Bhubaneshwar. I am resident of Ranchi, Jharkhand and done my schooling from here itself.
      I have done my 10th from St. Xavier's School while my 12th from Vivekananda Vidya Mandir.
      I have a keen interest in technology, coding and programming down the solutions.
      My hobbies are singing, writing shayris, playing cricket to name a few.
    </p>
  </div>
  )
}

function Contact(){
  return(
    <div className='contact'>
      <h1>CONTACT DETAILS :--</h1>
      <div className='links'>
        <a className='link' target='blank' href='https://www.instagram.com/raj_adi3/'><i class='bx bxl-instagram-alt' ></i></a>
        <a className='link' target='blank' href='https://www.linkedin.com/in/aditya-raj-b13b491b7/'><i class='bx bxl-linkedin' ></i></a>
        <a className='link' target='blank' href='mailto:raj.adi792@gmail.com'><i class='bx bxl-gmail' ></i></a>
        <a className='link' target='blank' href='https://t.me/+XJSvX0NcFG05OGM1'><i class='bx bxl-telegram' ></i></a>
        <a className='link' target='blank' href='https://twitter.com/Ranchi_Raj7'><i class='bx bxl-twitter' ></i></a>
      </div>
    </div>
  )
}

function App() {

  const [mode,setMode] = React.useState("Light")

  function click(){
    setMode(prevMode => prevMode==="Light"?"Dark":"Light")
  }

  const modeLink = mode==="Light"?
    <i id="dark" class='bx bx-toggle-left'></i>:<i id="dark" class='bx bxs-toggle-right' ></i>

    const styles = {
      backgroundColor : mode==="Light"?"white":"black",
      color : mode==="Light"?"black":"white",
    }
    const shadow = {
      boxShadow : "0px 0px 10px {color}"
    }

  return(
    <>
    <div style={styles}>
      <nav className='navbar' style={shadow}>
        <NavBar/>
            <div>
                <p onClick={click} className='navcontent'>{modeLink} DARK MODE</p>
            </div>
            </nav>
      <Name/>
      <Intro
        mode = {mode}
      />
      <hr className="line"/>
      <Profile/>
      <hr className="line"/>
      <Skills/>
      <hr className="line"/>
      <Background/>
      <hr className="line"/>
      <Contact/>
      {/* <hr className="line"/> */}
    </div>
    </>
  )
}

export default App;

/**
 * 
 * <i class='bx bx-toggle-left'></i>
 * <i class='bx bx-toggle-right' ></i>
 * <i class='bx bxs-toggle-left' ></i>
 * <i class='bx bxs-toggle-right' ></i>
 * 
 * upr wala white ke liye
 */
