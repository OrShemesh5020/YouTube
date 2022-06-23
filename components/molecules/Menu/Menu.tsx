import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu";
import Logo from "../../atoms/Logo/Logo";
import styles from './Menu.module.css'
const Menu=()=>{
    return (
        <div className={styles.wrapper}>
                <div className={styles.menu}><HamburgerMenu/></div>
                <div className={styles.logo}><Logo/></div>
        </div>
    );
}
export default Menu;