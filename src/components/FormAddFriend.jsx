/* eslint-disable react/prop-types */
import Btn from './Btn.jsx'
import { useState } from 'react'

export default function FormAddFriend({ onAddFriend }){
    const [friend, setFriend] = useState({
        name:"",
        image:"",
    })
    return (
        <form className="form-add-friend" onSubmit={(e)=>{e.preventDefault()}}>
            <label>Friend Name:</label>
            <input type="text" value={friend.name} onInput={(e)=>{
                setFriend(prev =>{
                    return {
                        ...prev,
                        name:e.target.value,
                    }
                })
            }} />
            <label>Image URL</label>
            <input type="text" value={friend.image} onInput={(e)=>{
                setFriend(prev => {
                    return {...prev, image:e.target.value}
                })
            }} />
            <Btn onClick={()=>{
                onAddFriend(friend);
                setFriend({name:"",image:""})
                }}>Add</Btn>
        </form>
    )
}