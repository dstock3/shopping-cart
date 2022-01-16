import React from 'react'
import UseQty from '../Hooks/UseQty'

const Featured = (props) => {
    const [setQty, submitHandler] = UseQty(props.item, props.addToCart)

    return (
        <div className="featured">
            <h1>Featured: {props.item.name}</h1>
            <div className="feat-main-container">
                <div className="feat-img-container">
                    <img src={props.item.image} alt={props.item.alt}></img>
                </div>
                <div className="feat-des-container">
                    <p>{props.item.des}</p>
                    <div className="feat-prc-container">
                        <div className="feat-price">{props.item.price}</div>

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
