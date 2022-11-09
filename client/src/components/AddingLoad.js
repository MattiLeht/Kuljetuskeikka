import React, { useState, useEffect } from "react";
import "../style.css";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import TableJquery from "./TableJquery";

const initialState = {
  sender: "",
  recipient: "",
  product: "",
  vehicle: "",
  number: "",
  mass: "",
  status: "",
};

const AddingLoad = () => {
  const [state, setState] = useState(initialState);

  const { sender, recipient, product, vehicle, number, mass, status } = state;

  const history = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://kuljetuskeikka.herokuapp.com/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sender || !recipient) {
      alert("Syötä lähettäjä ja vastaanottaja!");
    } else {
      axios
        .post("https://kuljetuskeikka.herokuapp.com/api/insert/", {
          sender,
          recipient,
          product,
          vehicle,
          number,
          mass,
          status,
        })
        .then(() => {
          setState({
            sender: "",
            recipient: "",
            product: "",
            vehicle: "",
            number: "",
            mass: "",
            status: "",
          });
        })

        .catch((err) => alert(err.response.data));
    }
    setTimeout(() => history("/Table"), 300);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="adding_load" class="table-light container-fluid px-0">
      <form onSubmit={handleSubmit}>
        <input
          className="field1"
          type="text"
          name="sender"
          id="sender"
          placeholder="Lähettäjä"
          value={sender || ""}
          onChange={handleInputChange}
        />
        <input
          className="field2"
          type="text"
          name="recipient"
          id="recipient"
          placeholder="Vastaanottaja"
          value={recipient || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="product"
          id="product"
          placeholder="Tuote"
          value={product || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="vehicle"
          id="vehicle"
          placeholder="Auto"
          value={vehicle || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="number"
          id="number"
          placeholder="Numero"
          value={number || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mass"
          id="mass"
          placeholder="kg/m3"
          value={mass || ""}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="status"
          id="status"
          placeholder="Tilanne"
          value={status || ""}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Muokkaa" : "Tallenna"} />
        <Link to="/Table">
          <input type="button" value="Takaisin" />
        </Link>
      </form>
    </div>
  );
};

export default AddingLoad;
