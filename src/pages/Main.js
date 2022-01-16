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
            let items = cart[i]
            for (let y=0; y < items.length; y++) {
                total += items[y].length
            }
        }
        return total
    }
    
    const addToCart = (newItem) => {
        setCart([...cart, [newItem]])
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <>
            <Header itemCount={determineItems()}/>
            { 
            props.home ? 
                <Homepage cart={cart} addToCart={addToCart} /> :
            props.cart ?
                <ShoppingCart cart={cart} addToCart={addToCart} clearCart={clearCart}/> :
            props.item ?
                <ItemPage item={props.item} addToCart={addToCart} qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/> :
                null
            }
            <Footer />
        </>
    )
}

export default Main
