import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('328183f9e5f349e7d4ee', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return() => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">

      {!user ? (
        <Login/>
      ):(
        <div className="app_body">
        <Sidebar/>
        <Chat messages={messages}/>
        </div>
      )}
    </div>
  );
}

export default App;
