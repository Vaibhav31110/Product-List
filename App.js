import React, { useState } from'react';
import './App.css';

const App =() => {
  const [cart, setCart ] = useState([]);
  const [item] = useState([

    { id: 1, name: 'laptop', price: 100000, image:'https://th.bing.com/th/id/OIP.y6MPyepeDGuGjECUb_ztcQAAAA?rs=1&pid=ImgDetMain'},
    { id: 2, name: 'dress', price: 10000, image:'https://th.bing.com/th/id/R.5338991cf3ac4bce6f29fe7343c4d353?rik=LnV5iZzMY7Y8Dw&pid=ImgRaw&r=0'},
    {id: 3, name: 'watches', price: 9000, image:'https://th.bing.com/th/id/OIP.H0U6SIxkFzDBkm5iszlKbwHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7'},
    {id: 4, name: 'iphone', price: 115000, image:'https://www.bing.com/images/search?view=detailV2&ccid=gZN3hb7m&id=FA5D365E001230C29E9AE4FE2ADF0D55E1F0A466&thid=OIP.gZN3hb7m0KlAu_Kkpw6DtgHaFS&mediaurl=https%3a%2f%2fmykivi.com%2fwp-content%2fuploads%2f2021%2f01%2f0002-e1613156822422.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.81937785bee6d0a940bbf2a4a70e83b6%3frik%3dZqTw4VUN3yr%252b5A%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1512&q=latest+iphone&simid=608000338700995372&FORM=IRPRST&ck=64D19CEA968DE059FD1F71B39B32C63E&selectedIndex=4&itb=0'}
 
  ]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const getTotalprice = () => {
    return cart.reduce((total, item) => total + item.price,0).toFixed(2);
  };

  return (
    <div className="App">
      <h1>Simple Shopping cart</h1>

      <div className="item">
        <h2>Items</h2>
        {item.map(item => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} classname="item-image" />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart </button>
      </div>
      ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  {item.name} -${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
          <p>Total: ${getTotalprice()}</p>
        </div>
        </div>
  );
};
export default App;


        
