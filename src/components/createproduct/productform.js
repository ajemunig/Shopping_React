//Adding functionality to the placeholders using onChange and event handlers concept 

import React, {useState} from 'react';

function ProductForm(props) {

    let [prodName, updateName]=useState('');
    let [prodPrice, updatePrice]=useState('');
    let [prodDesc, updateDesc]=useState('');
    let [prodAvail, updateAvail]=useState('');
    let [prodImage, updateImage]=useState('');

    function nameInputHandler(event) {
        updateName(event.target.value);
    }
    function priceInputHandler(event) {
        updatePrice(event.target.value);
    }
    function descInputHandler(event) {
        updateDesc(event.target.value);
    }
    function availInputHandler(event) {
        updateAvail(event.target.checked);
    }
    function imageInputHandler(event) {
        updateImage(event.target.value);
    } 
    
    //Using single state instead of multiple states

    /*function ProductForm() { 

        let [userInput,updateUserInput]= useState({ 
            prodName:'', prodPrice: '', prodDesc:'', prodAvail:'', prodImage:''
        })
        //this approach may fail in some cases .So 
        function nameInputHandler(event){
            //updateUserInput({ ...userInput, prodName: event.target.value})
            updateUserInput( (prevState)=> { return {...prevState , prodName: event.target.value }}) 
        }
        function priceInputHandler(event){
            //updateUserInput({ ...userInput, prodPrice: event.target.value })
            updateUserInput( (prevState)=> { return {...prevState , prodPrice: event.target.value }})
        }
        function descInputHandler(event){
            //updateUserInput({ ...userInput, prodDesc: event.target.value })
            updateUserInput( (prevState)=> { return {...prevState , prodDesc: event.target.value }})
        }
        function availInputHandler(event){
            //updateUserInput({ ...userInput, prodavail: event.target.checked})
            updateUserInput( (prevState)=> { return {...prevState , prodAvail: event.target.checked }})
        }
        function imageInputHandler(event){
            //updateUserInput({ ...userInput, prodImage: event.target.value })
            updateUserInput( (prevState)=> { return {...prevState , prodImage: event.target.value }})
        } */

        /*
        
        1. When the values are entered in the form, they shud be updated as a object in the product_list items. 
        Hence, assigned the above useState properties to product_list variables and printing them in the console. 
        
       2. And assigned eventlistener 'onSubmit' to form to listen to the event createProductEventHAndler function.
        
        To clear the from after the values are entered.
        
        3. Adding value and checked attributes on each of the input elements to make two way data binding 
        
        4.Two way binding: whenever the value in the input field will change, that value will be assidgned to the prodName    
        
        5.useState properties has been set to empty strings (has been reset) inorder to clear the form after submitting the product.
        */

        function createProductEventHandler(event) {
            event.preventDefault();
            let product = {
                pName: prodName, 
                desc: prodDesc,
                isAvailable: Boolean(prodAvail),
                image: prodImage,
                price: Number(prodPrice)
            }
            //useState properties has been set to empty strings (has been reset) inorder to clear the form after submitting the product.
            updateName('');
            updatePrice('');
            updateDesc('');
            updateAvail(false);
            updateImage('');

            //console.log(product);
            props.createProduct(product);
            props.onCancel();
        }

        return (
        <form className="row g-2" onSubmit={createProductEventHandler}>
        <div className="col-md-4">
            <label htmlfor="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    value={prodName}
                    onChange={nameInputHandler} /> 
        </div>

        <div className="col-md-4">
            <label htmlfor="price">Product Price</label>    
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    value={prodPrice}
                    onChange={priceInputHandler} />
        </div>

        <div className="form-group">
            <label htmlfor="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description"
                    value={prodDesc}
                    onChange={descInputHandler} />
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" 
                   checked={prodAvail} onChange={availInputHandler} />
            <label className="form-check-label" htmlfor="isAvailable">Is product available in stock?</label>
            
        </div>

        <div className="form-group">
            <label htmlfor="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" 
                   value={prodImage} onChange={imageInputHandler}/>
            
        </div>
        

        <button  type="submit" className="col-md-6 btn btn-primary">Add Product</button>
        <button type="button" onClick={props.onCancel}> Cancel </button>
    </form>


    )
}
export default ProductForm;