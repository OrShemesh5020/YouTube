import React, { useState } from 'react';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchButton from '../../atoms/SearchButton/SearchButton';
import styles from './Search.module.css';
import SearchResults from '../../../mock/SearchResults';
import classNames from 'classnames';

const Search = ({ className }: { className: string }) => {
  const [filteredData, setFilteredData] = useState([
    {
      id: 0,
      title: '',
    },
  ]);
  const [isResultsListOpen, setIsResultsListOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState('');

  const onChange = (event) => {
    setSelectedResult(event.target.value);
    const searchWord = event.target.value;

    const filterResults =
      searchWord === ''
        ? []
        : SearchResults.filter((val) => {
            return val.title.toLowerCase().includes(searchWord.toLowerCase());
          });
    setFilteredData(filterResults);
    setIsResultsListOpen(Boolean(filterResults.length));
  };

  return (
    <div className={styles.search}>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <SearchInput className={styles.input} onChange={handleFilter} />
          {filteredData.length != 0 && (
            <div className={styles.dataResult}>
              {filteredData.slice(0, 10).map((val) => {
                return <div className={styles.dataItem}>{val.title}</div>;
              })}
            </div>
          )}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <SearchButton />
      </div>
    </div>
  );
};
export default Search;
