import React from "react";
import "../style.css";


const ReadOnlyRow = ({ load, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="table-container">
      <td>{load.sender}</td>
      <td>{load.recipient}</td>
      <td>{load.product}</td>
      <td>{load.vehicle}</td>
      <td>{load.number}</td>
      <td>{load.mass}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, load)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(load.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
