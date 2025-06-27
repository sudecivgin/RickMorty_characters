import { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const [id, setId] = useState(1);
  
  const { dimension = "", name = "", type = "" } = info;
  const api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(api).then(res => res.json());
        setInfo(data);

        const residentsData = await Promise.all(
          data.residents.map(url => fetch(url).then(res => res.json()))
        );
        setResults(residentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <div className="container location-container">
      <div className="row mb-3">
        <h1 className="text-center mb-3 location-title">


          
          Location: <span className="text-primary">{name || "Unknown"}</span>
        </h1>
        <h5 className="text-center location-info">
          Type: {type || "Unknown"} | Dimension: {dimension || "Unknown"}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">👇🏻
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setId} total={126} className="filter-control" />
        </div>
        <div className="col-lg-8 col-12"> 
          <div className="row">
            <Cards page="/locations/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;