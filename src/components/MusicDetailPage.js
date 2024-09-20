import { useParams } from "react-router-dom";
import React from "react";
import songs from "../Data/songs_db.json"



   function MusicDetailPage() {
   const {SongName} = useParams();
   

    // Filter based on SongName

        var filteredMusic = songs.filter(item => item.SongName == SongName);
        console.log("Music"+filteredMusic);
 
        return(
            <div className="card mb-3" style={{maxwidth: 540 }}>
            {
                filteredMusic.map(song => (
                    <div className="row ">
                      <div className="col-md-3 p-3">
                            <img src={song.ImageUrl} width="275px" height="2250px" class="img-fluid rounded-start" alt="..." />
                              <br/>
                          
                            </div>
                            <div className="col-md-4">
                            <div className="card-body">
                            <h5 className="card-title">{song.SongName}</h5>
                                 <p className="card-text">{song.MovieName} </p>
                                 <p className="card-text">{song.Artists}</p>
                                 <p className="card-text">{song.Year}</p> 
                                 <p className="card-text">{song.Genre}</p>
                                  <audio controls="controls" >
                                   <source src={song.SongUrl} />
                                   </audio>
                                   <br />
                                {/* <a className="btn-success btn" href='#'>{song.SongName}</a> */}
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}



export default MusicDetailPage;