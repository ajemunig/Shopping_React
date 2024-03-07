//Splitting Components (Products into ProductDetails)
import Button from './button';
import React , {useState} from 'react';
import './popup.css';
function ProductDetails(props) {  
    let badgeClass = "badge-margin-left-240 badge";
        badgeClass += props.availab ? " bg-success" : " bg-danger";

        //let productCount = 0; 
        let [productCount, updateCount] = useState(0);

        let [showPopup, setShowPopup] = useState(false); // State to track pop-up display

        function displayFormattedProductCount() {
            return productCount > 0 ? productCount : '0';
        }
        //these are created for button eventhandler functions 
        let incrementProductCount = function(){
            //productCount++;
            //console.log(productCount);
            updateCount(++productCount); //postincrement will first return the original value and then the updated one.So it takes two clicks to get the updated value. Hence we use preincrement here. 
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false); // Hide the pop-up after a delay (e.g., 2 seconds)
              }, 1000);
        }
        let decrementProductCount = function(){
            //productCount--;
            //console.log(productCount);
            updateCount(--productCount);
        }
    return (
        <div className="d-flex align-items-center justify-content-between mt-1">
                <h6 style = { {'fontSize':16, 'marginRight': 30 } } > price = {props.price} $ </h6>

                <Button eventHandler={decrementProductCount} disable={productCount===0}>-</Button>
                <span style = { {padding: '6px 12px', 'fontSize': 12 } }> {displayFormattedProductCount()} </span>
                <Button eventHandler={incrementProductCount} disable={productCount===props.stock}>+</Button>

                <span className={badgeClass}> {props.availab ? 'Available' : 'Unvailable'} </span>
                {showPopup && <div className="popup">Product Added</div>}
                {props.children}
         </div>
    )
}
export default ProductDetails;