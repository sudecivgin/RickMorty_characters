import { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from '../components/Filters/Category/InputGroup';
import "./Episodes.css";

const Episodes = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState({});
  const [id, setId] = useState(1);
  
  const { air_date = "", name = "" } = info;
  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(api).then(res => res.json());
        setInfo(data);

        const charactersData = await Promise.all(
          data.characters.map(url => fetch(url).then(res => res.json()))
        );
        setResults(charactersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  return (
    <div className="container episode-container">
      <div className="row mb-3">
        <h1 className="text-center mb-3 episode-title">
          Episode: <span className="text-primary">{name || "Unknown"}</span>
        </h1>
        <h5 className="text-center episode-date">
          Air Date: {air_date || "Unknown"}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">👇🏻
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setId} total={51} className="filter-control" />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;