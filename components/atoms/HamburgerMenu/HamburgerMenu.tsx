import Hamburger from './HamburgerMenu.png'
import Image from 'next/image'
const HamburgerMenu=()=>{
return(
     <Image onClick={clicked} src={Hamburger} alt="Hamburger menu"></Image>
);
}

function clicked() {
     console.log('you clicked on the Hamburger menu');
}
export default HamburgerMenu;