import { Link } from 'react-router-dom'

import './Home.css'
import { useFetch } from '../hooks/useFetch'


const Home = () => {

  const url = 'http://localhost:3000/players'

  const { data: players, loading, error } = useFetch(url)

  return (
    <div>
      <h1>Players</h1>
      {error && <p>{error}</p>}
      <ul className="players">
        {players && players.map(player => (
          <li key={player.id}>
            <h2>{player.name}</h2>
            <p><span>Pais de origem:</span> {player.country}</p>
            {/* rota dinâmica */}
            <Link to={`/players/${player.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Home