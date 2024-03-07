
import ProductDetails from './productdetails';

function Products(props){
    
    return ( <ul className="list-group shadow" >
        <li className="list-group-item" style = {{backgroundColor: props.availab ? 'white' : '#808080'}} >
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex" >
                <div className="media-body order-2 order-lg-1" >
                <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                <p className="font-italic text-muted mb-0 small">{props.description}</p>
                <ProductDetails price = {props.price} availab = {props.availab} stock={props.stock}>
                    <span> This is the product availability. </span>
                </ProductDetails>
                </div> 
                <img src = {props.imageURL} alt= "display" width = "200"  /> 
            </div>
         </li>
    </ul>)
}

export default Products;