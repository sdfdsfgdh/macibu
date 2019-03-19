import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../logo.svg';
import PostCard from '../PostCard/PostCard';
import './PostList.css';

const posts=[
    {
        image: {logo},
        title: "1.raksta nosaukums",
        description: "Kaut kāds raksta apraksts te noteikti kādreiz būs.",
    },
    {
        image: {logo},
        title: "2.raksta nosaukums",
        description: "Kaut kāds raksta apraksts te noteikti kādreiz būs.",
    },
    {
        image: {logo},
        title: "3.raksta nosaukums",
        description: "Kaut kāds raksta apraksts te noteikti kādreiz būs.",
    },
];

class PostList extends Component{
    render(){
        return(
            posts.map(post =>{
                return <PostCard image={post.image} title={post.title} description={post.description} />
            })
        )
    }
}

export default PostList;