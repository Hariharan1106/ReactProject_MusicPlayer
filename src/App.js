import './App.css';
import DataMusic from './DataMusic';
import MusicHome from './components/MusicHome';
import { Route,Routes, Router } from "react-router-dom";

function App() {
    <Router>
        <Routes>
   <Route
       path='/'
       element={<DataMusic />}>
   </Route>    
   <Route
       path='/songs'
       element={<DataMusic />}>
   </Route>
</Routes>
        </Router>
}

export default App;
