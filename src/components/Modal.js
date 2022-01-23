import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'

function Modal(props) {
    const [confirm, setConfirm] = useState(false)
    useEffect(()=> {
        if (confirm) {
            const main =document.querySelector(".main")
            main.style.opacity = "1"
            setConfirm(false)
            props.clearCart()
        }
    }, [confirm])

    if (props.cart.length > 0) {
        return ReactDOM.createPortal (
            <div className="order">
                <h2>Your order has been submitted.</h2>
                <button className="confirm" onClick={()=>setConfirm(true)}>OK</button>
            </div>,
            document.getElementById('portal-root')
        )
    } else {
        return null
    }

}

export default Modal;
