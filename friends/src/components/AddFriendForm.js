import React, {useState} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"


const initialState = {
    name: "",
    age: "",
    email: ""
}


export default function AddFriendForm(props){

    const [formVal, setFormVal] = useState(initialState);
    const {getFriends, friends} = props

    const changing = (e) => {
        setFormVal({...formVal, [e.target.name]: e.target.value})
    }

    const submitting = (e) => {
        e.preventDefault();

        const shapedFriend = {
            ...formVal,
            id: friends.length+1
        }

        axiosWithAuth("http://localhost:5000")
            .post("/api/friends", shapedFriend)
            .then((res)=>{
                console.log(res.response)
            })
            .catch((err)=>{
                console.log(err.response)
            })
            .then(()=>{
                getFriends()
            })

        setFormVal(initialState)
        
    }

    return(
        <div className="AddFriend-Form">
            <form onSubmit={submitting}>
                <input
                    type="text"
                    name="name"
                    value={formVal.name}
                    placeholder="Name"
                    onChange={changing}
                />

                <input
                    type="number"
                    name="age"
                    value={formVal.age}
                    placeholder="Age"
                    onChange={changing}
                />
                
                <input
                    type="email"
                    name="email"
                    value={formVal.email}
                    placeholder="email"
                    onChange={changing}
                />

                <button>AddFriend</button>
            </form>
        </div>
    )
}