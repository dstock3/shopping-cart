import {useState} from 'react'

const UseQty = (props) => {
    const [qty, setQty] = useState(1)

    const submitHandler = e => {
        e.preventDefault()
        let itemArray = []
        for (let i = 0; i < qty; i++) {
            itemArray.push(props.item)
           
        }
        props.addToCart(itemArray)
    }

    return [setQty, submitHandler]
}

export default UseQty
