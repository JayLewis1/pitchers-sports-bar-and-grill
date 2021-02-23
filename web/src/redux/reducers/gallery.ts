import { GalleryTypes, Gallery, TOGGLE_GALLERY } from "../actions/types";

const initialState:Gallery = {
    toggle: false
}

export const galleryReducer = (state:Gallery = initialState, action: GalleryTypes  ) => {
  const { type, payload } = action;

  switch(type) {
    case TOGGLE_GALLERY :
      return {
        ...state,
        toggle: payload,
      }
    default:
      return state;
  }
}