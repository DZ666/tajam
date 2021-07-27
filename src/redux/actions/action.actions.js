import {
  OPEN_VIDEO,
  CLOSE_VIDEO,
  OPEN_REVIEW,
  CLOSE_REVIEW,
  OPEN_QUOTES_REVIEW,
  CLOSE_QUOTES_REVIEW
} from '../types/actions'

export const sendMessage = (data) => dispatch => {
  console.log(data);
}

export const openWindow = () => dispatch => {
  dispatch({ type: OPEN_VIDEO })
}

export const closeWindow = () => dispatch => {
  dispatch({ type: CLOSE_VIDEO })
}

export const openReview = (id) => dispatch => {
  dispatch({ type: OPEN_REVIEW, id: id })
}

export const closeReview = (id) => dispatch => {
  dispatch({ type: CLOSE_REVIEW, id: id })
}

export const openQuotesReview = (id) => dispatch => {
  dispatch({ type: OPEN_QUOTES_REVIEW, id: id })
}

export const closeQuotesReview = (id) => dispatch => {
  dispatch({ type: CLOSE_QUOTES_REVIEW, id: id })
}
