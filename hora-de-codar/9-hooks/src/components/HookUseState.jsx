import { useState } from "react";

const HookUseState = () => {
  let userName = "Maria Antônia";
  const [name, setName] = useState("Maria Cláudia");

  const changeNames = () => {
    userName = "Maria Antônia de Souza Pio";
    setName("Maria Cláudia Pio Ramos");
  };

  // 2 - uso do useState em inputs
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefaut();

    console.log(age);
  };

  return (
    <div>
      <h2>useState</h2>
      <p>Variável: {userName}</p>{" "}
      {/* A variável não rerenderiza; o hook useState sim */}
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/* Ao clicar no botão, somente o nome associado ao useState é modificado */}
      {/* 2 - uso do useState em inputs */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos.</p>
      <hr />
    </div>
  );
};

export default HookUseState;
