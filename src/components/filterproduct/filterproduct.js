
function FilterProduct(props) {

    function onFilterValueChanged(event){

        //console.log(event.target.value);
        props.filterValueSelected(event.target.value);
    }
    return <div style= {{width: '100%', backgroundColor: 'white' ,padding: '2px 50px', borderradius: '2px', border: '#ddd 2px solid'  }} > 
    <h5> Filter the product based on its Avaialability </h5>
           
    <select  name="isAvailable" onChange = {onFilterValueChanged}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
    </select>
</div>


}

export default FilterProduct;
