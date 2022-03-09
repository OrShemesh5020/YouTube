import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu";
import styles from './Menu.module.css'
const Menu=({items}:{items:[{iconSrc:string,title:string}]})=>{
    return (
        <div className={styles.wrapper}>
            <HamburgerMenu/>
            
        </div>
    );
}
export default Menu;