import React, { useEffect } from 'react';
import Item from './Item';

const SuggestedItems = (props) => {
    useEffect(()=> {
        if (props.boughtItems.length < props.products.length) {
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
                        items[i].remove()
                    }
                }
            }
        }
    })
    
    return (
        <div className="suggested">
            {props.boughtItems.length < 6 ?
                <>
                    <h2>Suggested Items</h2>
                    <div className="products" id="suggested-items">
                        {props.boughtItems.map((boughtItem) => 
                                props.products.map((productItem) => 
                                    productItem.id !== boughtItem[0].id ?
                                        <Item key={productItem.id} id={productItem.id} qty={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} addToCart={props.addToCart} item={productItem} name={productItem.name} image={productItem.image} imgAlt={productItem.alt} des={productItem.des} price={productItem.price} /> : null)
                        )}
                    </div>
                </> :
                <> 
                    <h2 className="products" id="thank-you">Thank you for shopping with us.</h2>
                    <div className="thank-you-message">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </>
            }
        </div>
  )
};

export default SuggestedItems;

