import React, { useState, useEffect } from "react";
import "../style.css";
import axios from "axios";
import { useNavigate , useParams, Link } from "react-router-dom";
import TableJquery from "./TableJquery";


function TableEdit() {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [product, setProduct] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [number, setNumber] = useState("");
  const [mass, setMass] = useState("");

  const [loadList, setLoadList] = useState([]);
// Joonas! ÄLÄ VITTU POISTA MITÄÄN!


  useEffect(() => {
    axios
      .get("https://kuljetuskeikka.herokuapp.com/api/get/")
      .then((response) => {
        setLoadList({...response.data[0] });
      });
  }, []);
// Joonas! ÄLÄ VITTU POISTA MITÄÄN!
const updateLoads = (id) => {
  axios
    // Säädetty
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
    });
};
// Joonas! ÄLÄ VITTU POISTA MITÄÄN!
return (
  <div>
    <form>
    {loadList.map((val) => {
  return (
    <tr className="edit-table">
      <th></th>
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
        {" "}
        <button
          onClick={() => {
          // Joonas! ÄLÄ VITTU POISTA MITÄÄN!
            updateLoads(val.id);
          }}
        >
          Muokkaa
        </button>
      </td>
    </tr>
  );
})};

    </form>
  </div>
)}



export default TableEdit;


  // const [sender, setSender] = useState("");
  // const [recipient, setRecipient] = useState("");
  // const [product, setProduct] = useState("");
  // const [vehicle, setVehicle] = useState("");
  // const [number, setNumber] = useState("");
  // const [mass, setMass] = useState("");

  // const [loadList, setLoadList] = useState([]);

  // const submitLoads = () => {
  //     axios
  //       .post("https://kuljetuskeikka.herokuapp.com/api/insert/", {
  //         sender: sender,
  //         recipient: recipient,
  //         product: product,
  //         vehicle: vehicle,
  //         number: number,
  //         mass: mass,
  //       })

  //   };