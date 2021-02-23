import { combineReducers } from "redux";

import { galleryReducer } from "./gallery";

export const rootReducer =  combineReducers({
  gallery: galleryReducer
})

export type RootState = ReturnType<typeof rootReducer>