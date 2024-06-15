import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { sampleContext } from '../../contexts/testContext'
function Java() {

  let {a,setA}=useContext(sampleContext)
  return (
    <div>
      <h1>Java</h1>
      <h2>a: {a}</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, maxime excepturi. Debitis soluta nostrum nam quo dolorum asperiores laudantium ipsa maxime accusantium dolore quaerat autem, saepe nobis omnis accusamus? Ipsam architecto accusamus ad quis doloribus molestiae modi a ut aliquam, asperiores aperiam dolor ab, ipsum odit unde quos, voluptatibus delectus.</p>
    </div>
  )
}

export default Java
