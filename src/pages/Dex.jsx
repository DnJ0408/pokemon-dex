import { useState } from "react";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";

const Dex = () => {

    const [selectedPokemons, setSelectedPokemons] = useState([]);

    const deletePokemon = (id) => {
        const deletedPokemon = selectedPokemons.filter((pokemon) => {
            return pokemon.id !== id;
        })
        setSelectedPokemons(deletedPokemon);
    }

    const addPokemon = (pokemon) => {
        if (selectedPokemons.length < 6) {
            setSelectedPokemons((prev) => {
                console.log(prev);
                return [...prev, pokemon];
            });
        } else {
            alert("최대 6마리까지만 선택할 수 있습니다.");
        }
    };
    return (
        <div>
            <DashBoard
                selectedPokemons={selectedPokemons}
                deletePokemon={deletePokemon}
            />
            <PokemonList addPokemon={addPokemon} />
        </div>
    )
}

export default Dex;