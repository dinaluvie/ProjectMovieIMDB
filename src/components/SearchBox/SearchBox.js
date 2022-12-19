import React from 'react';

import { useState } from 'react';
import { connect } from 'react-redux';
import { changeSearchLine } from '../../redux/actions';
import './SearchBox.css';


const mapStateToProps = (state) => {
    return {
        searchLine: state.searchLine,
    }
  };
  
const mapDispatchToProps = dispatch => ({
    onChangeSearchline: (text) => dispatch(changeSearchLine(text))
  });


function SearchBox({ onChangeSearchline }) {

    const [searchLine, setSearchLine ] = useState()

    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
    }

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        onChangeSearchline(searchLine);
    }
    

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);