import Input from '../../atoms/SearchInput/SearchInput'
import Button from '../../atoms/SearchButton/SearchButton'
import styles from './Search.module.css'
const Search=()=>{
    return(
        <div className={styles.wrapper}>
        <div className={styles.input}><Input/></div>
        <div><Button/></div>
        </div>
    );
}
export default Search;