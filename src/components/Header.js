import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../images/cart.svg'

function Header(props) {
    const decStyle = {
        width: "95%"
    }
    return (
        <header>
            <div className="dec-line" style={decStyle}></div>
            <nav className="header-container">
                <Link to = {{pathname: '/'}}>
                    <div className="logo">Logo</div>
                </Link>
                
                <Link to = {{pathname: '/cart'}}>
                    <div className="shopping-cart">
                        <img className="cart-image" src={cartIcon} alt="shopping cart"></img>

                        <div className="item-count">
                            {props.itemCount}
                        </div>
                    </div>
                </Link>
            </nav>
            <div className="dec-line" style={decStyle}></div>
        </header>
    )
}

export default Header
