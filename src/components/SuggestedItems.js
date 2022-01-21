import React from 'react';
import Item from './Item';

const SuggestedItems = (props) => {
  return (
    <div className="products">
        {props.products.map((productItem) => (
            <>
            {props.boughtItems.map((boughtItem) => (
                <>
                {productItem.id !== boughtItem[0].id ?
                    <Item id={productItem.id} qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} addToCart={props.addToCart} item={productItem} key={productItem.id} name={productItem.name} image={productItem.image} imgAlt={productItem.alt} des={productItem.des} price={productItem.price} /> : null
                }
                </>
                )
            )}
            </>
        ))}
    </div>
  )
};

export default SuggestedItems;

