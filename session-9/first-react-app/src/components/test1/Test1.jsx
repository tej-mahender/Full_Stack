import './Test1.css'

function Test1(props){
        console.log(props)

    return(
        <div className='person'>
                <h2>id: {props.x.id}</h2>
                <img src={props.x.image} alt="" />
                <h2>name: {props.x.name}</h2>
                <h2>age: {props.x.age}</h2>
        </div>
        );
}

export default Test1;