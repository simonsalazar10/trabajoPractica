const Footer = () => {
  return (
    
    <footer class="footer">
      <section class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> Grupo Uribe</span> El Grupo Uribe es un grupo textil colombiano, de tendencia familiar, fundado en 1907. El grupo tiene la representación, producción y comercialización para Colombia y el caribe de marcas internacionales como Chevignon, Naf Naf, Americanino, Esprit, Rifle, American Eagle, Mother Care, American Brands, LBT, entre otras.
        </p>
        <section class="icons">
          <img className="a" src="../../../public/instagram.png" alt="" />
          <img className="a" src="../../../public/gorjeo.png" alt="" />
          <img className="a" src="../../../public/facebook.png" alt="" />
          <img className="a" src="../../../public/github.png" alt="" />
        </section>
      </section>
      <section class="footer-center col-md-4 col-sm-6">
        <section>
          <i class="fa fa-map-marker"></i>
          <p>
            <span> CONTACTO </span> MEDELLIN, ANTIOQUIA
          </p>
        </section>
        <section>
          <i class="fa fa-phone"></i>
          <p>Carrera 52 # 19 - 80 avenida guayabal</p>
        </section>
        <section>
          <i class="fa fa-phone"></i>
          <p>050024 Medellin</p>
        </section>
        <section>
          <i class="fa fa-phone"></i>
          <p>Colombia</p>
        </section>
        <section>
          <i class="fa fa-phone"></i>
          <p>+57 (604) 6071213</p>
        </section>
        <section>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="#">mercadeo@johnuribe.com.co</a>
          </p>
        </section>
      </section>
      <section class="footer-right col-md-4 col-sm-6">
        <h2>
          {" "}
          John Uribe
          <span>
            {" "}
            <img className="loguito" src="../../../public/ley.png" alt="" />
          </span>
        </h2>

        <p class="name">John Uribe e Hijos S.A. &copy;</p>
      </section>
    </footer>
  );
};
export default Footer;
