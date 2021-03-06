import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Products from '../../components/Products'
import {products} from '../../productData'
import SuggestedItems from '../../components/SuggestedItems'
import '../../style/cart.css'
import Modal from '../../components/Modal'

const ShoppingCart = (props) => {
    const [order, setOrder] = useState(null)

    useEffect(()=> {
        if (order) {
            const main = document.querySelector(".main")
            main.style.opacity =".25"
        }
    },  [order])

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

    const submitHandler = (cart) => {
        setOrder(cart)
    }

    return (
        <>
            <div className="cart">
                <div className="cart-breakdown">
                    <h2>Checkout</h2>
                    {
                        props.cart.length > 0 ?
                            <>
                            <div className="dec-line" style={{margin: "auto", width: "85%"}}></div>
                            <ul className="cart-container">
                                {props.cart.map((itemArray) => (
                                    <li className="cart-line-item" key={itemArray[0].id}>
                                        <div className="cart-item-image">
                                            <img src={itemArray[0].image} alt={itemArray[0].alt}></img>
                                        </div>
                                        <div className="cart-item-container">
                                            <h3 className="cart-item-name">Product Name: {itemArray[0].name}</h3>
                                            {
                                                itemArray[0].des.length > 75 ?
                                                    <p className="cart-item-des">{itemArray[0].des.substring(0, 75) + "..."}</p> :
                                                    <p className="cart-item-des">{itemArray[0].des}</p>
                                            }
                                            <div className="cart-item-qty">Quantity: {itemArray.length}</div>
                                            <div className="cart-unit-price">Unit Price: {itemArray[0].price}</div>
                                        </div>
                                    </li> 
                                ))}
                            </ul>
                            <div className="dec-line" style={{margin: "auto", width: "85%"}}></div>
                            <div className="cart-total-container">
                                {
                                    props.cart.length > 0 ?
                                        <h4 className="cart-total">Total: ${getPrice()}</h4> : 
                                        <h4 className="cart-total">Total: $0.00</h4>
                                }
                                <button onClick={props.clearCart}>Clear Shopping Cart</button>
                                <button onClick={()=>submitHandler(props.cart)}>Submit Order</button>
                            </div>
                            </>
                            :
                            <>
                                <div className="cart-container">
                                    <p className="cart-empty">Your shopping cart is currently empty.</p>
                                    <Link className="keep-shopping" to= {{pathname: '/'}}>Continue Shopping</Link>
                                </div>
                            </>
                    }
                </div>
                {props.cart.length > 0 ?
                    <SuggestedItems products={products} boughtItems={props.cart} addToCart={props.addToCart} /> :
                    <div className="suggested">
                        <h2>Suggested Items</h2>
                        <Products addToCart={props.addToCart} />
                    </div>
                }

            </div>
            {order ? <Modal cart={props.cart} clearCart={props.clearCart} /> : null }
        </>
    )
}

export default ShoppingCart
