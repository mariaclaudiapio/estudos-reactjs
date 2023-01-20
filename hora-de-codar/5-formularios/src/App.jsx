import "./App.css";

import MyForm from "./components/MyForm";

function App() {

  return (
    <div className="App">
      <h1>Formulários em React</h1>
      <MyForm userName="Maria Cláudia" userEmail="mariaclaudia@email.com.br" />
    </div>
  )
};

export default App;
