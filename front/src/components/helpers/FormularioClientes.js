const FormularioCliente = () => {
  return (
    <section>
      <section>
        <h3>tipo de identificacion</h3>
        <select className="form-select">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </section>

      <section>
        <h3>numero de identificacion</h3>
        <section class="mb-3">
          <input />
        </section>
      </section>

      <section>
        <h3>nombre</h3>
        <section class="mb-3">
          <input />
        </section>
      </section>

      <section>
        <h3>apellido</h3>
        <section class="mb-3">
          <input />
        </section>
      </section>

      <section>
        <h3>fecha de nacimiento</h3>
        <section class="mb-3">
          <input type="date" />
        </section>
      </section>

      <section>
        <h3>direccion</h3>
        <section class="mb-3">
          <input />
        </section>
      </section>

      <section>
        <h3>ciudad</h3>
        <select className="form-select">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </section>

      <section>
        <h3>departamento</h3>
        <select className="form-select">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </section>

      <section>
        <h3>pais</h3>
        <select className="form-select">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </section>

      <section>
        <h3>marca</h3>
        <select className="form-select">
          <option defaultValue>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </section>
    </section>
  );
};

export default FormularioCliente;
