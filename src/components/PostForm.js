
import React from "react";
import {addData} from "../reducers/PostReducer";
import {useDispatch, useSelector} from "react-redux";
export const PostForm = () =>{
    const [form, setForm] = React.useState({title : '', body: '' })
    const dispatch = useDispatch()
   // const posts = useSelector(state => state.posts)

    const onSubmit = async (e) =>{
        e.preventDefault()

        dispatch(addData(form))
    }
    const onChange = (e) =>{
        e.preventDefault()
        setForm({...form, [e.target.name] : e.target.value})

    }

    return(

        <div>
            <h1>Add Posts</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title:</label><br/>
                    <input type="text" onChange={onChange} name="title" value={form.title}/>
                </div>
                <div>
                    <label>Body:</label><br/>
                    <textarea type="text" name="body" value={form.body} onChange={onChange}/>
                </div>
                <br/>
                <button type="submit" name="submit" >Add</button>
            </form>
        </div>
    )
}
