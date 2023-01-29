import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Página de Contatos</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
