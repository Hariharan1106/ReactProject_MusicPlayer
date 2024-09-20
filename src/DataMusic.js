import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

const DataMusic = () => {
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);

    useEffect(() =>{
        axios.get('http://localhost:5000/songs')
        .then(response =>{
            setData(response.data);
            setLoading(false);
        }) 
        .catch(error =>{
            setError(error);
            setLoading(false);
        });
    },[]);
    if(loading){
        return<div>Loading....</div>
    }
    if(error){
        return<div>Error:{error.message}</div>
    }
    return(
      <div className="row row-cols-1 row-cols-md-5">
        {
        data.map(song => (
            <div className="col">
              <div className="card h-20">
                <img src={song.ImageUrl} width="150px" height="200px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{song.SongName}</h5>
                  {/* <p className="card-text">{movie.story}
                  </p> */}
                  <Link to={"/song/"+song.SongName}>Play</Link>
                </div>
              </div>
            </div>
            ))
        }
        </div>
      );
    };
    
    export default DataMusic;