import React, {useState} from 'react'

const Item = (props) => {
    const [qty, setQty] = useState(1)

    const submitHandler = e => {
        e.preventDefault()
        let itemArray = []
        for (let i = 0; i < qty; i++) {
            itemArray.push(props.item)
           
        }
        props.addToCart(itemArray)
    }

    return (
        <div className="item" id={props.id}>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.imgAlt}></img>
            <p className="description">
                {
                    props.des.length > 75 ?
                        props.des.substring(0, 75) + "..." :
                        props.des
                }
            </p>
            <div className="item-price">{props.price}</div>
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
    )
}

export default Item
