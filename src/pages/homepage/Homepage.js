import React from 'react'
import '../../style/style.css'
import Products from '../../components/Products'
import Featured from '../../components/Featured'

const Homepage = (props) => {

    return (
        <div className="home">
            <Featured addToCart={props.addToCart}/>
            <Products addToCart={props.addToCart}/>
        </div>
    )
}

export default Homepage