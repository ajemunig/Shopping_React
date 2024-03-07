import Products from './products';
function ProductList(props){
   // console.log(props.newProduct);
    let msg = 'TOTAL ITEMS LIST'; //variable 'msg' is created with string 'first'
    //Conditional rendering, if there's no products in the product list, then display the message, Else return all products   
    return props.newProductList.length===0 ? <h3> No Products available! </h3> : ( 
        <div className='container my-5'> 
        <div className='card text-center my-5'>
        <div className='card-body'>
        <h1 className="myApp"> {msg} </h1> 
        </div> 
        </div>
    <p > Items include: </p>
        {props.newProductList.map((product)=>{
            return (<>
            <Products   
            //key function is always used together when rendering the list with map function 
            key = {product?.pID} //adding key function with unique ID to make sure the react understands where the new item has been added and able to update the list more efficiently.
            id={product?.pID}
            name={product?.pName}
            description={product?.desc}
            availab={product?.isAvailable}
            imageURL={product?.image}
            price={product?.price}
            stock = {product?.stock}>
                 </Products>
                 </>)
        })} ;
</div>  
    )
}
export default ProductList;

   /* <Products  
    id={products_list[0].pID}
    name={products_list[0].pName}
    description={products_list[0].desc}
    availab={products_list[0].isAvailable}
    imageURL={products_list[0].image}
    price={products_list[0].price}> </Products>

<Products  
    id={products_list[1].pID}
    name={products_list[1].pName}
    description={products_list[1].desc}
    availab={products_list[1].isAvailable}
    imageURL={products_list[1].image}
    price={products_list[1].price}> </Products>

<Products  
    id={products_list[2].pID}
    name={products_list[2].pName}
    description={products_list[2].desc}
    availab={products_list[2].isAvailable}
    imageURL={products_list[2].image}
    price={products_list[2].price}> </Products>

<Products  
    id={products_list[3].pID}
    name={products_list[3].pName}
    description={products_list[3].desc}
    availab={products_list[3].isAvailable}
    imageURL={products_list[3].image}
    price={products_list[3].price}> </Products>

<Products  
    id={products_list[4].pID}
    name={products_list[4].pName}
    description={products_list[4].desc}
    availab={products_list[4].isAvailable}
    imageURL={products_list[4].image}
    price={products_list[4].price}> </Products>
    */

    