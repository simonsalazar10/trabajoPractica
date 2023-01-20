import React, {useState, useEffect} from "react"
import axios from "axios"
const FormularioCliente = () => {
const uriClientes = "http://localhost:3100/clientes"

const [tipoIdentificacion, setTipoIdentificacion]=useState("")
const [numeroDeIdentificacion, setNumeroDeIdentificacion]=useState("")
const [nombre, setNombre]=useState("")
const [apellido, setApellido]=useState("")
const [fechaDeNacimiento, setFechaDeNacimiento]=useState("")
const [direccion, setDireccion]=useState("")  
const [pais, setPais]=useState("")  
const [departamento, setDepartamento]=useState("")  
const [ciudad, setCiudad]=useState("")  
const [marca, setMarca]=useState("")  
  
const GuardarCliente = async (e) =>{
  try {
    const respuesta = await axios.post(uriClientes, {
      "tipoIdentificacion": tipoIdentificacion,
      "numeroIdentificacion": numeroDeIdentificacion,
      "nombre": nombre,
      "apellido": apellido,
      "fechaNacimiento": fechaDeNacimiento,
      "direccion": direccion,
      "ciudad": ciudad,
      "departamento": departamento,
      "pais": pais,
      "marca": marca
    }
      
      )
      console.log("cliente agregado con exito")
  } catch (error) {
    console.log("no fue posible guardar cliente" + error) 
  }
}
  
  
return (
    <form onSubmit={GuardarCliente} className="row g-3 w-70 col-12">
      <section className="col-md-6">
        <label className="form-label">
        Tipo de identificacion
        </label>
        <select value={tipoIdentificacion} onChange={(e)=>{
         setTipoIdentificacion (e.target.value)
        }} className="form-select" id="tipoIdentificacion" required>
          <option defaultValue="" className="casillas">
           -seleccionar-
          </option>
          <option className="casillas" value="CC">Cedula</option>
          <option className="casillas" value="TI">Tarjeta de identidad</option>
          <option className="casillas" value="CE">Cedula de extranjeria</option>
        </select>
        {console.log(tipoIdentificacion)}
      </section>

      <section className="col-md-6">
        <label className="form-label">
        Numero de identificacion
        </label>
        <input value={numeroDeIdentificacion} onChange={(e)=>{
         setNumeroDeIdentificacion (e.target.value)
        }}
          type="text"
          className="form-control"
          id="numeroDeIdentificacion"
          name="numeroDeIdentificacion"
          placeholder="##########"
          required
        />
        {console.log(numeroDeIdentificacion)}
      </section>

      <section className="col-md-6">
        <label className="form-label">
          Nombre
        </label>
        <input value={nombre} onChange={(e)=>{
         setNombre (e.target.value)
        }}
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          placeholder="John"
          required
        />
        {console.log(nombre)}
      </section>

      <section className="col-md-6">
        <label className="form-label">
          Apellido
        </label>
        <input value={apellido} onChange={(e)=>{
         setApellido (e.target.value)
        }}
          type="text"
          className="form-control"
          id="apellido"
          name="apellido"
          placeholder="uribe"
          required
        />
        {console.log(apellido)}
      </section>

      <section className="col-md-6">
        <label className="form-label">
        Fecha de nacimiento
        </label>
        <input value={fechaDeNacimiento} onChange={(e)=>{
         setFechaDeNacimiento (e.target.value)
        }}
          type="date"
          className="form-control"
          id="fechaDeNacimiento"
          name="fechaDeNacimiento"
          required
        />
        {console.log(fechaDeNacimiento)}
      </section>

      <section className="col-md-6">
        <label className="form-label">
        Direccion
        </label>
        <input value={direccion} onChange={(e)=>{
         setDireccion (e.target.value)
        }}
          type="text"
          className="form-control"
          id="direccion"
          name="direccion"
          placeholder="calle 75a sur #44-25"
          required
        />
        {console.log(direccion)}
      </section>

      <section className="col-md-3">
        <label className="form-label">
          Pais
        </label>
        <select value={pais} onChange={(e)=>{
         setPais (e.target.value)
        }} className="form-select" id="pais" required>
          <option defaultValue=""  className="casillas">
          -seleccionar-
          </option>
          <option className="casillas" value="colombia">Colombia</option>
        </select>
        {console.log(pais)}
      </section>

      <section className="col-md-3">
        <label className="form-label">
        Departamento
        </label>
        <select value={departamento} onChange={(e)=>{
         setDepartamento (e.target.value)
        }} className="form-select" id="departamento" required>
          <option defaultValue=""  className="casillas">
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
        {console.log(departamento)}
      </section>

      <section className="col-md-3">
        <label className="form-label">
        Ciudad
        </label>
        <select value={ciudad} onChange={(e)=>{
         setCiudad (e.target.value)
        }} className="form-select" id="ciudad" required>
          <option defaultValue=""  className="casillas">
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
        {console.log(ciudad)}
      </section>

      <section className="col-md-3">
        <label className="form-label">
        Marca
        </label>
        <select value={marca} onChange={(e)=>{
         setMarca (e.target.value)
        }} className="form-select" id="marca" required>
          <option defaultValue=""  className="casillas">
          -seleccionar-
          </option>
          <option className="casillas" value="Americanino">Americanino</option>
          <option className="casillas" value="American Eagle">American Eagle</option>
          <option className="casillas" value="Chevignon">Chevignon</option>
          <option className="casillas" value="Esprit">Esprit</option>
          <option className="casillas" value="Naf Naf">Naf Naf</option>
          <option className="casillas" value="rifle">rifle</option>
        </select>
        {console.log(marca)}
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
