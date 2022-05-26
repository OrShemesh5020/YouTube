import ProfileButton from "../../atoms/ProfileButton/ProfileButton";
import styles from './Profile.module.css'
import classNames from 'classnames';
import { useState } from 'react';
import ProfileMenu from "../../../data/profileMenu";
import Link from "next/link";

const Profile=({className}:{className:string})=>{
    const [isProfileMenuOpen,ToggleProfileMenuOpen]=useState(false)
    return(
        <div className={classNames(styles.wrapper,className)}><ProfileButton onClick={()=> ToggleProfileMenuOpen(!isProfileMenuOpen)}/>
        {isProfileMenuOpen &&(
            <div className={styles.subMenu}>
                {ProfileMenu.map((val)=>{
                  return  (
                    <div key={val.id} onClick={()=> ToggleProfileMenuOpen(!isProfileMenuOpen)}>
                        <Link href={val.href}>
                            {val.title}
                        </Link>
                    </div>
                 )})}
            </div>
        )}
        </div>
        
    );
    
}
export default Profile;