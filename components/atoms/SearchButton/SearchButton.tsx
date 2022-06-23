import SearchIcon from './SearchIcon.png'
import Image from 'next/image';
import styles from './SearchButton.module.css'
import Input from '../../atoms/SearchInput/SearchInput'
const SearchButton=()=>{
    return(
        <button onClick={clicked} className={styles.button}><Image src={SearchIcon} alt="search"></Image></button>
    );

}

function clicked() {
    console.log('searching');
}
export default SearchButton;