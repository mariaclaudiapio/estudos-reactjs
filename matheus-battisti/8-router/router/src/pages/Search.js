import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {

    const [searchParams] = useSearchParams()
    const url = 'http://localhost:3000/players?' + searchParams
    const { data: players, loading, error } = useFetch(url)

    return (
        <div>
            <h1>Resultados disponíveis</h1>
            <ul className="players">
        {players && players.map(player => (
          <li key={player.id}>
            <h2>{player.name}</h2>
            <p><span>Pais de origem:</span> {player.country}</p>
            <Link to={`/players/${player.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Search