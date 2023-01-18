import { useState } from "react";

const HookUseState = () => {

    let userName = "João";

    const [name, setName] = useState("Matheus");

    const changeNames = () => {
        userName = "João Souza";

        setName("Matheus Battisti");
    }

    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    }

    return (
        <div>
            <h2>useSate e variável</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar Nomes!</button>
            <hr />
            <h2>useState e input</h2>
            <form onSubmit={handleSubmit}>
                <p>Digite a sua idade:</p>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos!</p>
            <hr />
        </div>
    );
};

export default HookUseState;