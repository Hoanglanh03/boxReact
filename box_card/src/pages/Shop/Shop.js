// import React, { useState, useEffect } from "react";
// import Card from "../../components/Card/Card";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Shop.css";

// function Shop() {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         if (response.status === 200) {
//           setData(response.data);
//         }
//       } catch (error) {
//         alert("Error:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleCardClick = (id) => {
//     navigate(`/shop/${id}`);
//   };

//   return (
//     <div className="listCard">
//       {data.slice(0, 3).map((card) => (
//         <div key={card.id} onClick={() => handleCardClick(card.id)}>
//           <Card
//             image={card.image}
//             title={card.title}
//             description={card.description}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Shop;
import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Shop.css";

function Shop() {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        alert("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="listCard">
      {data.slice(0, 4).map((card) => (
        <div key={card.id} className="Card">
          <Link to={`/shop/${card.id}`}>
            <Card
              image={card.image}
              title={card.title}
              price={card.price}
              description={card.description}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Shop;
