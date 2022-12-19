import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ListPage.css';

 function FavoriteItem( itemOf ){
    const {item}=itemOf
    const [movie, setMovie] = useState([])
    const getMovie =  ()=>{
         fetch(`http://www.omdbapi.com/?i=${item}&apikey=95fc1cdf`)
        .then(response=>response.json()) 
        .then(data=>setMovie(data)) 
    }

    useEffect(()=>{
        getMovie()
    }, [])

    return (
        <div class="favoriteItems">
            
        <li key={item}>
            <span class="movie__style">Фильм: </span>
            <a href={`https://www.imdb.com/title/${item}/`} target="_blank">{movie.Title}</a>
        </li>
        </div>
    );
}

export default function ListPage () {
    const { id } = useLocation().state
    const [data, setData] = useState([])
    const getData =  (id)=>{
         fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        .then(response=> response.json())
        .then(data=>setData(data))
    }
    useEffect(()=>{
        getData(id)
    },[id])

    return (
        <div className="list-page">
            <h1 className="list-page__title">Список: {data.title}</h1>
                {data.movies?.map((item) => {
                    return (<FavoriteItem item={item} key={item}/> );
                })}
        </div>
    );
}
 
