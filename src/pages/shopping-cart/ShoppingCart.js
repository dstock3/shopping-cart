import React from 'react'
import Item from '../../components/Item'

const ShoppingCart = (props) => {

    const getPrice = () => {
        let total = 0
        for (let i = 0; i < props.cart.length; i++) {
            let items = props.cart[i]
            for (let y = 0; y < items.length; y++) {
                let item = items[y]
                let price = parseFloat(item.price.substring(1));
                total += price
            }
        }

        return total.toFixed(2)
    }

    return (
        <div className="cart">
            {
                props.cart.length > 0 ?
                    <ul className="cart-container">
                        {props.cart.map(itemArray => (
                            <li className="cart-line-item" key={itemArray[0].id}>
                                <h3 className="cart-item-name">Product Name: {itemArray[0].name}</h3>
                                <div className="cart-item-image">
                                    <img src={itemArray[0].image} alt={itemArray[0].alt}></img>
                                </div>
                                <div className="cart-item-container">
                                    <div className="cart-item-qty">Quantity: {itemArray.length}</div>
                                    <div className="cart-unit-price">Unit Price: {itemArray[0].price}</div>
                                </div>
                            </li>
                        ))}
                    </ul> :
                    <div className="cart-container">
                        <p>Your shopping cart is currently empty.</p>
                    </div>
            }
            <button onClick={props.clearCart}>Clear Shopping Cart</button>

            {
                props.cart.length > 0 ?
                    <div className="cart-total">Total: ${getPrice()}</div> : 
                    <div className="cart-total">Total: $0.00</div>
            }
        </div>
    )
}

export default ShoppingCart
