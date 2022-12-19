const initialState = {
    searchLine: "",
    movies: [

    ],
    favoriteItems: {
            title: 'Новый список',
            favoriteMovies: [
                
            ]
        }
}
export default function reducer(state=initialState, action) {
const favoriteItemArray=state.favoriteItems
let payloadValue=action.payload
        switch(action.type) {
        case 'ADD_MOVIE_TO_FAVORITE_BOX':
            return {...state,favoriteItems: {...favoriteItemArray,favoriteMovies: favoriteItemArray.favoriteMovies.find(item => item?.imdbID === payloadValue)?
                [ ...favoriteItemArray.favoriteMovies ] : [ ...favoriteItemArray.favoriteMovies, state.movies.find(item => item?.imdbID === payloadValue) ]}
        }
        case 'DELETE_MOVIE_FROM_FAVORITE_BOX': 
            return {...state,favoriteItems: {...favoriteItemArray,favoriteMovies: favoriteItemArray.favoriteMovies.filter((item)=>{return payloadValue!==item.imdbID })},
              }
        case "CLEAR_FAVORITE_BOX":
            return {...state, favoriteItems: {...favoriteItemArray,title: "", movies: []}
            }
        case 'CHANGE_MOVIES_FOR_SEARCH':
            return {...state,movies: payloadValue,
              }
        case 'CHANGE_SEARCHLINE':
            return {...state,searchLine: payloadValue
            }
        case "CHANGE_TITLE_OF_FAVORITE_BOX":
            return { ...state, favoriteItems: {...favoriteItemArray,title: payloadValue}
            }
        default:
          return state;
    }
}