import {
  SET_CART_TOTAL,
  GET_CART_ITEMS_SUCCESS,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_SUCCESS,
  CHANGE_FORM_FIELD
} from '../actions/actionTypes'

import urls from '../constants';
import {take, put} from 'redux-saga/effects'

const initialState = {
  cartItems: null,
  totalSum: null,
  loading: false,
  error: null,
  owner: {phone: '', address: ''},
  success: false
};

console.log(initialState)
export default function cartReducer(state = initialState, action) {
  switch (action.type) {

    case GET_CART_ITEMS_SUCCESS:
      const {cartItems} = action.payload;
      return {
        ...state,
        cartItems,
        success: false
      };
    case CHANGE_FORM_FIELD:
        const { name, value } = action.payload;
        const {owner} = state;
        return {
          ...state,
          owner: {
            ...owner,
            [name]: value,
          }
        };
    case FETCH_ORDER_REQUEST:
    return {
      ...state,
      loading: true,
      error: null
    };
    case FETCH_ORDER_FAILURE:
    const {error} = action.payload;
    return {
      ...state,
      error,
      loading: false
    };
    case FETCH_ORDER_SUCCESS:
    return {
      ...initialState,
      success: true
    };
    case SET_CART_TOTAL:
        const {total} = action.payload;
      return {
        ...state,
        totalSum: total
      };
    default:
      return state;
  }
}

// export const fetchOrder = () => async (dispatch, getState) => {
//   const {cart: {cartItems, owner}} = getState();
//   dispatch(fetchOrderRequest());
  
//   const items = [];
//   cartItems.forEach(item => {
//     items.push({
//       id: item.id,
//       price: item.price,
//       count: item.quantity
//     })
//   });

//   const body = {
//     owner: {
//       phone: owner.phone,
//       address: owner.address,
//     },
//     items: items
//   }
  



// export const fetchOrderSaga = function* () {
//   while(true) {
//     yield take(FETCH_ORDER_REQUEST)
//     const {cart: {cartItems, owner}} = getState();
      
//       const items = [];
//       cartItems.forEach(item => {
//         items.push({
//           id: item.id,
//           price: item.price,
//           count: item.quantity
//         })
//       });
    
//       const body = {
//         owner: {
//           phone: owner.phone,
//           address: owner.address,
//         },
//         items: items
//       }
      
//       try {
//             const response = yield fetch(`${urls.order}`, {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//               },
//               body: JSON.stringify(body)
//             });
        
//             if (!response.ok) {
//               throw new Error(response.statusText);
//             }
//             localStorage.clear();
        
//             yield put({
//           type: FETCH_ORDER_SUCCESS,
//           payload: items
//         })
//           } catch (error) {
//               yield put({
//                 type: FETCH_ORDER_FAILURE,
//                 payload: error.message
//               })
//             }
// }}