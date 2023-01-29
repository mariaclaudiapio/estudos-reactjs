// 3 - alterando o valor do contexto
import { useContext } from "react";

// 3 - alterando o valor do contexto
import { CounterContext } from "../context/CounterContext";
// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contact = () => {
  const { counter } = useContext(CounterContext);

  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Página de Contatos</h1>
      <p>Valor do Counter: {counter}</p>
    </div>
  );
};

export default Contact;
