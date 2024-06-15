import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {sampleContext} from "../../contexts/testContext"

function Register(){

    let {a,setA}=useContext(sampleContext)
    let [users,setUsers]=useState([])
    async function  getUsers(){
        let res=await fetch('https://jsonplaceholder.typicode.com/users',{method:'GET'})
        let data=await res.json()
        setUsers(data)
    }
    useEffect(()=>{
        getUsers()
    },[])

  return(
        <div className='container'>
            <h2>Users List</h2>
            <h2>a: {a}</h2>
            <button className="btn btn-success" onClick={()=>setA(a+1)}>A+</button>
            <button className="btn btn-success" onClick={()=>setA(a-1)}>A-</button>

            {
                users.map(userObj=>
                <p>
                <Link to={`/profiles/${userObj.id}`} key={userObj.id} state={{user:userObj}}>
                   {userObj.username}
                 </Link>
                </p>)
            }
        </div>
    )
}
export default Register