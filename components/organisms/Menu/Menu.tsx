import HamburgerMenu from "../../atoms/HamburgerMenu/HamburgerMenu";
import styles from './Menu.module.css'
import classNames from 'classnames';
import { useState } from 'react';
import Link from "next/link";
import Items from "../../../types/appMenuItems";
import Logo from "../../atoms/Logo/Logo";
import { House } from "phosphor-react";
/* TODO: 
V   1. fix menu to not overflow the screen  
    2. add all menu items with youtube icons (don't show 'show more' part -> show all menu items)
V** 3. make sure the menu is scrollable (with height 100%)
    4. add the borders for every div
 ***5. try to implament the 'show more' functionality (hooks / css)
*/
const Menu=({items,wrspperClass}:{items:Items,wrspperClass:string})=>{
    const [isClicked,toggleIsClicked]=useState(false);
    return (
        <div className={classNames(wrspperClass)}>
            <div className={classNames(styles.menuClass)}>
                <HamburgerMenu onClick={()=> toggleIsClicked(!isClicked)}/>
                {isClicked &&(
                    <div className={styles.subMenu}>
                    <div className={styles.mainItems}>{items.map((val)=>{
                        return <div className={styles.item} key={val.id} onClick={()=> toggleIsClicked(!isClicked)}>
                            <div className={styles.icon}>{val.iconClass}</div>
                            <div className={styles.link}><Link href={val.href}>{val.title}</Link></div>
                            </div>
                    })}</div>
                    <div className= {styles.subItems}>{items.map((val)=>{
                        return <div className={styles.item} key={val.id} onClick={()=> toggleIsClicked(!isClicked)}>
                            <div className={styles.icon}>{val.iconClass}</div>
                            <div className={styles.link}><Link href={val.href}>{val.title}</Link></div>
                            </div>
                    })}</div>
                    <div className={styles.mainItems}>{items.map((val)=>{
                        return <div className={styles.item} key={val.id} onClick={()=> toggleIsClicked(!isClicked)}>
                            <div className={styles.icon}>{val.iconClass}</div>
                            <div className={styles.link}><Link href={val.href}>{val.title}</Link></div>
                            </div>
                    })}</div>
                    <div className={styles.mainItems}>{items.map((val)=>{
                        return <div className={styles.item} key={val.id} onClick={()=> toggleIsClicked(!isClicked)}>
                            <div className={styles.icon}>{val.iconClass}</div>
                            <div className={styles.link}><Link href={val.href}>{val.title}</Link></div>
                            </div>
                    })}</div>
                    <div className={styles.mainItems}>{items.map((val)=>{
                        return <div className={styles.item} key={val.id} onClick={()=> toggleIsClicked(!isClicked)}>
                            <div className={styles.icon}>{val.iconClass}</div>
                            <div className={styles.link}><Link href={val.href}>{val.title}</Link></div>
                            </div>
                    })}</div>
                    <div className={styles.mainItems}>{items.map((val)=>{
                        return <div className={styles.item} key={val.id} onClick={()=> toggleIsClicked(!isClicked)}>
                            <div className={styles.icon}>{val.iconClass}</div>
                            <div className={styles.link}><Link href={val.href}>{val.title}</Link></div>
                            </div>
                    })}</div>
                    </div>
                )}
            </div>
            <Logo className={styles.logo}></Logo>
        </div>
    );
}
export default Menu;