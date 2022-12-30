import { useParams, Link } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch'

const Player = () => {

    const { id } = useParams()

    // Carregamento dos dados individuais
    const url = 'http://localhost:3000/players/' + id
    const {data: player, loading, error} = useFetch(url)

    console.log(player)

    return (
        <>
            <p>Id do jogador: {id}.</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {player && (
                <div>
                    <h1>{player.name}</h1>
                    <p><span>País de origem:</span> {player.country}</p>
                    {/* Nested routes */}
                    <Link to={`/players/${player.id}/info`}>Mais informações:</Link>
                </div>
            )}
        </>
    )
}

export default Player