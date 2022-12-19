import React from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import { changeMoviesForSearchBox } from "../../redux/actions";

import './Movies.css';
import { useEffect } from 'react';
const mapStateToProps = (state) => {
    return {
        searchLine: state.searchLine,
        movies: state.movies
    }
  };
  
const mapDispatchToProps = dispatch => ({
    onChangeMoviesForSearchBox: (movies) => dispatch(changeMoviesForSearchBox(movies))
});
function Movies({ onChangeMoviesForSearchBox , searchLine, movies}) {
   
    const getMovies = async ()=>{
        if(searchLine){
            await fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=95fc1cdf`)
            .then(response=>response.json())
            .then(data=>onChangeMoviesForSearchBox(data.Search))
        }
        
    }
    useEffect(()=>{
        getMovies()
    }, [searchLine])

    return ( 
        <ul className="movies">
            { movies?.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Movies);