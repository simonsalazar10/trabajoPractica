import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/layouts/Main";
import Menu from "./components/helpers/Menu";
/* import Footer from "./components/helpers/Footer"; */
function App() {
  return (
    <section>
      <Menu />
      <Main />
      {/* <Footer/> */}
    </section>
  );
}

export default App;
