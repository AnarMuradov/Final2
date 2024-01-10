import React, { useContext } from "react";
import { FetchContext } from "../../context/FetchContext";
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";


const Home = () => {
  const { api } = useContext(FetchContext);
  const { addbasket } = useContext(BasketContext);
  
  return (
    <div>
      {api.map((x) => {
        return (
          <div key={x._id}>
            <div>{x.name}</div>
            <div>{x.price}</div>
            <button onClick={() => addbasket(x)}>Add</button>
            <Link to={`/Detail/${x._id}`}>Detail</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
