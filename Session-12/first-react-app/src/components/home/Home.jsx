
import img1 from '../../assets/img1.jpeg'
import {sampleContext} from "../../contexts/testContext"
import {useContext} from 'react'
import { useState } from 'react'

function Home(){

    let {a,setA}=useContext(sampleContext)


    return(
        <div className="text-center">
            <h1>Welcome to HomePage</h1>
            <h2>a: {a}</h2>
            <img src={img1} alt="" width='500px'/>
            <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis aliquam qui, est iste excepturi animi praesentium, cumque culpa voluptatum impedit aperiam sapiente vero nihil nemo provident pariatur. Hic impedit repudiandae, facilis explicabo vitae dolorem ducimus fuga cupiditate sit harum architecto magnam porro, maxime dolor velit saepe optio quibusdam voluptate.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo accusantium ducimus ut assumenda cum aliquam saepe adipisci qui veritatis illum sit id expedita, doloribus dicta quia dolorum, nemo culpa consequatur aperiam numquam quaerat quisquam officiis earum maxime. Reiciendis eligendi, magni, enim saepe dignissimos itaque nostrum nisi, a doloremque corrupti maxime.</p>
        </div>
    )
}
export default Home