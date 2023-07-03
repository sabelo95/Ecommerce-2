import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import './Checkout.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Checkout = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [data, setData] = useState("");
   
  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <div className="form-group">
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            placeholder="Ingresa tu nombre"
          />
          {errors.firstName && (
            <span className="invalid-feedback">
              El campo nombre es requerido
            </span>
          )}
        </div>

        <div className="form-group">
          <input
            {...register("secondName", { required: true, maxLength: 20 })}
            className={`form-control ${errors.secondName ? "is-invalid" : ""}`}
            placeholder="Ingresa tu Apellido"
          />
          {errors.secondName && (
            <span className="invalid-feedback">
              El campo apellido es requerido
            </span>
          )}
        </div>

        <div className="form-group">
          <input
            {...register("Cel", { required: true, maxLength: 20 })}
            className={`form-control ${errors.Cel ? "is-invalid" : ""}`}
            placeholder="Celular"
          />
          {errors.Cel && (
            <span className="invalid-feedback">
              El campo celular es requerido
            </span>
          )}
        </div>

        <div className="form-group">
          <input
            {...register("Email", { required: true, maxLength: 50 })}
            className={`form-control ${errors.Email ? "is-invalid" : ""}`}
            placeholder="Email"
          />
          {errors.Email && (
            <span className="invalid-feedback">
              El campo email es requerido
            </span>
          )}
        </div>

        <input className="btn btn-dark" type="submit" value="Enviar" />
        <p>{data}</p>
      </form>
    </>
  );
};

export default Checkout;
