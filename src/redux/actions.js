export function addMovieToFavoriteBox(id) {
    return {
      type: 'ADD_MOVIE_TO_FAVORITE_BOX',
      payload:id
      
    }
  }
  
export function deleteMovieFromFavoriteBox(id) {
  return {
    type: 'DELETE_MOVIE_FROM_FAVORITE_BOX',
    payload: id
  }
}
  
export function changeMoviesForSearchBox(movies) {
  return {
    type: 'CHANGE_MOVIES_FOR_SEARCH',
    payload: movies
  }
}

export function changeSearchLine(search) {
  return {
    type: 'CHANGE_SEARCHLINE',
    payload: search
  }
}


export function changeTitleOfFavoriteBox(titleChange) {
  return {
    type: 'CHANGE_TITLE_OF_FAVORITE_BOX',
    payload: titleChange
  }
}

export function clearFavoriteBox(text) {
  return {
    type: 'CLEAR_FAVORITE_BOX',
    payload: text
  }
}

