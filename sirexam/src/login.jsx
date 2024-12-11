import React, { useState } from "react"
import Productlist from "./productlist"
function ProductForm(){

    const [product,setProduct] = useState({
        productname : "",
        productprice : "",
        productdes : ""
    })

    const handleChange = (h)=>{
        const {name,value} = h.target
        setProduct({...product, [name] : value})
        console.log(product);

        if(h.target.value > 0){
            setDisbtn(false)
        }
    }

    var [disbtn,setDisbtn] = useState(true)
    var [pnErr,setPnerr] = useState(false)
    var [ppErr,setPperr] = useState(false)
    var [pdErr,setPderr] = useState(false)

    function bl(b){
        const {name,value} = b.target
        if(name == "productname" && value.length <= 3){
            setPnerr(true)
        }
        if(name == "productprice" && value < 1){
            setPperr(true)
        }
        if(name == "productdes" && value.length >= 200){
            setPderr(true)
        }
    }

    function fl(f){
        const {name,value} = f.target
        if(name == "productname"){
            setPnerr(false)
        }
        if(name == "productprice"){
            setPperr(false)
        }
        if(name == "productdes"){
            setPderr(false)
        }
    }
    function alldata(e){
        e.preventDefault()

        if(pnErr == false && ppErr == false && pdErr == false){
            setProduct(product)
            alert("Product data submit successfully")
        }else{
            alert("Please enter product data")
        }
    }

    return(
        <>
        <form action="" onSubmit={alldata}>
            <input type="text" name="productname" placeholder="product Name" onChange={handleChange} onBlur={bl} onFocus={fl}/><br />
            {pnErr == true ? <p>Must be at least 3 characters long.</p> : ""}
            
            <br /><br />
            <input type="number" name="productprice" placeholder="product Price" onChange={handleChange} onBlur={bl} onFocus={fl}/><br />
            {ppErr == true ? <p>Must be a positive number.</p> : ""}
            
            <br /><br />
            <select name="" id="" onChange={handleChange}>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Groceries">Groceries</option>
                <option value="Books">Books</option>
            </select><br /><br />
            <input type="text" name="productdes" placeholder="Product Description" onChange={handleChange} onBlur={bl} onFocus={fl}/><br />
            {pdErr == true ? <p>Maximum of 200 characters.</p> : ""}
            
            <br /><br />
            <input type="file" name="productimg" accept="image/jpeg,image/png" placeholder="Product image" onChange={handleChange}/><br /><br />
            <input type="submit" disabled={disbtn}/>
        </form>
        </>
    )
}
export default ProductForm
