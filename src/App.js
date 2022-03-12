import './App.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ChatBoxHeader from './Components/ChatBoxHeader';
import ChatBoxBody from './Components/ChatBoxBody';



const Appd=()=>{

  const [isDarkModeActive, setIsDarkModeActive] = useState(false)
  const [savedChat, setSavedChat] = useState([]);
  const[input,setInput] = useState("");
  const[isEmpty,setEmpty]=useState(true)
  const [error, setError] =useState(null)
  useEffect(()=>{
    let getChat = localStorage.getItem('chats');
    let data  = JSON.parse(getChat)
    if(data===null){
      setSavedChat([])
      return
    }
    setSavedChat(data);},[])
  
 
  
  const send = e =>{
    
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
      console.log("in copy",copy)
      setInput("")
      localStorage.setItem('chats', JSON.stringify(savedChat));
    }catch (error) {
      setError( error );
    }
 
}


  return(<div className='chatBox'>
    
  
    <ChatBoxHeader isDarkModeActive={isDarkModeActive} setIsDarkModeActiveValue={setIsDarkModeActive}/>

    
    <ChatBoxBody savedChat={savedChat} isDarkModeActive={isDarkModeActive}/>
      
   
    <div className={isDarkModeActive ? "chatBoxInput dark-chatBoxInput" : "chatBoxInput"}  >
  
    <form action="#0" id="user-input-form">
    <input type="text" id="user-input" className={isDarkModeActive ? "userInput dark-userInput" : "userInput"} placeholder="Talk to Luke..."value={input} onChange={e=>{setInput(e.target.value)}}/>
    <button type='submit'  disabled={!isEmpty} className= {isDarkModeActive ? "sendButton dark-sendButton" : "sendButton"} onClick={send}>Send</button>
  </form>
    </div>
  </div>)
} 
export default Appd;