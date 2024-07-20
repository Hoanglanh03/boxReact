import React, { useState, useEffect } from "react";
import Card from "./components/card/Card.jsx";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // Hàm gọi API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        if (response.status === 200) {
          setData(response.data);
        }

        // console.log(response);
        console.log(response.data);
      } catch (error) {
        alert("hoàng lanh:", error);
      }
    };
    fetchData();
  }, [clicked]);

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>

      {data?.slice(0, 3).map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default App;
