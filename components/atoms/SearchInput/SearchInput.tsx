import styles from './SearchInput.module.css'
import classNames from 'classnames'
const SearchInput=({className}:{className:object})=>{
return(
        <input className={classNames(styles.input,className)} placeholder="search"></input>
);
}
export default SearchInput;