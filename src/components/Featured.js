import React from 'react'
import {products} from '../productData'

const Featured = (props) => {
    let newestItem = products[products.length - 1]
    return (
        <div className="featured">
            <h1>Featured: {newestItem.name}</h1>
            <div className="feat-main-container">
                <div className="feat-img-container">
                    <img src={newestItem.image} alt={newestItem.alt}></img>
                </div>
                <div className="feat-des-container">
                    <p>{newestItem.des}</p>
                    <div className="feat-prc-container">
                        <div className="feat-price">{newestItem.price}</div>
                        <button onClick={()=>props.addToCart(newestItem)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
