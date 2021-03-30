import React, {useEffect, useState} from "react";
import {connect } from 'react-redux'
import {fetchPosts} from "../actions/postActions";
import axios from 'axios'


export  const Posts = () =>{
    /*useEffect(() =>{
       const test = fetchPosts()
    })*/
    /*const postItems = posts.map( (row) =>{
        return(
            <p key={row.id}>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
            </p>
        )
    })*/
    return(

        <div>
            <h1>Posts</h1>

        </div>
    )
}
export default Posts