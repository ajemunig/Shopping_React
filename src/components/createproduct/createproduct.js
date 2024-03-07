import {useState} from 'react';


import ProductForm from './productform';

function CreateProduct(props){

    //To show the form creation on clicking create product button 
    let [showForm,updateShowForm] = useState(false);
    

    function onCreateProduct(product){
        debugger;
        
        props.createProduct(product);

    }
    function onCreateNewProduct(){
        debugger;
        
        updateShowForm(true) ;
    }
    function onProductSubmittedorCancelled(){
        updateShowForm(false) ;
    }
    return ( <div className='container my-5'> 
    <div className='card my-5'>
    <div className='card-body'>
    
        <h4> Create a new Product </h4>
        
            <div style={{backgroundColor: 'white', padding: '50px 20px'}}> 
            {!showForm && <button onClick={onCreateNewProduct}> Create Product </button>} 
            {showForm && <ProductForm createProduct={onCreateProduct} onCancel={onProductSubmittedorCancelled}> </ProductForm>}
            </div>
            
            </div>
            </div>
        </div>     
    )
}

export default CreateProduct;
