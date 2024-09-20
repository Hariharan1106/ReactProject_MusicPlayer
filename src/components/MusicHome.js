import songs from "../Data/songs_db.json"
import  {useState,useEffect} from "react";
import { Link } from "react-router-dom";


function MusicHome() {
    const[music,setMusic] = useState([]);
    useEffect(() => {
    setMusic(songs)
    },[]);
    
    

    return(
        <div className="row row-cols-1 row-cols-md-6 row-cols-lg-5">
            {
                music.map(song => (
               <div className="musicbody col"> 
              <div className="card h-60">
                <img src={song.ImageUrl} width="150px" height="200px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h6 className="music-title">{song.SongName}</h6>
                   <button className="btn-success btn">{song.id}</button>
                   {/* <audio controls="controls" >
                                   <source src={song.SongUrl} />
                                   </audio> */}
                   <Link to={"/song/"+song.id} className="btn-light btn">Play the song</Link>
                     </div>
                      </div>
                 </div>
                 
                ))
            }
            </div>
         )
}


export default MusicHome;