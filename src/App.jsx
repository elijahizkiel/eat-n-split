// import { useState } from 'react';
import FriendList from './components/FriendList';
import './App.css';

const initialFriends =[
  {
    id:0,
    name:"Nati",
    image:"https://i.pravat.cc/48?u=0",
    balance: -7,
  },
  {
    id:1,
    name:"Ellas",
    image:"https://i.pravat.cc/48?u=1",
    balance:20,
  },
  {
    id:2,
    name:"Yoni",
    image:"https://i.pravat.cc/48?u=2",
    balance: 0,
  },

]

function App() {
  
  return (
     <div className='app'>
      <div className='sidebar'>
        <FriendList friends={initialFriends}/>
      </div>
    </div>
  )
}

export default App
