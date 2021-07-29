const Pokemons = ({pokemons}) => {

    return (
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
                {
                    pokemons.map(({id, name, img, types}) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td><img src={img} alt={name} width={50}/></td>
                                    <td>{types.join(" , ")}</td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
    )    

}    

export default Pokemons