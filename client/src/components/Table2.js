import React, { useState, useEffect, Fragment } from "react";
import "../style.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
// import "./Table.css"
import TableJquery from "./TableJquery";

const Table2 = () => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [product, setProduct] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [number, setNumber] = useState("");
  const [mass, setMass] = useState("");

  const [loadList, setLoadList] = useState([]);

  useEffect(() => {
    axios
      .get("https://kuljetuskeikka.herokuapp.com/api/get/")
      .then((response) => {
        setLoadList(response.data);
      });
  }, []);

  const submitLoads = () => {
    axios
      .post("https://kuljetuskeikka.herokuapp.com/api/insert/", {
        sender: sender,
        recipient: recipient,
        product: product,
        vehicle: vehicle,
        number: number,
        mass: mass,
      })
      .then(() => {
        alert("successful insert");
      });
  };

  const updateLoads = (id) => {
    axios
      // Säädetty
      .put("http://localhost:3008/api/update/", {
        sender: sender,
        recipient: recipient,
        product: product,
        vehicle: vehicle,
        number: number,
        mass: mass,
        id: id,
      })
      .then((response) => {
        alert("update");
      });
  };


  const deleteLoad = (id) => {
    axios.delete(`https://kuljetuskeikka.herokuapp.com/api/delete/${id}`);
  };

  return (
    <div class="container-fluid">
      <form className="table-div">
        
        <table
          id="tableOne"
          class="table table-hover table-light table-bordered table-striped table-responsive-stack"
        >
          <thead className="table-header">
            <tr>
              <th scope="col">Lähettäjä</th>
              <th scope="col">Vastaanottaja</th>
              <th scope="col">Tuote</th>
              <th scope="col">Auto</th>
              <th scope="col">Nro</th>
              <th scope="col">kg/m3</th>
              <th scope="col">Poista</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {loadList.map((val) => {
              return (
                <tr className="table-container">
                  <td><input
          type="text"
          placeholder="Lähettajä"
          name="sender"
          onChange={(e) => {
            setSender(e.target.value);
          }}
        /> {val.sender}</td>

                  <td>{val.recipient} </td>

                  <td>{val.product}</td>

                  <td>{val.vehicle}</td>

                  <td>{val.number}</td>

                  <td>{val.mass}</td>

                  <td>
                    <Button
                      type="button" class="btn btn-secondary btn-lg"
                      onClick={() => {
                        deleteLoad(val.id);
                      }}
                    >
                      Poista
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
      <div className="adding_load" class="table-light container-fluid px-0">
        <form className="inputs">
          <input 
            className="field1"
            type="text"
            name="sender"
            required="required"
            placeholder="Lähettäjä"
            onChange={(e) => {
              setSender(e.target.value);
            }}
          />
          <input
            className="field2"
            type="text"
            name="recipient"
            required="required"
            placeholder="Vastaanottaja"
            onChange={(e) => {
              setRecipient(e.target.value);
            }}
          />
          <input
            type="text"
            name="product"
            placeholder="Tuote"
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          />
          <input
            type="text"
            name="vehicle"
            placeholder="Auto"
            onChange={(e) => {
              setVehicle(e.target.value);
            }}
          />
          <input
            type="text"
            name="number"
            placeholder="Numero"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <input
            type="text"
            name="mass"
            placeholder="kg/m3"
            onChange={(e) => {
              setMass(e.target.value);
            }}
          />
          <Button type="button" class="btn btn-secondary btn-lg" onClick={submitLoads}>
            Lisää
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Table2;
