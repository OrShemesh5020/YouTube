import Input from '../../atoms/SearchInput/SearchInput';
import Button from '../../atoms/SearchButton/SearchButton';
import styles from './Search.module.css';
const Search = () => {
  return (
    <div className={styles.wrapper}>
        <Input className={styles.input} />
         <Button />
    </div>
  );
};
export default Search;
