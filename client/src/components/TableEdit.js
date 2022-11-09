import React, { useState, useEffect } from "react";
import "../style.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import TableJquery from "./TableJquery";

function TableEdit() {
  // Define the variables where the given information is placed
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [product, setProduct] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [number, setNumber] = useState("");
  const [mass, setMass] = useState("");
  
  const history = useNavigate();

  const [loadList, setLoadList] = useState([]);
  // Getting data in database  
  useEffect(() => {
    axios
      .get("https://kuljetuskeikka.herokuapp.com/api/get/")
      .then((response) => {
        setLoadList(response.data);
      });
  }, []);
  // Update data
  const updateLoads = (id) => {
    axios
      
      .put("https://kuljetuskeikka.herokuapp.com/api/update/", {
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
        // Renturn back to table
        setTimeout(() => history("/Table"), 300);
      });
  };
  // Adding information
  return (
    <div class="container-fluid">
      <table class="table table-hover table-light table-bordered table-striped table-responsive-stack">
        {loadList.map((val) => {
          return (
            <tr className="table-container">
              <td>
        <input
          type="text"
          placeholder="Lähettajä"
          name="sender"
          onChange={(e) => {
            setSender(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Vastaanottaja"
          name="recipient"
          onChange={(e) => {
            setRecipient(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Tuote"
          name="product"
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Auto"
          name="vehicle"
          onChange={(e) => {
            setVehicle(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Numero"
          name="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Massa"
          name="mass"
          onChange={(e) => {
            setMass(e.target.value);
          }}
        />
      </td>
              
              <td>
                <Link to="/Table">
                  <button
                    onClick={() => {
                    
                      updateLoads(val.id);
                    }}
                  >
                    Muokkaa
                  </button>
                </Link>
              </td>
            </tr>
          );
        })}
        ;
      </table>
    </div>
  );
}

export default TableEdit;

