// {loadList.map((val) => {
//     return (
// <tr>
//     <td>
//       <input
//         type="text"
//         placeholder="Lähettajä"
//         value={val.sender}
//         name="sender"
//         onChange={(e) => {
//           setSender(e.target.value);
//         }}
//       />
//     </td>
//     <td>
//       <input
//         type="text"
//         placeholder="Vastaanottaja"
//        value={val.recipient}
//         name="recipient"
//         onChange={(e) => {
//           setRecipient(e.target.value);
//         }}
//       />
//     </td>
//     <td>
//       <input
//         type="text"
//         placeholder="Tuote"
//         value={val.product}
//         name="product"
//         onChange={(e) => {
//           setProduct(e.target.value);
//         }}
//       />
//     </td>
//     <td>
//       <input
//         type="text"
//         placeholder="Auto"
//         value={val.vehicle}
//         name="vehicle"
//         onChange={(e) => {
//           setVehicle(e.target.value);
//         }}
//       />
//     </td>
//     <td>
//       <input
//         type="text"
//         placeholder="Numero"
//         value={val.number}
//         name="number"
//         onChange={(e) => {
//           setNumber(e.target.value);
//         }}
//       />
//     </td>
//     <td>
//       <input
//         type="text"
//         placeholder="Massa"
//         value={val.mass}
//         name="mass"
//         onChange={(e) => {
//           setMass(e.target.value);
//         }}
//       />
//     </td>
//     <td> <button
//                   onClick={(event) => {
//                     // handleEditClick(event,val);
//                     updateLoads(val.id)
//                   }}
//                 >
//                   Muokkaa
//                 </button></td>
//   </tr>
// )})}