import React, { useState, useEffect} from "react";
import "../style.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// import "./Table.css"
import TableJquery from "./TableJquery";

const Table = () => {
 

  const [loadList, setLoadList] = useState([]);

  const loads = async () => {
    const response = await axios.get("https://kuljetuskeikka.herokuapp.com/api/get/");
    setLoadList(response.data);
  };

  useEffect(() => {
      loads();
  },[]);


  const deleteLoad = (id) => {
    // Varmistetaan haluaako käyttäjä poistaa kuorman
    if(
      window.confirm("Haluatko varmasti poistaa kuorman?")
      ) {
    axios.delete(`https://kuljetuskeikka.herokuapp.com/api/delete/${id}`);
        setTimeout(() => loads(), 400);
      }
  };

  return (
    <div class="container-fluid">
      <form className="table-div">
        <table
          
          class="table table-hover table-light table-bordered table-striped table-responsive-stack"
        >
          <thead className="table-header">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Lähettäjä</th>
              <th scope="col">Vastaanottaja</th>
              <th scope="col">Tuote</th>
              <th scope="col">Auto</th>
              <th scope="col">Nro</th>
              <th scope="col">kg/m3</th>
              <th scope="col">Poista</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {loadList.map((val) => {
              return (
                <tr key={val.id} className="table-container">
                 
                  <td> {val.sender}</td>

                  <td>{val.recipient} </td>

                  <td>{val.product}</td>

                  <td>{val.vehicle}</td>

                  <td>{val.number}</td>

                  <td>{val.mass}</td>

                  <td>
                  
                    <Link to="/TableEdit/">
                    <Button>Edit</Button>
                    </Link>
                    <Button
                      type="button" class="btn btn-secondary btn-lg"
                      onClick={() => {
                        deleteLoad(val.id);
                      }}
                    >
                      Poista
                    </Button>                   
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
  
    </div>
  );
};

export default Table;
