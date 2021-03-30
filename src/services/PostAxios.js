import axios from 'axios'


const url = 'https://jsonplaceholder.typicode.com/posts'

const getAll = async ()  =>{
    const response = await axios.get(url)
    return response.data
}

const addData = async (content) =>{
    console.log(content)
    const response = await axios.post(url, {
        title: content.title,
        body: content.body,
        userId: 99
    })
    console.log(response.data);
    return response.data
}


export default {getAll, addData}