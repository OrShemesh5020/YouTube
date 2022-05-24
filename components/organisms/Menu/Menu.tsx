import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu";
import styles from './Menu.module.css'
import classNames from 'classnames';
import { useState } from 'react';
import Link from "next/link";
const Menu=({items,className}:{items:{iconSrc:string,title:string}[],className:string})=>{
    const [isClicked,ToggleIsClicked]=useState(false);
    return (
        <div className={classNames(styles.wrapper,className)}>
            <HamburgerMenu onClick={clicked}/>
            {isClicked &&(
                <div className={styles.subMenu}>{items.map((val)=>{
                    return <div onClick={clicked}><Link href={val.href}>{val.title}</Link></div>
                })}</div>
            )}
        </div>
    );
    function clicked(event) {
        // console.log(event) 
        ToggleIsClicked(!isClicked)
    }
}
export default Menu;