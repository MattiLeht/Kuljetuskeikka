import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr className="table-edit">
      <td>
        <input
          type="text"
          
          placeholder="Lähettäjä"
          name="sender"
          value={editFormData.sender}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          
          placeholder="Vastaanottaja"
          name="recipient"
          value={editFormData.recipient}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          
          placeholder="Tuote"
          name="product"
          value={editFormData.product}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          
          placeholder="Auto"
          name="vehicle"
          value={editFormData.vehicle}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          
          placeholder="Kuorman numero"
          name="number"
          value={editFormData.number}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          
          placeholder="kg/m3"
          name="mass"
          value={editFormData.mass}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
