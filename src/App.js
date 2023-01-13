import React from 'react';
import {data} from "./data";
import "./style.css";
export default function Demo() {
  return (
    <div className="container">
      <h1>Music App</h1>
     <div className="audios">
       {data.map((item)=>{
         const{id,song,singer,img,movie,title,}=item;
         return <div key={id} className="card">
           <img src={img}alt=""/>
           <div className="song-desc">
             <p className="movie">{movie}</p>
             <p>{singer}</p>
             </div>
             <p className="title">{title}</p>
           <audio controls src={song}></audio>
         </div>
       })}
     </div>
    </div>
  )
}