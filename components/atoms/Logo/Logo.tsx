import LogoSvg from "./Logo.png"
import Image from 'next/image'
import styles from './Logo.module.css';
import logo from './Logo.png';
import Link from "next/link";
import classNames from 'classnames';




const Logo=({className}:{className:string})=>{
    return(
       <div className={classNames(styles.logo,className)} onClick={clicked}>
           <Link href={"/home"} passHref><Image src={logo} alt="foo"/></Link>
       </div>
    );
}

function clicked() {
    console.log('you clicked on the logo');
}
export default Logo