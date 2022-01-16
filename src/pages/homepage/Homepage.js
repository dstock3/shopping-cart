import React from 'react'
import '../../style/style.css'
import Products from '../../components/Products'
import Featured from '../../components/Featured'
import {products} from '../../productData'

const Homepage = (props) => {

    return (
        <div className="home">
            <Featured item={products[products.length-1]} addToCart={props.addToCart} qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
            <Products addToCart={props.addToCart} />
        </div>
    )
}

export default Homepage