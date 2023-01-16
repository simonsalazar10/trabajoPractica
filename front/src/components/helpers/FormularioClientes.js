const FormularioCliente = () => {
  return (
    <form>
      <section className="form-group">
        <label className="control-label">tipo de identificacion</label>
        <select className="form-control" id="tipoDeIdentificacion">
          <option defaultValue>-seleccionar-</option>
          <option value="CC">Cedula</option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="CE">Cedula de extranjeria</option>
        </select>
      </section>

      <section className="form-group">
        <label className="control-label">numero de identificacion</label>
        <input
          type="text"
          className="form-control"
          id="numeroDeIdentificacion"
          name="numeroDeIdentificacion"
          placeholder="##########"
        />
      </section>

      <section className="form-group">
        <label className="control-label">nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          placeholder="John"
        />
      </section>

      <section className="form-group">
        <label className="control-label">apellido</label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          name="apellido"
          placeholder="uribe"
        />
      </section>

      <section className="form-group">
        <label className="control-label">fecha de nacimiento</label>
        <input
          type="date"
          className="form-control"
          id="fechaDeNacimiento"
          name="fechaDeNacimiento"
        />
      </section>

      <section className="form-group">
        <label className="control-label">direccion</label>
        <input
          type="text"
          className="form-control"
          id="direccion"
          name="direccion"
          placeholder="calle 75a sur #44-25"
        />
      </section>

      <section className="form-group">
        <label className="control-label">pais</label>
        <select className="form-control" id="pais">
          <option value="">-seleccionar-</option>
          <option value="colombia">colombia</option>
        </select>
      </section>

      <section className="form-group">
        <label className="control-label">departamento</label>
        <select className="form-control" id="departamento">
          <option value="">-seleccionar-</option>
          <option value="Amazonas">Amazonas</option>
          <option value="Antioquia">Antioquia</option>
          <option value="Arauca">Arauca</option>
          <option value="Atlántico">Atlántico</option>
          <option value="Bolívar">Bolívar</option>
          <option value="Boyacá">Boyacá</option>
          <option value="Caldas">Caldas</option>
          <option value="Caquetá">Caquetá</option>
          <option value="Casanare">Casanare</option>
          <option value="Cauca">Cauca</option>
          <option value="Cesar">Cesar</option>
          <option value="Chocó">Chocó</option>
          <option value="Córdoba">Córdoba</option>
          <option value="Cundinamarca">Cundinamarca</option>
          <option value="Guainía">Guainía</option>
          <option value="Guaviare">Guaviare</option>
          <option value="Huila">Huila</option>
          <option value="La Guajira">La Guajira</option>
          <option value="Magdalena">Magdalena</option>
          <option value="Meta">Meta</option>
          <option value="Nariño">Nariño</option>
          <option value="Norte de Santander">Norte de Santander</option>
          <option value="Putumayo">Putumayo</option>
          <option value="Quindío">Quindío</option>
          <option value="Risaralda">Risaralda</option>
          <option value="San Andrés y Providencia">
            San Andrés y Providencia
          </option>
          <option value="Santander">Santander</option>
          <option value="Sucre">Sucre</option>
          <option value="Tolima">Tolima</option>
          <option value="Valle del Cauca">Valle del Cauca</option>
          <option value="Vaupés">Vaupés</option>
          <option value="Vichada">Vichada</option>
        </select>
      </section>

      <section className="form-group">
        <label className="control-label">ciudad</label>
        <select className="form-control" id="ciudad">
          <option value="">-seleccionar-</option>
          <option value="Arauca">Arauca</option>
          <option value="Armenia">Armenia</option>
          <option value="Barranquilla">Barranquilla</option>
          <option value="Bogotá">Bogotá</option>
          <option value="Bucaramanga">Bucaramanga</option>
          <option value="Cali">Cali</option>
          <option value="Cartagena">Cartagena</option>
          <option value="Cúcuta">Cúcuta</option>
          <option value="Florencia">Florencia</option>
          <option value="Ibagué">Ibagué</option>
          <option value="Leticia">Leticia</option>
          <option value="Manizales">Manizales</option>
          <option value="Medellín">Medellín</option>
          <option value="Mitú">Mitú</option>
          <option value="Mocoa">Mocoa</option>
          <option value="Montería">Montería</option>
          <option value="Neiva">Neiva</option>
          <option value="Pasto">Pasto</option>
          <option value="Pereira">Pereira</option>
          <option value="Popayán">Popayán</option>
          <option value="Puerto Carreño">Puerto Carreño</option>
          <option value="Puerto Inírida">Puerto Inírida</option>
          <option value="Quibdó">Quibdó</option>
          <option value="Riohacha">Riohacha</option>
          <option value="San Andrés">San Andrés</option>
          <option value="San José del Guaviare">San José del Guaviare</option>
          <option value="Santa Marta">Santa Marta</option>
          <option value="Sincelejo">Sincelejo</option>
          <option value="Tunja">Tunja</option>
          <option value="Valledupar">Valledupar</option>
          <option value="Villavicencio">Villavicencio</option>
          <option value="Yopal">Yopal</option>
        </select>
      </section>

      <section className="form-group">
        <label className="control-label">marca</label>
        <select className="form-control" id="marca">
          <option value="">-seleccionar-</option>
          <option value="Americanino">Americanino</option>
          <option value="American Eagle">American Eagle</option>
          <option value="Chevignon">Chevignon</option>
          <option value="Esprit">Esprit</option>
          <option value="Naf Naf">Naf Naf</option>
          <option value="rifle">rifle</option>
        </select>
      </section>

    

      <section className="form-group">
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </section>
    </form>
  );
};

export default FormularioCliente;
