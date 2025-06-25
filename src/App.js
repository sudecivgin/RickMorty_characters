import { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episode from "./Pages/Episode";
import Location from "./Pages/Location";


function Home(){
  <Router>
    <div className="App">
      <Navbar/>
      </div>
<Routes>
<Route path ="/" element={<Home/>} />
<Route path ="/episodes" element={<Episode/>} />
<Route path ="/location" element={<Location/>} />

</Routes>
  </Router>
}

const App =() =>{
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    status: '',
    species: '',
    gender: ''
  });
  const [fetchData, setFetchData] = useState({});
  const { info, results } = fetchData;

  const api = useMemo(() => {
    let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
    

    if (filters.status) url += `&status=${filters.status}`;
    if (filters.species) url += `&species=${filters.species}`;
    if (filters.gender) url += `&gender=${filters.gender}`;
    
    return url;
  }, [pageNumber, search, filters]);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        console.error("API Error:", error);
        setFetchData({}); //-----state sıfırlanma işlemi
      }
    })();

  }, [api]);

  return (
    <div className="App">
      <Navbar/>
     
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 mb-4">


            {/* prop ekledim */}

            <Filters setFilters={setFilters} />
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="row">
              <Cards results={results || []} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        info={info}
      />
    </div>
  );
}

export default App;