import Hamburger from './HamburgerMenu.png'
import Image from 'next/image'
import styles from './HamburgerMenu.module.css'
const HamburgerMenu=()=>{
return(
     <div className={styles.menu}><Image  onClick={clicked} src={Hamburger} alt="Hamburger menu"></Image></div>
);
}

function clicked() {
     console.log('you clicked on the Hamburger menu');
}
export default HamburgerMenu;