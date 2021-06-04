import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../AppProvider";
import Cards from "../../components/shared/Card";
import "./Search.css";
import { EpisodeGraph } from "../../helpers/graphQl";
import { useParams } from "react-router-dom";

import notFound from "../../assets/images/NotFoundImage.png";
import loadingImg from "../../assets/images/circles.svg"


export default function Search() {
  const { episode, setEpisode } = useContext(AppContext);
  const { search, setSearch } = useContext(AppContext);
  const params= useParams();
  
  
  useEffect(()=>{
    setSearch(params.id)

  },[params])

  setEpisode(EpisodeGraph(search))
  
let load;
  if (episode === true) {
    load = <img src={loadingImg}/>
    }else if(episode){
      load =  (
        <Cards
          episodeName={episode.name}
          image={`https://rickandmortyapi.com/api/character/avatar/${episode.id}.jpeg`}
          date={episode.air_date}
          key={episode.id}></Cards>);
      }else if(episode === null || episode == ""){
     load = (
      <div className="notFound">
        <img src={notFound} alt="notFound"></img>
        <span>Not Found</span>
      </div>
    );
  }
  return <div className="card-container">{load}</div>;
}
