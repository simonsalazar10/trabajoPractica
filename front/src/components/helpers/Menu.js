import logo1 from "../../imgs/nafnaf.png";
import logo2 from "../../imgs/rifle.png";
import logo3 from "../../imgs/esprit.png";
import logo4 from "../../imgs/chevignon.png";
import logo5 from "../../imgs/americanino.png";
import logo6 from "../../imgs/americaneagle.png";

const menu = () => {
    return(
        <section className="header">
        <img className="americanino" src={logo5} alt="hola" />
        <img className="rifle" src={logo2} alt="hola" />
        <img className="esprit" src={logo3} alt="hola" />
        <h1 className="tituloPrincipal">~ GRUPO URIBE ~</h1>
        <img className="chevignon" src={logo4} alt="hola" /> 
        <img className="nafnaf" src={logo1} alt="hola" />
        <img className="americaneagle" src={logo6} alt="hola" />

        </section>
        
    )
}
export default menu;