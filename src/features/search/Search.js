import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleSeatch
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
          dispatch(handleSeatch(e.target.value.toLocaleLowerCase().replace(/\s/g, '')));
          setSearchValue(e.target.value)
        }}


        />
        <button
          className={styles.button}

        >
          Search
        </button>
      </div>
      <div>
        {searchValue ? search.map(element => 
          <div 
          className={styles.button}
          key={element}
          onClick={(e) => setSearchValue(data[element])}
          >{data[element]}</div>
          ): ''}
        

      </div>
    </div>
  );
}
