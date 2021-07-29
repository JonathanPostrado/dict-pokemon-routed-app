import Pokemons from './Pokemon/Pokemons'
import PokemonDisplayTypes from './Pokemon/PokemonDisplayTypes'
import { BrowserRouter,Route,Switch,Link } from 'react-router-dom'

const PokemonRoutedApp = () => {
    const pokemons = [
        {
            id: "#025",
            name: "Pikachu",
            img: "https://img.pokemondb.net/artwork/vector/large/pikachu.png",
            types: ["Electric"],
            total: "320",
            hp: "35",
            attack: "55",
            defense: "40", 
            specialattack: "50",
            specialdefense: "50",
            speed: "90"
        },
        {
            id: "#026",
            name: "Raichu",
            img: "https://img.pokemondb.net/artwork/vector/large/raichu.png",
            types: ["Electric"],
            total: "485",
            hp: "60",
            attack: "90",
            defense: "55", 
            specialattack: "90",
            specialdefense: "80",
            speed: "110"
        },
        {
            id: "#001",        
            name: "Bulbasaur",
            img: "https://img.pokemondb.net/artwork/vector/large/bulbasaur.png",
            types: ["Grass","Poison"],
            total: "318",
            hp: "45",
            attack: "49",
            defense: "49", 
            specialattack: "65",
            specialdefense: "65",
            speed: "45"
        },
        {
            id: "#143",        
            name: "Snorlax",
            img: "https://img.pokemondb.net/artwork/vector/large/snorlax.png",
            types: ["Normal"],
            total: "540",
            hp: "160",
            attack: "110",
            defense: "65", 
            specialattack: "65",
            specialdefense: "110",
            speed: "30"
        },
        {
            id: "#150",        
            name: "Mewtwo",
            img: "https://img.pokemondb.net/artwork/vector/large/mewtwo.png",
            types: ["Psychic"],
            total: "680",
            hp: "106",
            attack: "110",
            defense: "90", 
            specialattack: "154",
            specialdefense: "90",
            speed: "130"
        },
        {
            id: "#133",        
            name: "Eevee",
            img: "https://img.pokemondb.net/artwork/vector/large/eevee.png",
            types: ["Normal"],
            total: "325",
            hp: "55",
            attack: "55",
            defense: "50", 
            specialattack: "45",
            specialdefense: "65",
            speed: "55"
        },
        
        {
            id: "#002",
            name: "Ivysaur",
            img: "https://img.pokemondb.net/artwork/vector/large/ivysaur.png",
            types: ["Grass","Poison"],
            total: "405",
            hp: "60",
            attack: "62",
            defense: "63", 
            specialattack: "80",
            specialdefense: "80",
            speed: "60"
        },
        {
            id: "#003",
            name: "Venusaur",
            img: "https://img.pokemondb.net/artwork/vector/large/venusaur.png",
            types: ["Grass","Poison"],
            total: "525",
            hp: "80",
            attack: "82",
            defense: "83", 
            specialattack: "100",
            specialdefense: "100",
            speed: "80"
        },
        {
            id: "#004",
            name: "Charmander",
            img: "https://img.pokemondb.net/artwork/vector/large/charmander.png",
            types: ["Fire"],
            total: "309",
            hp: "39",
            attack: "52",
            defense: "43", 
            specialattack: "60",
            specialdefense: "50",
            speed: "65"
        },
        {
            id: "#005",
            name: "Charmeleon",
            img: "https://img.pokemondb.net/artwork/vector/large/charmeleon.png",
            types: ["Fire"],
            total: "405",
            hp: "58",
            attack: "64",
            defense: "58", 
            specialattack: "80",
            specialdefense: "65",
            speed: "80"
        },
        {
            id: "#006",
            name: "Charizard",
            img: "https://img.pokemondb.net/artwork/vector/large/charizard.png",
            types: ["Fire","Flying"],
            total: "534",
            hp: "78",
            attack: "84",
            defense: "78", 
            specialattack: "109",
            specialdefense: "85",
            speed: "100"
            
        },  
        {
            id: "#007",
            name: "Squirtle",
            img: "https://img.pokemondb.net/artwork/vector/large/squirtle.png",
            types: ["Water"],
            total: "314",
            hp: "44",
            attack: "48",
            defense: "65", 
            specialattack: "50",
            specialdefense: "64",
            speed: "43"
        },
        {
            id: "#008",
            name: "Wartortle",
            img: "https://img.pokemondb.net/artwork/vector/large/wartortle.png",
            types: ["Water"],
            total: "405",
            hp: "59",
            attack: "63",
            defense: "80", 
            specialattack: "65",
            specialdefense: "80",
            speed: "58"
        },
        {
            id: "#009",
            name: "Blastoise",
            img: "https://img.pokemondb.net/artwork/vector/large/blastoise.png",
            types: ["Water"],
            total: "530",
            hp: "79",
            attack: "83",
            defense: "100", 
            specialattack: "85",
            specialdefense: "105",
            speed: "78"
        },
        {
            id: "#010",
            name: "Caterpie",
            img: "https://img.pokemondb.net/artwork/vector/large/caterpie.png",
            types: ["Bug"],
            total: "198",
            hp: "45",
            attack: "30",
            defense: "35", 
            specialattack: "20",
            specialdefense: "20",
            speed: "45"
        },
    ]
    
    const routelinks = [
        {
            name: "Display Pokemon List",
            to: "/home",
        },
        {
            name: "Normal",
            to: "/types/normal",
        },
        {
            name: "Grass",
            to: "/types/grass",
        },
        {
            name: "Poison",
            to: "/types/poison",
        },
        {
            name: "Fire",
            to: "/types/fire",
        },
        {
            name: "Water",
            to: "/types/water",
        },
        {
            name: "Flying",
            to: "/types/flying",
        },
        {
            name: "Bug",
            to: "/types/bug",
        },
        {
            name: "Psychic",
            to: "/types/psychic",
        },
        {
            name: "Electric",
            to: "/types/electric",
        },
    ]

    return (
        <BrowserRouter>
            <div><br />
                <table>
                        <thead>
                            <tr>
                                <th className="nav-th" colSpan="3">Pokemon Navigation Bar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="nav-td">
                                    {routelinks.map(({name, to}) =>
                                        <Link className="btn blue darken-1 btn-block" to={to} key={name}>{name}<br/></Link>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                </table>
            </div><br />

            <Switch>
                <Route exact path="/home" children={<Pokemons pokemons={pokemons} />}/>
                <Route path="/types/:type"  children={<PokemonDisplayTypes pokemons={pokemons} />} />
            </Switch>
        </BrowserRouter>
    )
}

export default PokemonRoutedApp;