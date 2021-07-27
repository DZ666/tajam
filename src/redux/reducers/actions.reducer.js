// TYPES IMPORT
  import {
    IS_SEND_LOADING,
    IS_SEND_FAILED_LOADING,
    IS_SEND_LOADED,
    OPEN_VIDEO,
    CLOSE_VIDEO,
    OPEN_REVIEW,
    CLOSE_REVIEW,
    OPEN_QUOTES_REVIEW,
    CLOSE_QUOTES_REVIEW
  } from "../types/actions.js"

// Images Imports
  import semf_ucuk_webp from "../../assets/images/photos/semf_ucuk.webp"
  import dik_adalin_webp from "../../assets/images/photos/dik_adalin.webp"
  import jeng_kol_webp from "../../assets/images/photos/jeng_kol.webp"
  import pet_romak_webp from "../../assets/images/photos/pet_romak.webp"

  import work1 from "../../assets/images/works/work1.webp"
  import work2 from "../../assets/images/works/work2.webp"
  import work3 from "../../assets/images/works/work3.webp"
  import work4 from "../../assets/images/works/work4.webp"
  import work5 from "../../assets/images/works/work5.webp"
  import work6 from "../../assets/images/works/work6.webp"
  import work7 from "../../assets/images/works/work7.webp"
  import work8 from "../../assets/images/works/work8.webp"
  import work9 from "../../assets/images/works/work9.webp"
  import work10 from "../../assets/images/works/work10.webp"
  import work11 from "../../assets/images/works/work11.webp"
  import work12 from "../../assets/images/works/work12.webp"

  import face_1_webp from "../../assets/images/photos/face-1.webp"
  import face_2_webp from "../../assets/images/photos/face-2.webp"
  import face_3_webp from "../../assets/images/photos/face-3.webp"
  import face_4_webp from "../../assets/images/photos/face-4.webp"
  import face_5_webp from "../../assets/images/photos/face-5.webp"

// Default Data, If I don't add it, I'll take an error
let initialState = {
  data: null,
  loadings: {
    is_send_loading: false,
    is_open_video_winodw: false
  },
  reviews: [
    {
      id: 0,
      img: semf_ucuk_webp,
      name: "SEMF UCUK",
      profession: "CEO & FOUNDER",
      review: "Lorem ipsum dolor sit amet proin gravida nibh vel velit",
      is_open: false
    },
    {
      id: 1,
      img: dik_adalin_webp,
      name: "DIK ADALIN",
      profession: "ENGINEERING",
      review: "Lorem ipsum dolor sit amet proin gravida nibh vel velit",
      is_open: false
    },
    {
      id: 2,
      img: jeng_kol_webp,
      name: "JENG KOL",
      profession: "DESIGNER",
      review: "Lorem ipsum dolor sit amet proin gravida nibh vel velit",
      is_open: false
    },
    {
      id: 3,
      img: pet_romak_webp,
      name: "PET ROMAK",
      profession: "MARKETING",
      review: "Lorem ipsum dolor sit amet proin gravida nibh vel velit",
      is_open: false
    }
  ],
  slack_reviews: [
    {
      id: 0,
      img: face_1_webp,
      name: "SIND RATES",
      profession: "PROGRAMMER",
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum consequat auctor eu in elit.",
      is_open: false
    },
    {
      id: 1,
      img: face_2_webp,
      name: "MARTIN LUMBER",
      profession: "DESIGNER",
      review: "Port 2 This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
      is_open: false
    },
    {
      id: 2,
      img: face_3_webp,
      name: "JANE GALADRIEL",
      profession: "CEO TENGKUREP",
      review: "Port 3 This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus..",
      is_open: false
    },
    {
      id: 3,
      img: face_4_webp,
      name: "MARGO SAM",
      profession: "PROGRAMMER",
      review: "Port 4 This is Photoshop's version  of Lorem Ipsum. Nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
      is_open: false
    },
    {
      id: 4,
      img: face_5_webp,
      name: "JIMMY LAVAN",
      profession: "tESTER",
      review: "Port 5 This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.",
      is_open: false
    },
  ],
  works: [
    {
      id: 0,
      img: work1,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 1,
      img: work2,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 2,
      img: work3,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 3,
      img: work4,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 4,
      img: work5,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 5,
      img: work6,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 6,
      img: work7,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 7,
      img: work8,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 8,
      img: work9,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 9,
      img: work10,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 10,
      img: work11,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    },
    {
      id: 11,
      img: work12,
      name: "Lorem ipsum dolor sit amet proin gravida nibh vel velit"
    }
  ]
}

// All Action Project Requires here
const actionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case IS_SEND_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          is_send_loading: true
        }
      }
    case IS_SEND_FAILED_LOADING:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          is_send_loading: false
        }
      }
    case IS_SEND_LOADED:
      return {
        ...state,
        data: action.data,
        loadings: {
          ...state.loadings,
          is_send_loading: false
        }
      }
    case OPEN_VIDEO:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          is_open_video_winodw: true
        }
      }
    case CLOSE_VIDEO:
      return {
        ...state,
        loadings: {
          ...state.loadings,
          is_open_video_winodw: false
        }
      }
    case OPEN_REVIEW:
      let new_reviews_open = []
      for (let i = 0, len = state.reviews.length; i < len; i++) {
        if (state.reviews[i].id === action.id) {
          new_reviews_open.push({
            ...state.reviews[i],
            is_open: true
          })
        } else {
          new_reviews_open.push({
            ...state.reviews[i],
          })
        }
      }
      return {
        ...state,
        reviews: new_reviews_open
      }
    case CLOSE_REVIEW:
      let new_reviews_close = []
      for (let i = 0, len = state.reviews.length; i < len; i++) {
        if (state.reviews[i].id === action.id) {
          new_reviews_close.push({
            ...state.reviews[i],
            is_open: false
          })
        } else {
          new_reviews_close.push({
            ...state.reviews[i],
          })
        }
      }
      return {
        ...state,
        reviews: new_reviews_close
      }
    case OPEN_QUOTES_REVIEW:
      let new_quotes_reviews_open = []
      for (let i = 0, len = state.slack_reviews.length; i < len; i++) {
        if (state.slack_reviews[i].id === action.id) {
          new_quotes_reviews_open.push({
            ...state.slack_reviews[i],
            is_open: true
          })
        } else {
          new_quotes_reviews_open.push({
            ...state.slack_reviews[i],
          })
        }
      }
      return {
        ...state,
        slack_reviews: new_quotes_reviews_open
      }
    case CLOSE_QUOTES_REVIEW:
      let new_quotes_reviews_close = []
      for (let i = 0, len = state.slack_reviews.length; i < len; i++) {
        if (state.slack_reviews[i].id === action.id) {
          new_quotes_reviews_close.push({
            ...state.slack_reviews[i],
            is_open: false
          })
        } else {
          new_quotes_reviews_close.push({
            ...state.slack_reviews[i],
          })
        }
      }
      return {
        ...state,
        slack_reviews: new_quotes_reviews_close
      }
    default:
      return state
  }
}

export default actionsReducer
