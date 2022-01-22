import React, {useState} from 'react'
import '../style/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Homepage from './homepage/Homepage'
import ShoppingCart from './shopping-cart/ShoppingCart'
import ItemPage from './ItemPage'

const Main = (props) => {
    const [cart, setCart] = useState([])

    const determineItems = () => {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].length

        }
        return total
    }
    
    const addToCart = (newItem) => {
        setCart([...cart, newItem])
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <div className="main">
            <div className="lede-container">
                <Header itemCount={determineItems()}/>
                { 
                props.home ? 
                    <Homepage cart={cart} addToCart={addToCart} /> :
                props.cart ?
                    <ShoppingCart cart={cart} addToCart={addToCart} clearCart={clearCart}/> :
                props.item ?
                    <ItemPage item={props.item} cart={cart} addToCart={addToCart} qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/> :
                    null
                }
            </div>

            <Footer />
        </div>
    )
}

export default Main
