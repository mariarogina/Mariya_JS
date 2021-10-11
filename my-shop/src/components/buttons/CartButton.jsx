import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const CartButton = () => {

    const state = useSelector((state)=> state.addItemToCart)

    return (
        <div>
              <>
            <NavLink to="/cart" className="btn btn-outline-success ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
            </NavLink>
        </>
        </div>
    )
}

export default CartButton
