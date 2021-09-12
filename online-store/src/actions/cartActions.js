import {
  GET_CART_ITEMS_SUCCESS,
  SET_CART_TOTAL,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_SUCCESS,
  CHANGE_FORM_FIELD,
  SET_CART_TOTAL
} from "../actions/actionTypes";

//Cart
export const getCartItemsSuccess = (cartItems) => ({
  type: GET_CART_ITEMS_SUCCESS,
  payload: {
    cartItems,
  },
});

export const setCartTotal = (total) => ({
  type: SET_CART_TOTAL,
  payload: {
    total,
  },
});

export const fetchOrderRequest = () => ({
  type: FETCH_ORDER_REQUEST,
});

export const fetchOrderFailure = (error) => ({
  type: FETCH_ORDER_FAILURE,
  payload: {
    error,
  },
});

export const fetchOrderSuccess = () => ({
  type: FETCH_ORDER_SUCCESS,
});

export const changeFormField = (name, value) => ({
  type: CHANGE_FORM_FIELD,
  payload: {
    name,
    value,
  },
});


export const getCartTotal = () => (dispatch, getState) => {
    const {cart: {cartItems}} = getState();
    
    if (!cartItems) {
      dispatch(setCartTotal(0));
      return;
    }
  
    const total = cartItems.reduce((sum, item) => {
      const itemSum = item.price * item.quantity;
      return itemSum + sum;
    }, 0);
  
    dispatch(setCartTotal(total));
  };
  
  export const getCartItems = () => (dispatch) => {
    
    const keys = Object.keys(localStorage);
    const cartItems = [];
    for(let key of keys) {
      cartItems.push(JSON.parse(localStorage.getItem(key)));
    }
    if (cartItems.length > 0) dispatch(getCartItemsSuccess(cartItems));
    dispatch(getCartTotal());
  };
  
  export const fetchOrder = () => async (dispatch, getState) => {
    const {cart: {cartItems, owner}} = getState();
    dispatch(fetchOrderRequest());
    
    const items = [];
    cartItems.forEach(item => {
      items.push({
        id: item.id,
        price: item.price,
        count: item.quantity
      })
    });
  
    const body = {
      owner: {
        phone: owner.phone,
        address: owner.address,
      },
      items: items
    }
    
    try {
      const response = await fetch(`${urls.order}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      localStorage.clear();
      dispatch(fetchOrderSuccess());
    } catch (error) {
      dispatch(fetchOrderFailure(error.message));
    }
  };