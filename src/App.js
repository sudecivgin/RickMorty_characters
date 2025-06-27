import { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter  as Router, Routes, Route, Navigate } from "react-router-dom"; 
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CharacterDetail from "./components/Cards/CharacterDetail";
import PortalPage from "./Pages/PortalPage";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    status: "",
    species: "",
    gender: "",
  });
  const [fetchData, setFetchData] = useState({});
  const [isLoading, setIsLoading] = useState(true); 
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
        setIsLoading(true); 
        const response = await fetch(api);
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        console.error("API Error:", error);
        setFetchData({ info: {}, results: [] }); 
      } finally {
        setIsLoading(false); 
      }
    })();
  }, [api]);

  return (
    <>
      {isLoading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Search setPageNumber={setPageNumber} setSearch={setSearch} />
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 mb-4">
                <Filters setFilters={setFilters} />
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="row">
                  <Cards results={results || []} />
                </div>
              </div>
            </div>
          </div>
          <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
         
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/location" element={<Location />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/portal" element={<PortalPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

