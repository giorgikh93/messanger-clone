import React, { useState, useEffect } from 'react'
import './App.css';
import { Button, FormControl, InputLabel, Input, } from '@material-ui/core'
import Message from './Message'
import db from './firebase'
import FlipMove from 'react-flip-move'
import firebase from 'firebase'
import messanger from './messanger.png'
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core'
function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUserName] = useState('')


  function sendMessage(e) {
    e.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])



  useEffect(() => {
    setUserName(prompt('Please enter your name'))
  }, [])




  return (
    <div className="App">
      <img src={messanger} className='app__logo' alt='messanger'/>
      <h2>Welcome {username} </h2>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <InputLabel htmlFor="my-input">Enter a message..</InputLabel>
          <Input 
          className='app__input'
          placeholder='Enter a message...'
          value={input}
            onChange={e => setInput(e.target.value)} id="my-input" aria-describedby="my-helper-text" />
          <IconButton
            className='app__iconButton'
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={(e) => sendMessage(e)}>
            <SendIcon/>
              </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message
            key={id}
            username={username }
            message={message}
          />
        )
        )}
      </FlipMove>

    </div>
  );
}

export default App;
