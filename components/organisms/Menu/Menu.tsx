import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu";
import styles from './Menu.module.css'
import classNames from 'classnames';
const Menu=({items,className}:{items:{iconSrc:string,title:string}[],className:string})=>{
    return (
        <div className={classNames(styles.wrapper,className)}>
            <HamburgerMenu/>
            
        </div>
    );
}
export default Menu;