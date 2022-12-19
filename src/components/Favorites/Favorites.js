import React, {  useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovieToFavoriteBox, deleteMovieFromFavoriteBox, clearFavoriteBox, changeTitleOfFavoriteBox } from "../../redux/actions";
import './Favorites.css';


const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        
        favoriteBoxMovies:state.favoriteItems.favoriteMovies
    }
  };
const mapDispatchToProps = dispatch => ({
    onMovieAddToFavoriteBox: (id) => dispatch(addMovieToFavoriteBox(id)),
    onMovieDeleteFromFavoriteBox: (id) => dispatch(deleteMovieFromFavoriteBox(id)),
    onChangeTitleOfFavoriteBox: (id) => dispatch(changeTitleOfFavoriteBox(id)),
    onClearFavoriteBox: () => dispatch(clearFavoriteBox()),
  });

function Favorites({favoriteBoxMovies, onMovieDeleteFromFavoriteBox, onChangeTitleOfFavoriteBox }) {
    
    const [value, setValue] = useState("")
    
    
    
    let arrOfMovies = []
    const [click,setClick]=useState(false)
     const [list,setList]=useState({})
      const inputOnChange = (e) => {
        setValue(e.target.value)
    }
    const getListOnClick = (event)=>{
        onChangeTitleOfFavoriteBox(value)
        setClick(true)
        arrOfMovies=[]
       favoriteBoxMovies.forEach(movie=>{
            arrOfMovies.push(movie.imdbID)
            return movie;
        })
    

        
        fetch("https://acb-api.algoritmika.org/api/movies/list/",{
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "title": value,
                "movies": arrOfMovies
            })
        })
        .then(response=>{return response.json()})
        .then(data=>{setList(data)
            
        return data}
        )  
    }

    return (
        <div className="favorites">
            <input value={value} placeholder='Введите название списка' className="favorites__name" onChange={inputOnChange} disabled={click} />
            <ul className="favorites__list">
                       {favoriteBoxMovies.map((movie) => {
                        return(
                            <li key={movie.imdbID} className="favorites__list-item">
                                {movie.Title} ({movie.Year})
                                <button className="favorites__list-button-delete" onClick={()=>onMovieDeleteFromFavoriteBox(movie.imdbID)}>Удалить</button>
                                </li>)}
                            )}
            </ul>
          { (favoriteBoxMovies.length && value && click)?<Link to={`/list/${list.id}`} state={{...list}}>Список по ссылке</Link>:<button type="button" className={"favorites__save "+((favoriteBoxMovies.length && value)?"favorites__save-cursor":"favorite__save-disabled")} disabled={click} onClick={getListOnClick}>Сохранить список</button>}
        </div>
    )
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);