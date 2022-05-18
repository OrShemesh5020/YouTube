import styles from './SearchInput.module.css'
import classNames from 'classnames'
const SearchInput=({className,onChange}:{className:object, onChange:Function})=>{
return(
        <input className={classNames(styles.input,className)} placeholder="Search..." onChange={onChange}></input>
);
}
export default SearchInput;