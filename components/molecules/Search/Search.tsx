import React,{useState} from 'react';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import Button from '../../atoms/SearchButton/SearchButton';
import styles from './Search.module.css';
import SearchResults from '../../../mock/SearchResults';
import classNames from 'classnames';
const Search = ({className}:{className:string}) => {
  const [filteredData,setFilteredData]=useState([]);
  const handleFilter=(event)=>{
    const searchWord= event.target.value
    // console.log(searchWord);
     const filterResults=SearchResults.filter((val)=>{
      return val.title.toLowerCase().includes(searchWord.toLowerCase())
    });
    setFilteredData(filterResults);
    if (searchWord ===""){
      setFilteredData([]);
    }
  }
  return (
    <div className={classNames(styles.search,className)} >
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
      <SearchInput className={styles.input} onChange={handleFilter}/>
      {filteredData.length!=0 &&(
        <div className={styles.dataResult}>
         {filteredData.slice(0,10).map((val)=>{
           return <div className={styles.dataItem}>{val.title}</div>;
          })}
       </div>
       )}
       </div>
    </div>
    <div className={styles.buttonWrapper}>
      <Button />
    </div>
  </div>
  );
};
export default Search;
