// 3 - alterando valor do contexto
// // 4 - refatorando o contexto com hook
// import { useContext } from "react";

// 3 - alterando valor do contexto
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {counter}</p>
            <ChangeCounter />
        </div>
    );
};

export default Home;