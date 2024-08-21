import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

const initialState=true;
const ProductList = ({ listOfProducts }) => {
const [flag,setFlag]=useState(initialState)
const [count,setCount]=useState(0)
const [changeStyle,setChangeStyle]=useState(false)

useEffect(() =>{
 setFlag(!flag)
 console.log('run only once page loaded');
 
},[])

useEffect(()=>{
if(count===10)setChangeStyle(true)
},[count])
  
  return (
    <div>
      <h2 className="title">Ecommerce Project</h2>
    <button onClick={()=>setFlag(!flag)}>Toggle </button>
    {flag?<h3>Albin</h3>:<h4>Viswanath</h4>}

      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
      <div>
        <button style={{backgrondColor:changeStyle?'black':'white',color:changeStyle?'white':"black"}} onClick={()=>setCount(count+1)}> Increase count</button>
        <p>Count{count}</p>
      </div>
    </div>
  );
};
export default ProductList;
