import './App.css';
import React, {useState} from 'react';
import Sidebar from './Components/Sidebar';
import Homepage from './Components/MainComponents/Homepage';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { fetchResults } from './API/youtubeapi';

const Shorts = () => <h2>Shorts Page</h2>;
const Subscription = () => <h2>Subscription Page</h2>;
const You = () => <h2>You Page</h2>;

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const updateSearchResults = async (results) => {
    const searchResult = await fetchResults(results);
    console.log("searchResult", searchResult);
    setSearchResults(searchResult);
  };
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className='App'>
        <Navbar toggleSidebar={toggleSidebar} updateSearchResults={updateSearchResults} ></Navbar>
        <div className='container'> 
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}></Sidebar>
            <div className='main-container'>
              <Routes>
                <Route path="/" element={ <Homepage searchResults={searchResults}/>}></Route>
                <Route path="/shorts" element={ <Shorts/>}></Route>
                <Route path="/Subscription" element={ <Subscription/>}></Route>
                <Route path="/you" element={ <You/>}></Route>
              </Routes>
            </div>
        </div>
      </div>
    </>
  )
}

export default App;