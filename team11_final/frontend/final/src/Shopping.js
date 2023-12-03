import React, {useState, useEffect} from "react";
//import items from "./selected_products.json";

const Shop = () => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('/api/menu_items')
        .then((response) => response.json())
        .then((data) => setMenuItems(data))
        .catch((error) => console.error('Error fetchng data:', error));
    }, []);

    const addToCart = (el) => {
        setCart([...cart, el]);
    };

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    }
/*
    const listItems = items.map((el) => (
        <div key={el.id}>
            <img class="img-fluid" src={el.image} width={150}/> <br/>

{el.title} <br/>
{el.category} <br/>
{el.price} <br/>
            <button type="button" onClick={() => removeFromCart(el)}>-</button>{" "}
            <button type="button" variant="light" onClick={() => addToCart(el)}>+</button>
        </div>
    ));*/

    const listItems = menuItems.map((el) => (
        <div key={el.id}>
            <img class="img-fluid" src={el.url} width={150}/> <br/>

            {el.dishName} <br/>
            {el.description} <br/>
            {el.dishPrice} <br/>
            <button type="button" onClick={() => removeFromCart(el)}>-</button>{" "}
            <button type="button" variant="light" onClick={() => addToCart(el)}>+</button>
        </div>
    ))

    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    return (
        <div>
            {listItems}
        </div>
    );
}

export default Shop;