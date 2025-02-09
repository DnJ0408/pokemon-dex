import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const PokemonContext = createContext(null);

export const PokemonContextProvider = ({ children }) => {

  //*--- 선택된 포켓몬 state ---*//
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  //*--- 포켓몬 추가 함수 ---*//
  const addPokemon = (pokemon) => {
    if (selectedPokemon.some((selectedPokemon) => selectedPokemon.id === pokemon.id)) {
      toast.warning("한 마리 씩만 가져갈 수 있어요!");
      return;
    }

    if (selectedPokemon.length < 6) {
      setSelectedPokemon((prev) => [...prev, pokemon]);
      toast.success(`${pokemon.korean_name}이(가) 추가 되었어요!`);
    } else {
      toast.warning("최대 6마리까지만 함께 할 수 있어요!");
    }
  };

  //*--- 포켓몬 삭제 함수 ---*//
  const deletePokemon = (id) => {
    const deletedPokemon = selectedPokemon.filter((pokemon) => pokemon.id !== id)
    toast.success("포켓몬이 자연으로 돌아갔습니다.")
    setSelectedPokemon(deletedPokemon);
  }

  return (
    <PokemonContext.Provider value={{ selectedPokemon, addPokemon, deletePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}