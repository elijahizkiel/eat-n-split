/*eslint-disable react/prop-types */
import Friend from './Friend.jsx';


export default function FriendList({friends}){
    return (
        <ul className='friends-list' >
            {friends.map((friend)=>{
                return <Friend key={friend.id} id={friend.id} image={friend.image} name={friend.name} balance={friend.balance}  />
            })}
        </ul>
    )
}