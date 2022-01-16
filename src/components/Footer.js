import React from 'react'

function Footer() {
    const decStyle = {
        width: "85%"
    }
    return (
        <footer>
            <div className="dec-line" style={decStyle}></div>

            <div className="footer-text">footer</div>
            
            <div className="dec-line" style={decStyle}></div>
        </footer>
    )
}

export default Footer
