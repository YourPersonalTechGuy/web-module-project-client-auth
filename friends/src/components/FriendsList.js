import React from 'react';

import { axiosWithAuth } from './../utils/axiosWithAuth';
import AddFriendForm from "./AddFriendForm"

class FriendsList extends React.Component {

    state = {
        friends: []
    }

    getFriends = () => {
        axiosWithAuth("http://localhost:5000")
            .get("/api/friends")
            .then((res)=>{
                this.setState({
                    ...this.state,
                    friends: [...res.data]
                })
            })
            .catch((err)=>{
                console.log(`Error: ${err.response}`)
            })
    }
    
    componentDidMount(){
        this.getFriends();
    }

    render(){
        return(
            <div className="friends-container">
                <AddFriendForm getFriends={this.getFriends} friends={this.state.friends} />
                {this.state.friends.map((friend)=>{
                    return(
                        <div key={friend.id} className="friend-container">
                            <p>{`Name: ${friend.name}`}</p>
                            <p>{`Age: ${friend.age}`}</p>
                            <p>{`Email: ${friend.email}`}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default FriendsList;