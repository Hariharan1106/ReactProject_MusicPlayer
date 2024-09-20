import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './music_album.css'
// import MusicHome from './components/MusicHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import MusicDetailPage from './components/MusicDetailPage';
import DataMusic from './DataMusic';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
      
      
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Spotify</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/songs" >songs</a>
                </li>
                </ul>
                </div>
          </div>
        </nav>
        <Routes>
         <Route
           path='/'
           element={<DataMusic />}>
         </Route>    
        <Route
           path='/song/:SongName'
           element={<MusicDetailPage />}>
        </Route>
       </Routes>
        </Router> 
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
