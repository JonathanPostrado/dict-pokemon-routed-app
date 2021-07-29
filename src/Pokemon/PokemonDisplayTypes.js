import Pokemon from './Pokemon'
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";

const PokemonDisplayTypes = ({pokemons}) => {

    const { type } = useParams()
    const { path, url } = useRouteMatch()

    const UpperCaseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const showPokemonByType = pokemons.filter(pokemon => pokemon.types.includes(UpperCaseFirstLetter(type))).map(({id, name, img, types}) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>
                        <Link to={`${url}/${name}`}>
                            <img src={img} alt={name} width={50}/>
                        </Link>
                    </td>
                    <td>{types.join(" , ")}</td>
                </tr>              
            )
        }
    )

    return (
        <Switch>
            <Route exact path={path}>
                <table className="pokemons-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showPokemonByType}
                        </tbody>
                    </table>
                
            </Route>
            <Route path={`${path}/:name`}><Pokemon pokemons={pokemons} /></Route>
        </Switch>
    )
}

export default PokemonDisplayTypes