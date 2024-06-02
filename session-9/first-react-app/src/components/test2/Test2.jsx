import './Test2.css'
import { useState,useEffect } from 'react'

function Test2(){

    let [posts,setPosts]=useState([])

    async function getPosts(){
       let res=await fetch('https://jsonplaceholder.typicode.com/posts')
        let postsdata=await res.json()
        setPosts(postsdata)
    }
    console.log(posts)

//side effect
    useEffect(()=>{getPosts()},[])


    return(
        <div>
            <h1>Test2 component</h1>
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
            
            <tbody>
            {
                posts.map(post=> <tr key={post.id}>
                    <td>{post.userId}</td>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>)
            }
            </tbody>
            </table>
        </div>
    )
}

export default Test2;