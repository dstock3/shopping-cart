import React from 'react'
import {products} from '../productData'
import '../style/item-page.css'
import UseQty from '../Hooks/UseQty'
import SuggestedItems from '../components/SuggestedItems'

const ItemPage = (props) => {
    const [setQty, submitHandler] = UseQty(props.item, props.addToCart)

    return (
        <>
            <div className="item-page">
                <h1 className="item-name">{props.item.name}</h1>
                <div className="item-container">
                    <img src={props.item.image} alt={props.item.imgAlt} className="item-image"></img>
                    <div className="item-des-container">
                        <p className="item-description">{props.item.des}</p>
                        <div className="item-price-container">
                            <div className="item-price">{props.item.price}</div>
                            <form className="item-options-container" onSubmit={submitHandler}>
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
            <SuggestedItems products={products} boughtItems={[[props.item]]} addToCart={props.addToCart} />
        </>
    )
}

export default ItemPage






