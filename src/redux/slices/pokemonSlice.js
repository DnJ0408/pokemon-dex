import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//todo: createSlice()로 state 만들기

//*--- 초기 상태 값 ---*//
const initialState = {
  selectedPokemon: []
};

//*--- { name:'state이름', initialState:'state값'} 형태로 생성 ---*//
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState, // key와 value 가 같은 글자로 명시가 된다면 하나로 생략가능(같다는 의미는 아니다.)
  reducers: {

    //*--- 포켓몬 추가 함수 ---*//
    addPokemon: (state, action) => {
      const pokemon = action.payload;

      if (state.selectedPokemon.some((selectedPokemon) => selectedPokemon.id === pokemon.id)) {
        toast.warning("한 마리 씩만 가져갈 수 있어요!");
        return;
      }

      if (state.selectedPokemon.length < 6) {
        state.selectedPokemon = [...state.selectedPokemon, pokemon];
        toast.success(`${pokemon.korean_name}이(가) 추가 되었어요!`);
      } else {
        toast.warning("최대 6마리까지만 함께 할 수 있어요!");
      }
    },

    //*--- 포켓몬 삭제 함수 ---*//
    deletePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter((pokemon) => pokemon.id !== action.payload);
      toast.success("포켓몬이 자연으로 돌아갔습니다.")
    },
  },
});

//*--- action creator 생성: pokemonSlice.actions로 부터 두 함수를 내보낸다. ---*//
export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;

