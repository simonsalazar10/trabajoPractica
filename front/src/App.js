import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/layouts/Main";
import Menu from "./components/helpers/Menu";
function App() {
  return (
    <section>
      <Menu />
      <Main />
    </section>
  );
}

export default App;
