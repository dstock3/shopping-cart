import React from 'react'

const ItemPage = (props) => {
    return (
        <div className="item-page">
            <h3>{props.item.name}</h3>
            <img src={props.item.image} alt={props.item.imgAlt}></img>
            <p className="description">{props.item.des}</p>
            <div className="item-price">{props.item.price}</div>
            {/*
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
            </form> */}
        </div>
    )
}

export default ItemPage






