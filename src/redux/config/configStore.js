import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slices/pokemonSlice"

//*--- store(state들을 보관하는 저장소) 생성 *---//
const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  }
});

export default store;