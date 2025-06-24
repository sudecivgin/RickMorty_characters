import { useState, useEffect, useMemo } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
// App.js veya index.js dosyanızın en üstüne ekleyin
import './App.css';
function App() {
  const [pageNumber, setPageNumber] = useState(1);

const [search, setSearch, ]= useState("")


  const [fetchData, setFetchData] = useState({});
  const { info, results } = fetchData;

  // API URL'ini useMemo ile optimize ediyoruz (dependency array'de pageNumber var)
// API URL'ini search değişkenine de bağlı hale getirin
const api = useMemo(() => (
  `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
), [pageNumber, search]); // search değişkenini dependency array'e ekleyin

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        console.error("API Error:", error);
      }
    })();
  }, [api]); // api değiştiğinde yeniden çalışır

  return (
    <div className="App">
      <h1 className="text-center ubuntu bold my-4">
        Rick & Morty <span className="text-primary">Universe</span>
      </h1>


<Search setPageNumber={setPageNumber} setSearch={setSearch}/>


      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
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