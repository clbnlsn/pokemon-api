import React,{useState} from 'react';
import Axios from 'axios';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then(res => {
                return res.json()
            })
            .then(res => setPokemon(res.results))
            .catch(err => console.log(err));
    }

    // Axios.get("https://pokeapi.co/api/v2/pokemon")
    //     .then(res => console.log(res))
    //     .catch(err => console.log(res))
    
    return(
        <div>
            <button className="btn btn-primary btn-lg btn-outline-info" onClick={getPokemon}>Clicky Clicky Pokey Pokey</button>
            {
                pokemon.map((p,i) => {
                    return(
                        <h4 key={i}>{p.name}</h4>
                    );
                })
            }
        </div>
    );
}

export default Pokemon;