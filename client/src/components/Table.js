import React, { useState, Fragment, useEffect } from "react";
import "../style.css";

import axios from "axios";
// import { useState } from 'react'
// import "./Table.css"
import TableJquery from "./TableJquery";

const Table = () => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [product, setProduct] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [number, setNumber] = useState("");
  const [mass, setMass] = useState("");

  const [loadList, setLoadList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3008/api/get/").then((response) => {
      setLoadList(response.data);
    });
  }, []);

  const submitLoads = () => {
    axios
      .post("http://localhost:3008/api/insert/", {
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

  const [updateLoadId, SetUpdateId] = useState(null);

  const handleChange = (event) => {
    loadList(event.target.value);
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

  // const handleEditClick = (event, val) => {
  //   event.preventDeafult();
  //   SetUpdateId(val.id);
  // };

  const deleteLoad = (kuorma) => {
    axios.delete(`http://localhost:3008/api/delete/${kuorma}`);
  };

  return (
    <div class="container-fluid">
      <form className="table-div">
        <table
          id="tableOne"
          class="table table-light table-bordered table-striped table-responsive-stack"
        >
          <thead className="table-header">
            <tr>
              <th scope="col">Lahettaja</th>
              <th scope="col">Vastaanottaja</th>
              <th scope="col">Tuote</th>
              <th scope="col">Auto</th>
              <th scope="col">Nro</th>
              <th scope="col">kg/m3</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {loadList.map((val) => {
              return (
                <tr className="table-container">
                  <td>{val.sender}</td>

                  <td>{val.recipient}</td>

                  <td>{val.product}</td>

                  <td>{val.vehicle}</td>

                  <td>{val.number}</td>

                  <td>{val.mass}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteLoad(val.id);
                      }}
                    >
                      Poista
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <div
              className="adding_load"
              class="table-light container-fluid px-0"
            >
              <form className="inputs">
                <input
                  className="field1"
                  type="text"
                  name="sender"
                  required="required"
                  placeholder="Lahettaja"
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
                    setSender(e.target.value);
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
                <button onClick={submitLoads}>Lisää</button>
              </form>
            </div>
          </tfoot>
        </table>
      </form>
    </div>
  );
};

export default Table;
