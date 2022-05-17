import React, { useState } from 'react';
import Input from '../../atoms/SearchInput/SearchInput';
import Button from '../../atoms/SearchButton/SearchButton';
import styles from './Search.module.css';
import SearchResults from '../../../mock/SearchResults';
const Search = () => {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
  };
  return (
    <div className={styles.wrapper}>
      <Input className={styles.input} />
      <Button />
      {filteredData.length != 0 && (
        <div className={styles.dataResult}>
          {SearchResults.map((val, key) => {
            return <div className={styles.dataItem}>{val.title}</div>;
          })}
        </div>
      )}
    </div>
  );
};
export default Search;
