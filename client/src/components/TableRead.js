import React from "react";
import "../style.css";


const ReadOnlyRow = ({ load, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="table-container"type="button" onClick={(event) => handleEditClick(event, load)}>
      <td>{load.sender}</td>
      <td>{load.recipient}</td>
      <td>{load.product}</td>
      <td>{load.vehicle}</td>
      <td>{load.number}</td>
      <td>{load.mass}</td>
      
    </tr>
  );
};

export default ReadOnlyRow;
