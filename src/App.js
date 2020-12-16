import './App.css';
import Table from "./components/table/table"
import Pagination from "./components/pagination/pagination"
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const headers = [{fieldId:'term', field: 'Term'},{fieldId:'iri', field: 'Link'}];

  const handlePaging = (newPage) => {
    console.log("New Page:", newPage);
    setCurrentPage(newPage)
  }

  useEffect(() => {
    fetch("https://www.ebi.ac.uk/ols/api/ontologies/efo/terms?page="+currentPage)
      .then(res => res.json(),        
      (error) => {
        console.log(error);
      })
      .then(
        (result) => {
          setTotalPages(result.page.totalPages);
          setData(result._embedded.terms.map(term =>{return {'term': term.label, 'iri':term.iri }}));
        });
  }, [currentPage])

  return (
    data && data.length > 0 ?
    <div className="App">
      <h1>OnLook Table</h1>
      <Pagination totalPages={totalPages} currentPage={currentPage} handlePaging={(newPage) => handlePaging(newPage)}/>
      <Table headers={headers} data={data} border striped/>
    </div>:
    <div className="App">
      <span>Loading</span>
    </div>
  );
}

export default App;
