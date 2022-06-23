import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu";
import styles from './Menu.module.css'
import classNames from 'classnames';
import { useState } from 'react';
import Link from "next/link";
import Items from "../../../types/appMenuItems";
import Logo from "../../atoms/Logo/Logo";
const Menu=({items,wrspperClass,logoClass}:{items:Items,wrspperClass:string,logoClass:string})=>{
    const [isClicked,toggleIsClicked]=useState(false);
    return (
        <div className={classNames(wrspperClass)}>
            <div className={classNames(styles.menuClass)}>
                <HamburgerMenu onClick={()=> toggleIsClicked(!isClicked)}/>
                {isClicked &&(
                    <div className={styles.subMenu}>{items.map((val)=>{
                        return <div key={val.id} onClick={()=> toggleIsClicked(!isClicked)}><Link href={val.href}>{val.title}</Link></div>
                    })}</div>
                )}
            </div>
            <Logo className={logoClass}></Logo>
        </div>
    );
}
export default Menu;