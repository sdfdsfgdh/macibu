import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.svg';
import UserCard from '../usercard/UserCard';
import './userlist.css';

const users = [
    {
        image: (logo),
        name: "Pēteris",
    },
    {
        image: (logo),
        name: "Jānis",
    },
    {
        image: (logo),
        name: "Madara",
    },
    {
        image: (logo),
        name: "Anna",
    },
    {
        image: (logo),
        name: "Juris",
    }
]
class UserList extends Component{
    render(){
        return(
            users.map(user =>{
                return <UserCard image={user.image} name={user.name} />
            })
        )
    }
}

export default UserList;