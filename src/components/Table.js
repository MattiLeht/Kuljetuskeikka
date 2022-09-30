import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./Table.css";
import data from "./table-data.json";
import ReadOnlyRow from "./TableRead";
import EditableRow from "./TableEditing";

const Table = () => {
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
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Lähettäjä</th>
              <th>Vastaanottaja</th>
              <th>Tuote</th>
              <th>Auto</th>
              <th>Nro</th>
              <th>kg/m3</th>
              <th>Muokkaus</th>
            </tr>
          </thead>
          <tbody>
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

      <h2>Lisää kuorma</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="sender"
          required="required"
          placeholder="Lähettäjä"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="recipient"
          required="required"
          placeholder="Vastaanottaja"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="product"
          required="required"
          placeholder="Tuote"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="vehicle"
          required="required"
          placeholder="Auto"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="number"
          required="required"
          placeholder="Numero"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="mass"
          required="required"
          placeholder="kg/m3"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Table;
