import React, { useEffect, useState } from 'react';
import moment from 'moment';
import '../App.css';



function ChatBoxFooter(props) {
    console.log("Footer",props)
    const [savedChat, setSavedChat] = useState([]);
    const[input,setInput] = useState("");
    const[isEmpty,setEmpty]=useState(true)
    const [error, setError] =useState(null)
    const [isDarkModeActive, setIsDarkModeActive] = useState(props.isDarkModeValue)
    useEffect(()=>{
        setSavedChat(props.savedChat);
        setInput(props.input);
        setEmpty(props.isEmpty);
        setIsDarkModeActive(props.isDarkModeValue)
    },[props])
    const send = e =>{
        //console.log("in send")
         if(input.length===0){
          setEmpty(true)
          console.log("in send")
           return
         }
         const stringValPatternValidation = stringVal => {
          return /\s/g.test(stringVal);
        };
         const isValid = stringValPatternValidation(input);
         console.log("valid", isValid)
         if(isValid){
          setEmpty(true)
          console.log("in send")
           return
         }
        setEmpty(true);
        try {
          
          e.preventDefault();
          let copy = [...savedChat];
          const date = new moment()
         // const deliveryTime = `${date.get('hour')}:${date.get('minute')}`
          const deliveryTime =date.format(' h:mm a');;
          console.log(deliveryTime)
          copy = [...copy, { chatID: savedChat.length + 1, chatMessage: input,DeliveryTime: deliveryTime}];
          setSavedChat(copy);
          props.setSavedChat(copy)
          console.log("in copy",copy)
          setInput("")
          localStorage.setItem('chats', JSON.stringify(savedChat));
        }catch (error) {
          setError( error );
        }
     
    }

  return (
    <div className={isDarkModeActive ? "chatBoxInput dark-chatBoxInput" : "chatBoxInput"}  >
    
    <form action="#0" id="user-input-form">
    <input type="text" id="user-input" className={isDarkModeActive ? "userInput dark-userInput" : "userInput"} placeholder="Talk to Luke..."value={input} onChange={e=>{setInput(e.target.value)}}/>
    <button type='submit'  disabled={!isEmpty} className= {isDarkModeActive ? "sendButton dark-sendButton" : "sendButton"} onClick={send}>Send</button>
  </form>
    </div>
  )
}

export default ChatBoxFooter