import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu";
import styles from './Menu.module.css'
import classNames from 'classnames';
import { useState } from 'react';
import Link from "next/link";
import Items from "../../../types/appMenuItems";
const Menu=({items,className}:{items:Items,className:string})=>{
    const [isClicked,toggleIsClicked]=useState(false);
    return (
        <div className={classNames(styles.wrapper,className)}>
            <HamburgerMenu onClick={()=> toggleIsClicked(!isClicked)}/>
            {isClicked &&(
                <div className={styles.subMenu}>{items.map((val)=>{
                    return <div key={val.id} onClick={()=> toggleIsClicked(!isClicked)}><Link href={val.href}>{val.title}</Link></div>
                })}</div>
            )}
        </div>
    );
}
export default Menu;