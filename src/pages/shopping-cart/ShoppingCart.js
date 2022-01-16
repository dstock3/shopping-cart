import React, {useEffect} from 'react'
import Item from '../../components/Item'

const ShoppingCart = (props) => {

    
    useEffect(()=> {
        for (let i = 0; i < props.cart.length; i++) {
            //console.log(props.cart[i])

        }
        

    })

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
                        {props.cart.map(item => (
                            <li className="cart-listing" key={item}>
                                <div className="cart-product-name">{item.name}</div>
                                <div className="cart-product-price">{item.price}</div>
                                <img className="cart-img" src={item.image} alt={item.alt}></img>

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
