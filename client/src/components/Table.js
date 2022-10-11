import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../style.css";
import data from "./table-data";
import ReadOnlyRow from "./TableRead";
import EditableRow from "./TableEditing";
import axios from "axios";
import TableJquery from "./TableJquery";


const Table = () => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [product, setProduct] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [number, setNumber] = useState("");
  const [mass, setMass] = useState("");

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
  const [loads, setLoads] = useState(data);
  // Adding new data
  const [addFormData, setAddFormData] = useState({
    sender: "",
    recipient: "",
    product: "",
    vehicle: "",
    number: "",
    mass: "",
  });
  // Editing formdata
  const [editFormData, setEditFormData] = useState({
    sender: "",
    recipient: "",
    product: "",
    vehicle: "",
    number: "",
    mass: "",
  });
  // Editing existing data
  const [editLoadId, setEditLoadId] = useState(null);
  // Handling form changes
  const handleAddFormChange = (event) => {
    event.preventDefault();
    // Target attribute

    // Created new load construction

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    // Adding new data
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    // Adding new data
    setAddFormData(newFormData);
  };
  // Handle edit data
  const handleEditFormChange = (event) => {
    event.preventDefault();

    // Target attribute
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    // Adding edited data
    setEditFormData(newFormData);
  };
  // Handling added data.
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    // Created new load construction
    const newLoad = {
      id: nanoid(),
      sender: addFormData.sender,
      recipient: addFormData.recipient,
      product: addFormData.product,
      vehicle: addFormData.vehicle,
      number: addFormData.number,
      mass: addFormData.mass,
    };
    // Add new data in loads
    const newLoads = [...loads, newLoad];
    setLoads(newLoads);
  };
  // Handling edited data.
  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    // Variable where existing data is modified
    const editedLoad = {
      id: editLoadId,
      sender: editFormData.sender,
      recipient: editFormData.recipient,
      product: editFormData.product,
      vehicle: editFormData.vehicle,
      number: editFormData.number,
      mass: editFormData.mass,
    };
    // Constuction for new loads
    const newLoads = [...loads];
    // Find the index for the data to be edited
    const index = loads.findIndex((load) => load.id === editLoadId);

    newLoads[index] = editedLoad;

    setLoads(newLoads);
    setEditLoadId(null);
  };
  // Handling edit button
  const handleEditClick = (event, load) => {
    event.preventDefault();
    setEditLoadId(load.id);
    // Construction to form values
    const formValues = {
      sender: load.sender,
      recipient: load.recipient,
      product: load.product,
      vehicle: load.vehicle,
      number: load.number,
      mass: load.mass,
    };
    // Set edited form data to form values
    setEditFormData(formValues);
  };
  // Handle cancel button
  const handleCancelClick = () => {
    setEditLoadId(null);
  };
  // Handle delete button
  const handleDeleteClick = (loadId) => {
    const newLoads = [...loads];
    // Finding the index to delete
    const index = loads.findIndex((load) => load.id === loadId);

    newLoads.splice(index, 1);

    setLoads(newLoads);
  };

  return (
    <div class="container-fluid">
      <form className="table-div" onSubmit={handleEditFormSubmit}>
        <table
          id="tableOne"
          class="table table-dark table-bordered table-striped table-responsive-stack"
        >
          <thead className="table-header">
            <tr>
              <th scope="col">Lahettaja</th>
              <th scope="col">Vastaanottaja</th>
              <th scope="col">Tuote</th>
              <th scope="col">Auto</th>
              <th scope="col">Nro</th>
              <th scope="col">kg/m3</th>
              <th scope="col">Muokkaus</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {loads.map((load) => (
              // Adding fragment where happend table editting and reading.
              <Fragment>
                {editLoadId === load.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    load={load}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <div className="adding_load" class="container-fluid px-0">
        <form onSubmit={handleAddFormSubmit} className="inputs">
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
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Table;
