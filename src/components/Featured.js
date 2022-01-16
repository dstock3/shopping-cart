import React from 'react'
import {products} from '../productData'
import UseQty from '../Hooks/UseQty'

const Featured = (props) => {
    const [setQty, submitHandler] = UseQty(props.item, props.addToCart)

    const newestItem = products[products.length - 1]
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

                        <form className="options-container" onSubmit={submitHandler}>
                            <button>Add to Cart</button>
                            <div className="item-options">
                                <label htmlFor="qty">Qty: </label>
                                
                                <select name="qty" id="qty" onChange={e=>setQty(e.target.value)}>
                                    {
                                        props.qty.map((item) => 
                                            <option  key={item} value={item}>{item}</option> )
                                    }
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
