import Menu from '../../molecules/Menu/Menu';
import Profile from '../../molecules/Profile/Profile';
import Search from '../../molecules/Search/Search';
import styles from './Header.module.css'
const Header=()=>{
    return(
        <div className={styles.header}>
            <div className={styles.leftSide}>
                <Menu/>
            </div>
            <div className={styles.middelSide}>
                <Search/>
            </div>
            <div className={styles.rightSide}>
                <Profile/>
            </div>
        </div>
    );

};
export default Header;