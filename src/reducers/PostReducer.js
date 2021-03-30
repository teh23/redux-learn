import postsService from '../services/PostAxios'

const initialState = []

const PostReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'FETCH_DATA':
            return  state
        case 'INIT_DATA':
            return action.data
        case 'ADD_DATA':
            return [...state, action.data]

        default:
            return state
    }
}

export const addData = (content) =>{
    return async (dispatch) =>{
        const posts = await postsService.addData(content)
        dispatch({
            type: 'ADD_DATA',
            data: posts
        })
    }
}

export const initData = () =>{
    return async (dispatch) =>{
        const posts = await postsService.getAll()
        dispatch({
            type: 'INIT_DATA',
            data: posts
        })
    }
}
export default PostReducer