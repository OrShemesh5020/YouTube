import LogoSvg from "./Logo.png"
import Image from 'next/image'
import styles from './Logo.module.css'
const Logo=()=>{
    return(
        <Image onClick={clicked} src={LogoSvg} alt="YouTube Logo"></Image>
    );
}

function clicked() {
    console.log('you clicked on the logo');
}
export default Logo