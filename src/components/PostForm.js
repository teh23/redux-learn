import React, {useEffect, useState} from "react";
import axios from 'axios'
export const PostForm = () =>{
    const [state, setState] = React.useState({title: '', body: ''})
    useEffect( () =>{
        console.log(state)
    })

    const onChange = (e) =>{
        setState({...state ,[e.target.name] : e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault()

        const post ={
            title: state.title,
            body: state.body
        }

        axios
            .post('https://jsonplaceholder.typicode.com/posts', post)
            .then(res =>{
                console.log(res)
            })
    }
    return(

        <div>
            <h1>Add Posts</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title:</label><br/>
                    <input type="text" onChange={onChange} name="title" value={state.title}/>
                </div>
                <div>
                    <label>Body:</label><br/>
                    <textarea type="text" name="body" value={state.body} onChange={onChange}/>
                </div>
                <br/>
                <button type="submit" name="submit" >Add</button>
            </form>
        </div>
    )
}