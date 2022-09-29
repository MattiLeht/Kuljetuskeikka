import React from "react";

const TableRead = ({ load, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{load.sender}</td>
      <td>{load.recipient}</td>
      <td>{load.product}</td>
      <td>{load.vehicle}</td>
      <td>
        <button ype="button" onClick={(event) => handleEditClick(event, load)}>
          Muuta
        </button>
        <button type="button" onClick={() => handleDeleteClick(load.id)}>
          Poista
        </button>
      </td>
    </tr>
  );
};

export default TableRead;
