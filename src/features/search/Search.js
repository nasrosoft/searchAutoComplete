import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleSearch
} from './searchSlice';
import styles from './Search.module.css';

export function Search() {
  const search = useSelector(state => state.search.result) 
  const data = useSelector(state => state.search.data) 
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <div className={styles.row}>

        <input 
        className={styles.button}
        value={searchValue}
        name="search"
        onChange={(e) => {
          dispatch(handleSearch(e.target.value.toLocaleLowerCase().replace(/\s/g, '')));
          setSearchValue(e.target.value)
        }}


        />
        <button
          className={styles.button}

        >
          Search
        </button>
      </div>
      <div style={{ position: 'relative'}}>
      {searchValue ? search.map((element, idx) => 
        <h6 
          className={styles.button}
          key={idx}
          onClick={(e) => setSearchValue(data[element])}
          >
          {data[element]}
        </h6>
          ): ''
        }
        

      </div>
    </div>
  );
}
