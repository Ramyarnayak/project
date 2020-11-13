import React, { useState } from 'react';
import './Friend.css';

function Friend() {
  const PAGE_PRODUCTS='products';
  const PAGE_CART='cart';
  const [cart,setCart]=useState([
    {
      name:"Deeksha"
    },
    {
      name:"Hitha"
    },
    {
      name:"Keerthi Mohan"
    },
    {
      name:"Nishmitha"
    },
    {
      name:"Nilesh"
    },
    {
      name:"Prajwal"
    },
    {
      name:"Shreeshail"
    }
  ]);
  const [page,setPage]=useState(PAGE_PRODUCTS);
  const[products]=useState([
   {
    name:"nethra"
   },
   {
     name:"ramya"
   }

  ]);
  const addToCart=(product)=>{
    setCart([...cart,{...product}]);
    //console.log("aa");
    alert(product.name,'added');

  }; 
  const removeFromCart=(productToRemove)=>{
    setCart(
        cart.filter((product)=> product!==productToRemove)
    );
  };
  const navigateTo=(nextPage)=>{
    setPage(nextPage);
  };
  const renderProducts=()=>(
    <>
    <h1>Products</h1>
    <div className='products'>
    {products.map((product,id)=>(
     <div className="product" key={id}>
      <h3>{product.name}</h3>
    <button onClick={()=>addToCart(product)}>Add
      </button>
      
   </div>
    ))}
    </div>
  </>
  );
  const renderCart=()=>(
    <>
    <h1>Cart</h1>
    <div className="products">
    {cart.map((cart,id)=>(
      <div className="product" key={id}>
      <h3>{cart.name}</h3>
    <button onClick={()=>removeFromCart(cart)}>Remove
      </button>
      
    </div>
    ))}
    </div>
      </>

  );
    return (
      <div className="Friend">
        <header>
          <button onClick={()=>navigateTo(PAGE_CART)}>Gotocart({cart.length})</button>
          <button onClick={()=>navigateTo(PAGE_PRODUCTS)}>view products</button>
        </header>
        {page===PAGE_PRODUCTS && renderProducts()}
        {page===PAGE_CART && renderCart()}
        </div>
  );
}

export default Friend;