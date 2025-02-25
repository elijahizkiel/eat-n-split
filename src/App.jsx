import { useState } from "react";
import FriendList from "./components/FriendList";
import "./App.css";
import FormAddFriend from "./components/FormAddFriend";
import Btn from "./components/Btn";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 0,
    name: "Nati",
    image: "https://i.pravatar.cc/48?u=0",
    balance: -7,
  },
  {
    id: 1,
    name: "Ellas",
    image: "https://i.pravatar.cc/48?u=1",
    balance: 20,
  },
  {
    id: 2,
    name: "Yoni",
    image: "https://i.pravatar.cc/48?u=2",
    balance: 0,
  },
];

function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, selectFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);

  function handleNewBalance(id, balance) {
    setFriends(
      friends.map((friend) => {
        if (id === friend.id) {
          return {
            ...friend,
            balance: balance,
          };
        } else {
          return friend;
        }
      })
    );
    selectFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelect={(id) => {
            const friend = friends.filter((friend) => friend.id === id);
            selectFriend(friend[0]);
          }}
        />
        {addFriend && (
          <FormAddFriend
            onAddFriend={(friend) => {
              setFriends((prevFriends) => [
                ...prevFriends,
                {
                  id: friends.length,
                  name: friend.name,
                  image: friend.image,
                  balance: 0,
                },
              ]);
            }}
          />
        )}
        <Btn
          onClick={() => {
            setAddFriend(!addFriend);
          }}
        >
          {addFriend ? "Close" : "Add Friend"}
        </Btn>
      </div>
      <div className="main">
        {selectedFriend && (
          <FormSplitBill
            friend={selectedFriend}
            setBalance={handleNewBalance}
          />
        )}
      </div>
    </div>
  );
}

export default App;
