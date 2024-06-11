import './App.css';

import Test1 from './components/test1/Test1';
import Test2 from './components/test2/Test2';
import Test3 from './components/test3/Test3';

import { useState } from 'react';

function App(){

 //state
  let user='Dynamic element'
  let skills=['html','css','javascript']
  let person={ id:100,name:'john',age:'30'}
  let students=[
    {id:100,name:'john',age:'30'},
    {id:101,name:'jane',age:'31'},
    {id:102,name:'joe',age:'32'},
    {id:103,name:'jim',age:'33'},
  ]
  let numbers=[2,5,90,34,57,45]

  //event handler
  function handleClick1(){
    console.log('button clicked')
  }
  function handleClick2(a){
    console.log('button clicked',a)
    }


    //let counter=1;
    let [counter,setCounter]=useState(1)
    let [employee,setPerson]=useState({name:'ravi',email:'abc@gmail.com',city:'vij'})
    let [talents,setSkills]=useState(['css','html'])

    function handleCounterInc(){
      setCounter(counter+1)
    }
    function handleCounterDec(){
      setCounter(counter-1)
    }
    function handleCounterReset(){
      setCounter(1)
    }

    function handlePersonChange(){
      setPerson({...employee,name:'raju',city:'hyd'})
    }

    function handleSkills(){
      //copy of array
      let newSkills=[...talents]
      //make req changes
      newSkills.splice(1,0,'node')
      //update state
      setSkills(newSkills)

    }


  //state
  let user1={id:100,name:'raju',age:29,image:'data:image/jpeg;base64,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'}
  let user2={id:101,name:'mamatha',age:22,image:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
  let user3={id:103,name:'Bob',age:45,image:'data:image/jpeg;base64,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'}

  return (
    // can return only single element
    <div>
 <h1>ReactJs</h1>
  <p>hello</p>

  {/* //returning dynammic element */}
  <h2>{user}</h2>

  {/* returning array */}
  {
    skills.map(skill=><h3 key={skill}>{skill}</h3>)
  }

  {/* returning object */}
  <h1>John Data</h1>
  <h3>id: {person.id}</h3>
  <h3>name: {person.name}</h3>
  <h3>age: {person.age}</h3>
  
  {/* returning array of objects */}
  {/* in form of table */}
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
      </tr>
    </thead>
    <tbody>
      {
        students.map(student=><tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
        </tr>)
      }
    </tbody>
  </table>


{/* Conditional rendering */}
  {/* displaying only even numbers */}
  <h2>Even numbers from given array</h2>
  {
    numbers.map(n=> n%2==0?<h3 key={n}>  {n} is even </h3>:<h3 key={n}>  {n} is odd </h3>)
  }


    {/* // handling events */}
   <button onClick={handleClick1}>Click</button>
   <button onClick={()=>handleClick2(100)}>Click</button>

   <h2>{counter}</h2>
   <button onClick={handleCounterReset}>reset</button>
   <button onClick={handleCounterInc}>+1</button>
   <button onClick={handleCounterDec}>-1</button>

   <h2>{employee.name}</h2>
   <h2>{employee.email}</h2>
   <h2>{employee.city}</h2>
   <button onClick={handlePersonChange}>Change</button>

   {
    talents.map(skill=><h3 key={skill}>{skill}</h3>)
  }
   <button onClick={handleSkills}>add Skill</button>


   {/* nest test1 */}
   <div className="persons">
   <Test1 x={user1}/>
   <Test1 x={user2}/>
   <Test1 x={user3}/>
   </div>

   <Test2></Test2>
   <Test3></Test3>

  </div>
  )
}

export default App;