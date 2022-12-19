import React from 'react';
import { connect } from 'react-redux';
import { addMovieToFavoriteBox} from "../../redux/actions";
import {useState} from 'react'

import './MovieItem.css';

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        favorite: state.favoriteItems.favoriteMovies
    }
  };
  
const mapDispatchToProps = dispatch => ({
    onMovieAddToFavoriteBox: (id) => dispatch(addMovieToFavoriteBox(id)),
    
  });

function MovieItem ({ onMovieAddToFavoriteBox,favorite,Poster,Title,Year, imdbID  }) {
    const [click,setClick]=useState(false)
    const clicked=()=>{
        if(!booleanMovie){
          onMovieAddToFavoriteBox(imdbID)
        setClick(false)  
        }
        else{
          setClick(true)  
        }
        
    }
    const booleanMovie=favorite.find((item)=>item.imdbID===imdbID)
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>{
                    
                    <button type="button" className={"movie-item__add-button "+((booleanMovie)?"movie-item__add-button-disabled":"movie-item__add-button-active")} disabled={click} onClick={clicked}>{booleanMovie?"Добавлен":"Добавить в список"}</button>
                   
                }
            </div>
        </article>
    );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);