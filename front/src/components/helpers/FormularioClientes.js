const FormularioCliente = () => {
  return (
    <form className="row g-3 w-70 col-12">
      <section className="col-md-6">
        <label className="form-label">
        tipo de identificacion
        </label>
        <select className="form-select" id="tipoIdentificacion" required>
          <option selected disabled value="" className="casillas">
           -seleccionar-
          </option>
          <option className="casillas" value="CC">Cedula</option>
          <option className="casillas" value="TI">Tarjeta de identidad</option>
          <option className="casillas" value="CE">Cedula de extranjeria</option>
        </select>
      </section>

      <section className="col-md-6">
        <label className="form-label">
        numero de identificacion
        </label>
        <input
          type="text"
          className="form-control"
          id="numeroDeIdentificacion"
          name="numeroDeIdentificacion"
          placeholder="##########"
          required
        />
      </section>

      <section className="col-md-6">
        <label className="form-label">
          nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          placeholder="John"
          required
        />
      </section>

      <section className="col-md-6">
        <label className="form-label">
          apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          name="apellido"
          placeholder="uribe"
          required
        />
      </section>

      <section className="col-md-6">
        <label className="form-label">
        fecha de nacimiento
        </label>
        <input
          type="date"
          className="form-control"
          id="fechaDeNacimiento"
          name="fechaDeNacimiento"
          required
        />
      </section>

      <section className="col-md-6">
        <label className="form-label">
        direccion
        </label>
        <input
          type="text"
          className="form-control"
          id="direccion"
          name="direccion"
          placeholder="calle 75a sur #44-25"
          required
        />
      </section>

      <section className="col-md-3">
        <label className="form-label">
          pais
        </label>
        <select className="form-select" id="pais" required>
          <option selected disabled value=""  className="casillas">
          -seleccionar-
          </option>
          <option className="casillas" value="colombia">colombia</option>
        </select>
      </section>

      <section className="col-md-3">
        <label className="form-label">
        departamento
        </label>
        <select className="form-select" id="departamento" required>
          <option selected disabled value=""  className="casillas">
          -seleccionar-
          </option>
          <option className="casillas" value="Amazonas">Amazonas</option>
          <option className="casillas" value="Antioquia">Antioquia</option>
          <option className="casillas" value="Arauca">Arauca</option>
          <option className="casillas" value="Atlántico">Atlántico</option>
          <option className="casillas" value="Bolívar">Bolívar</option>
          <option className="casillas" value="Boyacá">Boyacá</option>
          <option className="casillas" value="Caldas">Caldas</option>
          <option className="casillas" value="Caquetá">Caquetá</option>
          <option className="casillas" value="Casanare">Casanare</option>
          <option className="casillas" value="Cauca">Cauca</option>
          <option className="casillas" value="Cesar">Cesar</option>
          <option className="casillas" value="Chocó">Chocó</option>
          <option className="casillas" value="Córdoba">Córdoba</option>
          <option className="casillas" value="Cundinamarca">Cundinamarca</option>
          <option className="casillas" value="Guainía">Guainía</option>
          <option className="casillas" value="Guaviare">Guaviare</option>
          <option className="casillas" value="Huila">Huila</option>
          <option className="casillas" value="La Guajira">La Guajira</option>
          <option className="casillas" value="Magdalena">Magdalena</option>
          <option className="casillas" value="Meta">Meta</option>
          <option className="casillas" value="Nariño">Nariño</option>
          <option className="casillas" value="Norte de Santander">Norte de Santander</option>
          <option className="casillas" value="Putumayo">Putumayo</option>
          <option className="casillas" value="Quindío">Quindío</option>
          <option className="casillas" value="Risaralda">Risaralda</option>
          <option className="casillas" value="San Andrés y Providencia">
            San Andrés y Providencia
          </option>
          <option className="casillas" value="Santander">Santander</option>
          <option className="casillas" value="Sucre">Sucre</option>
          <option className="casillas" value="Tolima">Tolima</option>
          <option className="casillas" value="Valle del Cauca">Valle del Cauca</option>
          <option className="casillas" value="Vaupés">Vaupés</option>
          <option className="casillas" value="Vichada">Vichada</option>
        </select>
      </section>

      <section className="col-md-3">
        <label className="form-label">
        ciudad
        </label>
        <select className="form-select" id="ciudad" required>
          <option selected disabled value=""  className="casillas">
          -seleccionar-
          </option>
          <option className="casillas" value="Arauca">Arauca</option>
          <option className="casillas" value="Armenia">Armenia</option>
          <option className="casillas" value="Barranquilla">Barranquilla</option>
          <option className="casillas" value="Bogotá">Bogotá</option>
          <option className="casillas" value="Bucaramanga">Bucaramanga</option>
          <option className="casillas" value="Cali">Cali</option>
          <option className="casillas" value="Cartagena">Cartagena</option>
          <option className="casillas" value="Cúcuta">Cúcuta</option>
          <option className="casillas" value="Florencia">Florencia</option>
          <option className="casillas" value="Ibagué">Ibagué</option>
          <option className="casillas" value="Leticia">Leticia</option>
          <option className="casillas" value="Manizales">Manizales</option>
          <option className="casillas" value="Medellín">Medellín</option>
          <option className="casillas" value="Mitú">Mitú</option>
          <option className="casillas" value="Mocoa">Mocoa</option>
          <option className="casillas" value="Montería">Montería</option>
          <option className="casillas" value="Neiva">Neiva</option>
          <option className="casillas" value="Pasto">Pasto</option>
          <option className="casillas" value="Pereira">Pereira</option>
          <option className="casillas" value="Popayán">Popayán</option>
          <option className="casillas" value="Puerto Carreño">Puerto Carreño</option>
          <option className="casillas" value="Puerto Inírida">Puerto Inírida</option>
          <option className="casillas" value="Quibdó">Quibdó</option>
          <option className="casillas" value="Riohacha">Riohacha</option>
          <option className="casillas" value="San Andrés">San Andrés</option>
          <option className="casillas" value="San José del Guaviare">San José del Guaviare</option>
          <option className="casillas" value="Santa Marta">Santa Marta</option>
          <option className="casillas" value="Sincelejo">Sincelejo</option>
          <option className="casillas" value="Tunja">Tunja</option>
          <option className="casillas" value="Valledupar">Valledupar</option>
          <option className="casillas" value="Villavicencio">Villavicencio</option>
          <option className="casillas" value="Yopal">Yopal</option>
        </select>
      </section>

      <section className="col-md-3">
        <label className="form-label">
        marca
        </label>
        <select className="form-select" id="marca" required>
          <option selected disabled value=""  className="casillas">
          -seleccionar-
          </option>
          <option className="casillas" value="Americanino">Americanino</option>
          <option className="casillas" value="American Eagle">American Eagle</option>
          <option className="casillas" value="Chevignon">Chevignon</option>
          <option className="casillas" value="Esprit">Esprit</option>
          <option className="casillas" value="Naf Naf">Naf Naf</option>
          <option className="casillas" value="rifle">rifle</option>
        </select>
      </section>
      
      <section className="col-12 d-flex justify-content-center">
        <button className="btn btn-primary registrar" type="submit">
          Registrar
        </button>
      </section>
    </form>
  );
};

export default FormularioCliente;
