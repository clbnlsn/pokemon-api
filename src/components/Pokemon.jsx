import React,{useState} from 'react';
import Axios from 'axios';

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        Axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => setPokemon(res.data.results))
            .catch(err => console.log(err))
    }
    
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