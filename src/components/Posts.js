import React, {useReducer} from "react";
import {useDispatch, useSelector} from "react-redux";



export const Posts = () =>{

    const posts = useSelector(({posts}) =>{
        console.log(posts)
        return posts.sort(function(a,b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);} )
    } )

    return(

        <div>
            <h1>Posts</h1>
            {posts.map( (row) =>{
                return(
                    <div key={row.id}>
                        <h3>{row.title}</h3>
                        <p>{row.body}</p>
                    </div>
                )
            })}

        </div>
    )
}
export default Posts