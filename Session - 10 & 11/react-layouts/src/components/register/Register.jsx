import {useState,useEffect} from 'react'

function Register(){

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
            <table className="table">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(d=><tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.username}</td>
                        <td>{d.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Register