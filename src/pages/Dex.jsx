import { useState } from "react";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import { toast } from "react-toastify";

const Dex = () => {

    const [selectedPokemon, setSelectedPokemon] = useState([]);

    const deletePokemon = (id) => {
        const deletedPokemon = selectedPokemon.filter((pokemon) => {
            return pokemon.id !== id;
        })
        toast.success("포켓몬이 자연으로 돌아갔습니다.")
        setSelectedPokemon(deletedPokemon);
    }

    const addPokemon = (pokemon) => {
        if (selectedPokemon.some((selectedPokemon) => selectedPokemon.id === pokemon.id)) {
            toast.warning("한 마리 씩만 가져갈 수 있어요!");
            return;
        }

        if (selectedPokemon.length < 6) {
            setSelectedPokemon((prev) => {
                toast.success(`${pokemon.korean_name}이(가) 추가 되었어요!`);
                return [...prev, pokemon];
            });
        } else {
            toast.warning("최대 6마리까지만 함께 할 수 있어요!");
        }
    };
    return (
        <div>
            <DashBoard
                selectedPokemon={selectedPokemon}
                deletePokemon={deletePokemon}
            />
            <PokemonList addPokemon={addPokemon} />
        </div>
    )
}

export default Dex;