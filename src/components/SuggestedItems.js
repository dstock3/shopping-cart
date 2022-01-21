import React, { useEffect } from 'react';
import Item from './Item';

const SuggestedItems = (props) => {
    useEffect(()=> {
        const suggestedItems = document.getElementById("suggested-items")
        const items = Array.from(suggestedItems.children)
        for (let i = 0; i < items.length; i++) {
            let check = 0
            for (let y = 0; y < items.length; y++) {
                if (items[i].id === items[y].id) {
                    check += 1
                    if (check > 1) {
                        items[y].remove()
                    }
                }
            }
            for (let x = 0; x < props.boughtItems.length; x++) {
                if (props.boughtItems[x][0].id == items[i].id) {
                    console.log(props.boughtItems[x][0].id)
                    items[i].remove()
                }
            }
        }
    })
    
    return (
        <div className="products" id="suggested-items">
            {props.boughtItems.map((boughtItem) => (
                <>
                    {props.products.map((productItem) => ( 
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

