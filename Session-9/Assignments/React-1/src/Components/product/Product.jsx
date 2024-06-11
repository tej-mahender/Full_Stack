import './Product.css'

function Product(props){
    console.log(props)
    return(
        <div className="card">
        <img src={props.p.image} alt="" />
        <h2>{props.p.title}</h2>
        <h2>Price: {props.p.price} $</h2>
        <p>{props.p.description}</p>
        <p>Rating: {props.p.rating.rate} <span>({props.p.rating.count})</span></p>

        </div>
        )
}
export default Product;