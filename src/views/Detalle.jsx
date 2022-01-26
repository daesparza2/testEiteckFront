import React from 'react';
import { useEffect, useState } from 'react'
import { getCharacterId } from '../services/CharacterService';
import {CardCharacter} from  '../components/CardCharacter'
import styles from '../css/Detalla.module.css'
import { getEpisodes } from '../services/EpisodeService';

export const Detalle = ({id}) => {

  const [character, setCharacter] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [resultEpisode, setResultEpisde] = useState([]);

  useEffect(() => {
      getCharacterId(id).then((result)=> {
        setCharacter(result);
        setEpisodes(result.episode);
      });

  },[]);

  useEffect(() => {
    if(episodes){
      let episodeIds = [];
      episodes.forEach(ep => {
        episodeIds.push(ep.charAt(ep.length - 1));
      });
      getEpisodes(episodeIds).then(({results}) => {
        setResultEpisde(results);
        console.log(results);
      });
    }
  },[]);

  return <>
    <div className={styles.Detalle}>
      <CardCharacter character={character} />
      <br/>
      <h3>{character?.gender}</h3>
      <h3>{character?.location?.name}</h3>
      <br/>
      <h4>Episodios en los que aparece:</h4>
      <ol>
        {resultEpisode.map(value => {
          return <h5 key={value.id}>{value.name} {value.episode}</h5>
        })}
      </ol>
    </div>
  </>;
};
