import * as types from "../action/Action_types";

const initialState = {
  loading: false,
  basket: [],
  user: null,
  isUser: false,
  error: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isUser: action.payload.emailVerified,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_TO_BASKET:
      const newBasket = [...state.basket, action.payload];
      return {
        ...state,
        basket: newBasket,
      };

    case types.REMOVE_FROM_BASKET:
      let updatedBasket = [...state.basket];
      const index = state.basket.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        updatedBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: updatedBasket,
      };
    case types.SET_BASKET_EMPTY:
      return {
        ...state,
        basket: [],
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    // case types.INCREASE_ITEM_COUNT:
    //   let updatedBasket = [...state.basket];
    //   const index = state.basket.findIndex(item => item.id === action.payload);
    //   return {
    //     ...state,
    //     basket: updatedBasket,
    //   };
    default:
      return state;
  }
};
export default AuthReducer;
