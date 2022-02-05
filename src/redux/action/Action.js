import { auth } from "../../utils/firebase";
import * as types from "./Action_types";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
  updatePhoneNumber,
} from "firebase/auth";
import { toast } from "react-toastify";

const registerStart = () => ({
  type: types.REGISTER_START,
});
const registerSuccess = user => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
const registerError = error => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
const loginStart = () => ({
  type: types.LOGIN_START,
});
const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutError = error => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});
const loginFail = error => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
export const addToBasket = item => ({
  type: types.ADD_TO_BASKET,
  payload: item,
});

export const removeFromBasket = id => ({
  type: types.REMOVE_FROM_BASKET,
  payload: id,
});
export const setuser = user => ({
  type: types.SET_USER,
  payload: user,
});

export const setBasketEmpty = () => ({
  type: types.SET_BASKET_EMPTY,
});
export const increaseItemCount = count => ({
  type: types.INCREASE_ITEM_COUNT,
  payload: count,
});
export const InitiateRegister = rawData => {
  let [email, password, userName, phoneNumber] = rawData;
  return dispatch => {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
        sendEmailVerification(user);
        updateProfile(user, {
          displayName: userName,
        });
        window.location.assign("/signin");
        toast.info(
          `A Email Verification Link is sent to ${email}. Please verify and proceed`
        );
      })
      .catch(err => {
        if (err.message.substring(0, 9) == "Firebase:") {
          toast.error(err.message.substring(10));
          dispatch(registerError(err.message.substring(10)));
        } else {
          toast.error(err.message);
          dispatch(registerError(err.message));
        }
      });
  };
};
export const InitiateLogin = (email, password) => {
  return dispatch => {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        if (user.emailVerified === true) {
          toast.success(`Successfully Loged In with your ${email}`);
          dispatch(loginSuccess(user));
          window.location.assign("/");
        } else {
          toast.warning(
            "The provided email is not verified yet please verify your email and then proceed"
          );
          auth.signOut();
        }
      })
      .catch(err => {
        if (err.message.substring(0, 9) == "Firebase:") {
          toast.error(err.message.substring(10));
          dispatch(loginFail(err.message.substring(10)));
        } else {
          toast.error(err.message);
          dispatch(loginFail(err.message));
        }
      });
  };
};
export const logOutInitiate = () => {
  return dispatch => {
    dispatch(logoutStart());
    auth
      .signOut()
      .then(resp => {
        dispatch(logoutSuccess());
        toast.success("Successfully logged out from First Buy");
      })
      .catch(err => {
        if (err.message.substring(0, 9) == "Firebase:") {
          toast.error(err.message.substring(10));
          dispatch(logoutError(err.message.substring(10)));
        } else {
          toast.error(err.message);
          dispatch(logoutError(err.message));
        }
      });
  };
};
export const loggedInUser = user => {
  return dispatch => {
    dispatch(setuser(user));
  };
};
