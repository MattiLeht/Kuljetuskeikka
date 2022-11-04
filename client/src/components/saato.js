return (
  <div class="container-fluid">
    <form className="table-div">
      <table
        id="tableOne"
        class="table table-light table-bordered table-striped table-responsive-stack"
      >
        <thead className="table-header">
          <tr>
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
              <tr className="table-container">
                <td>{val.sender}</td>

                <td>{val.recipient} </td>

                <td>{val.product}</td>

                <td>{val.vehicle}</td>

                <td>{val.number}</td>

                <td>{val.mass}</td>

                <td>
                  <button
                    onClick={() => {
                      deleteLoad(val.id);
                    }}
                    class="learn-more"
                  >
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Poista</span>
                  </button>
                </td>
              </tr>
            );
          })}
          <div
            className="table-container"
            class="table-light container-fluid px-0"
          >
            <form className="inputs">
              <tr className="inputfield">
                <td>
                  <input
                    className="field1"
                    type="text"
                    name="sender"
                    required="required"
                    placeholder="Lähettäjä"
                    onChange={(e) => {
                      setSender(e.target.value);
                    }}
                  />
                </td>
                <td>
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
                </td>
                <td>
                  <input
                    type="text"
                    name="product"
                    placeholder="Tuote"
                    onChange={(e) => {
                      setProduct(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="vehicle"
                    placeholder="Auto"
                    onChange={(e) => {
                      setVehicle(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="number"
                    placeholder="Numero"
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="mass"
                    placeholder="kg/m3"
                    onChange={(e) => {
                      setMass(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <button onClick={submitLoads} class="cta">
                    <span>Lisää</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </button>
                </td>
              </tr>
            </form>
          </div>
        </tbody>
      </table>
    </form>
  </div>
);