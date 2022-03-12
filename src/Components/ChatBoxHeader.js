import React, { useEffect, useState } from 'react';
import Avatar from  '../Lustro.png';
import '../App.css';


function ChatBoxHeader(props) {
    console.log(props)
const [isDarkModeActive, setIsDarkModeActive] = useState(props.isDarkModeValue)

// MODE settings  
  const switchModes = (mode) => {
    if(mode === "light") {
      setIsDarkModeActive(false)
      props.setIsDarkModeActiveValue(false)
    } else if(mode === "dark") {
      setIsDarkModeActive(true)
      props.setIsDarkModeActiveValue(true)
    }
  }
  return (
    <div className={isDarkModeActive ? 
        "chatBoxHeader dark-chatBoxheader" : 
        "chatBoxHeader"}>
          
          <img src={Avatar} alt='' className='chatBoxHeaderAvatar'/>
          <h2 className='chatBoxHeaderAvatarName'>Luke Grey</h2>
          <div className={isDarkModeActive ? "toggle-dark": "toggle-light"}>
        <h4 className="light-mode" onClick={() => switchModes("light")}>
          Light
        </h4>
        <h4 className="dark-mode" onClick={() => switchModes("dark")}>
          Dark
        </h4>
      </div>
          </div>
  )
}

export default ChatBoxHeader;