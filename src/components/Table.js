import React, { useState, Fragment } from "react";
import "./Table.css";
import data from "./Table-data.json";
import { nanoid } from "nanoid";
import TableRead from "./TableRead";
import TableEditing from "./TableEditing";

const Table = () => {
  const [loads, setLoads] = useState(data);
  const [addFormData, setAddFormData] = useState({
    sender: "",
    recipient: "",
    product: "",
    vehicle: "",
  });
  const [editFormData, setEditFormData] = useState({
    sender: "",
    recipient: "",
    product: "",
    vehicle: "",
  });

  const [editLoadId, setEditLoadId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    // Luodaan muuttuja uusille kuormille
    const newLoad = {
      id: nanoid(),
      sender: addFormData.sender,
      recipient: addFormData.recipient,
      product: addFormData.product,
      vehicle: addFormData.vehicle,
    };

    const newLoads = [...loads, newLoad];
    setLoads(newLoads);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedLoad = {
      id: editLoadId,
      sender: editFormData.sender,
      recipient: editFormData.recipient,
      product: editFormData.product,
      vehicle: editFormData.vehicle,
    };

    const newLoads = [...loads];

    const index = loads.findIndex((load) => load.id === editLoadId);

    newLoads[index] = editedLoad;

    setLoads(newLoads);
    setEditLoadId(null);
  };

  const handleEditClick = (event, load) => {
    event.preventDefault();
    setEditLoadId(load.id);

    const formValues = {
      sender: load.sender,
      recipient: load.recipient,
      product: load.product,
      vehicle: load.vehicle,
    };

    setAddFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditLoadId(null);
  };

  const handleDeleteClick = (loadId) => {
    const newLoads = [...loads];

    const index = loads.findIndex((load) => load.id === loadId);

    newLoads.splice(index, 1);

    setLoads(newLoads);
  };

  return (
    <div className="table-comp">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Lähettäjä</th>
              <th>Vastaanottaja</th>
              <th>Tuote</th>
              <th>Auto</th>
              <th>Muokkaus</th>
            </tr>
          </thead>
          <tbody>
            {/*Now the program just reads the table or the user can modify it if necessary*/}
            {loads.map((load) => (
              <Fragment>
                {editLoadId === load.id ? (
                  <TableEditing
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <TableRead
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
          className="load-input"
          type="text"
          name="sender"
          required="required"
          placeholder="Lähettäjä"
          onChange={handleAddFormChange}
        />
        <input
          className="load-input"
          type="text"
          name="recipient"
          required="required"
          placeholder="Vastaanottaja"
          onChange={handleAddFormChange}
        />
        <input
          className="load-input"
          type="text"
          name="product"
          required="required"
          placeholder="Tuote"
          onChange={handleAddFormChange}
        />
        <input
          className="load-input"
          type="text"
          name="vehicle"
          required="required"
          placeholder="Auto"
          onChange={handleAddFormChange}
        />
        <button type="sumbit" className="load-input">
          Lisää
        </button>
      </form>
    </div>
  );
};

export default Table;
