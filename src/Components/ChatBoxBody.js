import React from 'react';
import  { useEffect, useState } from 'react';
import '../App.css';

function ChatBoxBody(props) {
    const [isDarkModeActive, setIsDarkModeActive] = useState()
    const [savedChat, setSavedChat] = useState([]);
    useEffect(()=>{
        setIsDarkModeActive(props.isDarkModeActive);
        setSavedChat(props.savedChat)
    },[props])
  return (
    <div  className={isDarkModeActive ? "chatBoxBody dark-chatBoxBody" : "chatBoxBody"}>
    
    {savedChat?savedChat.map((message)=>{
       return<><div key={message.chatID}  className={isDarkModeActive ? "userMessage dark-userMessage" : "userMessage"}>
         <div  id='userInputMessage' className={isDarkModeActive ? "message dark-message" : "message"}>
       {message.chatMessage}
      </div>
        <div className={isDarkModeActive ? "messageTime dark-messageTime" : "messageTime"}>{message.DeliveryTime}</div>
       </div>
      <div className='chatBotResponse' key={message.chatID+"12"}> 
        <div  id="chatBotResponseMessage" className={isDarkModeActive ? "message dark-message" : "message"} >
          {message.chatMessage}
          </div>
          <div className={isDarkModeActive ? "messageTime dark-messageTime" : "messageTime"}>{message.DeliveryTime}</div>
          </div></> }):<>Loading</>}
    </div>
  )
}

export default ChatBoxBody