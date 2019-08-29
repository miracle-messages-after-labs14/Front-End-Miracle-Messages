/*
 * MapActions.js contains any and all actions used to diplay
 * the map. From data points to the slide every logical state
 * will be taken care of here
 */

import axios from "axios";

/*************************************************************/
/*                     Map Data Actions                      */
/*************************************************************/
export const FETCH_CHAPTER_INFO = "FETCH_CHAPTER_INFO";
export const FETCH_CHAPTER_SUCCESS = "FETCH_CHAPTER_SUCCESS";
export const FETCH_CHAPTER_FAIL = "FETCH_CHAPTER_FAIL";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_CHAPTER_INFO });
  axios
    .get("https://miracle-messages-production.herokuapp.com/api/chapter")
    .then(res => dispatch({ type: FETCH_CHAPTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_CHAPTER_FAIL }));
};

/*************************************************************/
/*                     Viewport Action                       */
/*************************************************************/
export const ON_VIEWPORT_CHANGED = "ON_VIEWPORT_CHANGED";

export const onViewportChanged = viewport => dispatch => {
  dispatch({
    type: ON_VIEWPORT_CHANGED,
    payload: viewport
  });
};

/*************************************************************/
/*                     Slide Actions                         */
/*************************************************************/
export const TOGGLE_SLIDE = "TOGGLE_SLIDE";
export const UPDATE_SLIDE = "UPDATE_SLIDE";

export const slideToggleAction = openDrawer => dispatch => {
  dispatch({
    type: TOGGLE_SLIDE,
    payload: !openDrawer
  });
};

export const updateSlideAction = slideInfo => dispatch => {
  dispatch({
    type: UPDATE_SLIDE,
    payload: slideInfo
  });
};
