import {useState} from 'react'

const UseQty = (item, addToCart) => {
    const [qty, setQty] = useState(1)

    const submitHandler = e => {
        e.preventDefault()
        let itemArray = []
        for (let i = 0; i < qty; i++) {
            itemArray.push(item)
           
        }
        addToCart(itemArray)
    }

    return [setQty, submitHandler]
}

export default UseQty
