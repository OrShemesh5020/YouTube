import styles from './SearchInput.module.css'
import classNames from 'classnames'
const SearchInput=({className,onChange,value}:{className:string, onChange:Function, value:string})=>{
return(
        <input value={value} className={classNames(styles.input,className)} placeholder="Search..." onChange={onChange}></input>
);
}
export default SearchInput;