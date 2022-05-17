import styles from './SearchInput.module.css'
import classNames from 'classnames'
import SearchResults from './../../../mock/SearchResults';
import handleFilter from '../../molecules/Search/Search'
const SearchInput=({className}:{className:object})=>{
return(
        <input className={classNames(styles.input,className)} placeholder="Search..." onChange={handleFilter}></input>
);
}
export default SearchInput;