import React, { useReducer } from "react";
import NavBar from "../components/NavBar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const reducerActions = {
  changeTopBottom: "changeTopBottom",
  changeLeftRight: "changeLeftRight",
  changeType: "changeType",
  changeDuration: "changeDuration",
  changeMessage: "changeMessage",
};

const InitialValues = {
  topBottom: "TOP",
  leftRight: "LEFT",
  type: "success",
  message: "This is a toast message!",
  duration: 30,
};

function reducer(state, action) {
  switch (action.type) {
    case reducerActions.changeTopBottom:
      return {
        ...state,
        topBottom: action.payload,
      };
    case reducerActions.changeLeftRight:
      return {
        ...state,
        leftRight: action.payload,
      };
    case reducerActions.changeType:
      return {
        ...state,
        type: action.payload,
      };
    case reducerActions.changeMessage:
      return {
        ...state,
        message: action.payload,
      };
    case reducerActions.changeDuration:
      return {
        ...state,
        duration: action.payload,
      };
    default:
      return state;
  }
}

function ToastPopUp() {
  const [toastState, dispach] = useReducer(reducer, InitialValues);

  const showToast = () => {
    const toastPosition = "".concat(
      toastState.topBottom,
      "_",
      toastState.leftRight
    );

    toast[toastState.type](toastState.message, {
      position: toast.POSITION[toastPosition],
      autoClose: toastState.duration * 100,
    });
  };

  return (
    <>
      <NavBar pageHeading="Toast Popup" />
      <div className="flex-column toast-popup">
        <div>
          <select
            onChange={({ target }) => {
              dispach({
                type: reducerActions.changeLeftRight,
                payload: target.value,
              });
            }}
          >
            <option value="LEFT">Left</option>
            <option value="RIGHT">Right</option>
          </select>
        </div>
        <div>
          <select
            onChange={({ target }) => {
              dispach({
                type: reducerActions.changeTopBottom,
                payload: target.value,
              });
            }}
          >
            <option value="TOP">Top</option>
            <option value="BOTTOM">Bottom</option>
          </select>
        </div>
        <div>
          <select
            onChange={({ target }) => {
              dispach({
                type: reducerActions.changeType,
                payload: target.value,
              });
            }}
          >
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
          </select>
        </div>
        <div>
          <input
            value={toastState.message}
            onChange={({ target }) => {
              dispach({
                type: reducerActions.changeMessage,
                payload: target.value,
              });
            }}
          />
        </div>
        <div className="flex-row input-duration">
          <span>Duration</span>
          <input
            type="range"
            min="10"
            max="100"
            value={toastState.duration}
            onChange={({ target }) => {
              dispach({
                type: reducerActions.changeDuration,
                payload: target.value,
              });
            }}
          />
        </div>
        <div>
          <button className="btn show-toast" onClick={showToast}>
            Show toast
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default ToastPopUp;
