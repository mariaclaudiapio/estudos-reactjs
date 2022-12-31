// 3 - alterando o contexto
import { useContext } from 'react'

import { CounterContext } from '../context/CounterContext'

const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext)

    return (
        <button onClick={() => setCounter(counter + 1)}>
            Adicionar valor ao contador
        </button>
    )
}

export default ChangeCounter