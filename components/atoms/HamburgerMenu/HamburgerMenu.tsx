import Hamburger from './HamburgerMenu.png'
import Image from 'next/image'
import styles from './HamburgerMenu.module.css'
const HamburgerMenu=({onClick}:{onCkick:Function})=>{
return(
     <div className={styles.menu}><Image onClick={onClick} src={Hamburger} alt="Hamburger menu"></Image></div>
);
}

export default HamburgerMenu;