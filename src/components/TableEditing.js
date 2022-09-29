import React from "react";

const TableEditing = (
  editFormData,
  handleEditFormChange,
  handleCancelClick
) => {
  return (
    <tr className="adding">
      <td>
        <input
          type="text"
          name="sender"
          required="required"
          placeholder="Muuta Lähettäjä"
          value={editFormData.sender}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="recipient"
          required="required"
          placeholder="Muuta Vastaanottaja"
          value={editFormData.recipient}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="product"
          required="required"
          placeholder="Muuta Tuote"
          value={editFormData.product}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="vehicle"
          required="required"
          placeholder="Muuta Auto"
          value={editFormData.vehicle}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Tallenna</button>
        <button type="button" onClick={handleCancelClick}>
          Peruuta
        </button>
      </td>
    </tr>
  );
};

export default TableEditing;
