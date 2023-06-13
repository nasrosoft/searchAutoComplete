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
  // const [res, setRes] = useState([]);

  const onKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      setSearchValue(data.at(search))

    }
  };
   const result = search.map((element, idx) => 
  <h6 
   className={styles.button}
   style={{    padding: '7px 4px',
    margin: '7px 4px !important'}}
   key={idx}
   onClick={(e) => setSearchValue(data[element])}
   >
   {data[element]}
 </h6>

   )
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
        onKeyDown={onKeyDown}
        />
        <button
          className={styles.button}
        >
          Search
        </button>
      </div>
      <div style={{ position: 'absolute'}}>
      
      {searchValue ?  result: ''}
        

      </div>
    </div>
  );
}
