// 3 - alterando o valor do contexto
import { useContext } from "react";

// 3 - alterando o valor do contexto
import { CounterContext } from "../context/CounterContext";

const Contact = () => {
    const { counter } = useContext(CounterContext);

    return (
        <div>
            <h1>Página de Contatos</h1>
            <p>Valor do Counter: {counter}</p>
        </div>
    )
}

export default Contact;