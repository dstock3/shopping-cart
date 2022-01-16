import React from 'react'
import {products} from '../productData'
import Item from './Item'

const Products = (props) => {
    return (
        <div className="products">
            {products.map(item => (
                <Item id={item.id} qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} addToCart={props.addToCart} item={item} key={item.id} name={item.name} image={item.image} imgAlt={item.alt} des={item.des} price={item.price}/>
            ))}
        </div>
    )
}
export default Products