import { useParams } from "react-router-dom";
const Pokemon = ({pokemons}) => {

    const { name } = useParams()
    const index = pokemons.findIndex(p => p.name === name)
    const pokemon = pokemons[index]

    return (
        <div className="col s12 m7" key={pokemon.id}>
            <div className="card small horizontal">
                <div className="card-image">
                    <img src={pokemon.img} alt={pokemon.name} width={50}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content font-content">
                    <table className="pokemons-info-table">
                        <thead>
                            <tr>
                                <th className="pokemons-table-th">#</th>
                                <th className="pokemons-table-th">Type</th>
                                <th className="pokemons-table-th">Total</th>
                                <th className="pokemons-table-th">HP</th>
                                <th className="pokemons-table-th">Attack</th>
                                <th className="pokemons-table-th">Defense</th>
                                <th className="pokemons-table-th">Special Attack</th>
                                <th className="pokemons-table-th">Special Defense</th>
                                <th className="pokemons-table-th">Speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pokemons-table-td" >{pokemon.id}</td>
                                <td className="pokemons-table-td" >{pokemon.types.join(", ")}</td>
                                <td className="pokemons-table-td">{pokemon.total}</td>
                                <td className="pokemons-table-td">{pokemon.hp}</td>
                                <td className="pokemons-table-td">{pokemon.attack}</td>
                                <td className="pokemons-table-td">{pokemon.defense}</td>
                                <td className="pokemons-table-td">{pokemon.specialattack}</td>
                                <td className="pokemons-table-td">{pokemon.specialdefense}</td>
                                <td className="pokemons-table-td">{pokemon.speed}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="card-action">
                        <h6 className="header-font-black">Pokemon Name: <h3 className="header-font-red">{pokemon.name}</h3> </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon