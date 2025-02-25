import Btn from './Btn.jsx'
export default function FormAddFriend(){
    return (
        <form className="form-add-friend" >
            <label>Friend Name:</label>
            <input type="text" />
            <label>Image URL</label>
            <input type="text" />
            <Btn>Add</Btn>
        </form>
    )
}