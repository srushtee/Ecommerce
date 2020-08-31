import React from 'react'
import {Link} from 'react-router-dom'
import './headerComponent.scss'
import {ReactComponent as Logo} from '../../Assets/crown.svg'

const HeaderComponent = () => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">  
            <div className="option" to='/shop'>
                SHOP
            </div>
            <div className="option" to='/shop'>
                CONTACT
            </div>
        </div>
        </div>  
    )
}

export default HeaderComponent;
