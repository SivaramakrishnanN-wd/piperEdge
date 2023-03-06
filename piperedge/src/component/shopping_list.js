import React, { useState } from "react";
import "./shopping_list.css";
import products from "./products.json";

function ShoppingList() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const deleteFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const discountFind = (price, discount) => {
    let discountedPrice = (price * discount) / 100;
    let discounted = price - discountedPrice;
    return discounted;
  };
  function calculateTotalAmount() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const discountedPrice = discountFind(item.price, item.discount);
      total += discountedPrice;
    }
    return total;
  }
  return (
    <section id="#main">
      <div className="first_table">
        <h3>Discount Table</h3>
        <table className="product_table" border={1}>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Trade A</th>
              <th>Trade B</th>
              <th>Trade C</th>
              <th>Trade D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vendor 1</td>
              <td>29</td>
              <td>25</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Vendor 2</td>
              <td>N/A</td>
              <td>25</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Vendor 3</td>
              <td>12</td>
              <td>N/A</td>
              <td>3</td>
              <td>56</td>
            </tr>
            <tr>
              <td>Vendor 4</td>
              <td>N/A</td>
              <td>N/A</td>
              <td>34</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Vendor 5</td>
              <td>N/A</td>
              <td>15</td>
              <td>N/A</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
        <h3>Product Table</h3>
        <table border={1} className="product_table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Tags</th>
              <th>Vendor</th>
              <th>Cart</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.price}</td>
                  <td>{e.tags}</td>
                  <td>{e.vendor}</td>
                  <td>
                    <button onClick={() => addToCart(e)} className="add">
                      Add to cart
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3>Shopping Cart</h3>
        <table border={1} className="product_table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Org Price</th>
              <th>Discount Percentage</th>
              <th>Discount Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.discount}</td>
                  <td>{discountFind(item.price, item.discount)}</td>
                  <td>
                    <button
                      onClick={() => deleteFromCart(index)}
                      className="remove"
                    >
                      Remove Cart
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h1>Total Amount: {calculateTotalAmount()}</h1>
      </div>
    </section>
  );
}

export default ShoppingList;
