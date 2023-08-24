// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function ItemsCard() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('http://localhost:3001/items');
//         setItems(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {items.map((item) => (
//         <div className="section1-card" key={item._id}>
//           <div className="section1-card-top">
//             <div className="card-top-text">
//               <h2>{item.brandName} {item.modelType}</h2>
//               <span>{item.itemDefects}</span>
//             </div>
//             <div className="section1-card-bottom">
//               <button className="card-bottom-btn">Trade</button>
//               <button className="card-bottom-btn">Contact</button>
//             </div>
//           </div>
//           <div className="card-top-img">
//             <img
//               src={item.imageUrl}
//               alt={item.brandName}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ItemsCard;
import modularsofa from "../../assets/images/modularsofa.jpg"
function ItemsCard() {
  return (
    <div className="section1-card">
      <div className="section1-card-top">
        <div className="card-top-text">
          <h2>Turkish Corner Sofa</h2>
          <span>
          Turkish restaurant modular corner office design fabric home furniture sofa sets 5 seater 
          </span>
          <span>
            Price : <b>200,000</b>
          </span>
        </div>
        <div className="section1-card-bottom">
          <button className="card-bottom-btn">Buy</button>
          <button className="card-bottom-btn">Contact</button>
        </div>
      </div>
      <div className="card-top-img">
        <img
          src={modularsofa}
          alt="Item picture"
        />
      </div>
    </div>
  );
}

export default ItemsCard;
