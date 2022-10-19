import React, { useState, useEffect } from "react";
import "../style.css";
import axios from "axios";


const ReadOnlyRow = ({handleEditClick, handleDeleteClick }) => {
 const [loadList, setLoadList] = useState([])
  useEffect (() =>{
    axios.get("http://localhost:3008/api/get/").then((response) => {
      setLoadList(response.data);
    });
  }, []);
 
  {loadList.map((val)=> {
  return (
    <tr className="table-container"type="button" onClick={(event) => handleEditClick(event, val)}>
      <td>{val.sender}</td>
      <td>{val.recipient}</td>
      <td>{val.product}</td>
      <td>{val.vehicle}</td>
      <td>{val.number}</td>
      <td>{val.mass}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(val.id)}>
          Delete
        </button>
      </td>
    </tr>
    
  );
})}
};

export default ReadOnlyRow;